const uuid = require('uuid-random');
const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateRegisterInput = require('../../Validations/register');
const validateLoginInput = require('../../Validations/login');

const User = require('../../Models/UserSchema');

// @route POST api/users/register
// @desc Register user
// @access Public
// noinspection JSUnresolvedFunction
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    /* eslint consistent-return:0 */
    User.findOne({ name: req.body.name }).then(user => {
        if (user) {
            return res.status(400).json({ name: 'Name already exists' });
        }
    });

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            active: [String],
            deleted: [String],
            knowWord: [String]
        });

        // noinspection JSUnresolvedFunction
        bcrypt.genSalt(10, (err, salt) => {
            // noinspection JSUnresolvedFunction
            bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) throw error;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user1 => res.json(user1))
                    .catch(e => console.error('Error during hash password',e));
            });
        });
    });

    return res.status(301);
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// noinspection JSUnresolvedFunction
router.post('/login', (req, res) => {
    // Form Validations
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const { email } = req.body;
    const { password } = req.body;
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ email: 'Email not found' });
        }

        // noinspection JSUnresolvedFunction
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {

                const payload = {
                    id: user.id,
                    name: user.name
                };

                const secret = uuid().toString();
                jwt.sign(
                    payload,
                    secret,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ password: 'Incorrect password ' });
            }
        });
    });
});

// @route PUT api/users/words
// @desc Update user preferences (words)
// @access Public
// noinspection JSUnresolvedFunction
router.put('/words', (req, res) => {

    const { id, word, option } = req.body;
    const { wordName } = word;
    const shouldBeUpdated = word[option];

    if (!shouldBeUpdated) {
        User.findByIdAndUpdate(id, { $addToSet: { [option]: [wordName] } },
            (err, result) => {
                if (err) {
                    return res.json(err);
                }
                return res.json(result);

            });
    } else {
        User.findByIdAndUpdate(id, { $pull: { [option]: wordName } },
            (err, result) => {
                if (err) {
                    return res.json(err);
                }

                return res.json(result);
            });
    }
});

// @route GET api/users/words
// @desc Get user preferences (words)
// @access Public
// noinspection JSUnresolvedFunction
router.get('/words', (req, res) => {
    const { id } = req.query;
    User.findById(id,
        (err, result) => {
            const { active, knowWord, deleted } = result;

            if (err) {
                return res.json(err);
            }

            return res.json({ active, knowWord, deleted });
        });
});

// noinspection JSUndefinedPropertyAssignment
module.exports = router;

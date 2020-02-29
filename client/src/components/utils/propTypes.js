import PropTypes from 'prop-types';

export const authProp = PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            iat: PropTypes.number.isRequired,
            exp: PropTypes.number.isRequired
        })
    ]).isRequired,
    loading: PropTypes.bool.isRequired
});

export const wordProp = PropTypes.shape({
    examples: PropTypes.arrayOf(PropTypes.string).isRequired,
    _id: PropTypes.string.isRequired,
    wordName: PropTypes.string.isRequired,
    wordTranslate: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    deleted: PropTypes.bool.isRequired,
    knowWord: PropTypes.bool.isRequired,
    __v: PropTypes.number.isRequired
});

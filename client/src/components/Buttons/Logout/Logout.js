import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// noinspection ES6CheckImport
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../../actions/users/logoutUser';
import ShortcutsModal from '../../Modals/ShortcutsModal';
import { authProp } from '../../utils/propTypes';
import DropdownMenu from './DropdownMenu/DropdownMenu';

const Logout = ({ logoutUser, history, auth }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <DropdownMenu
                logoutUser={logoutUser}
                history={history}
                userName={auth.user.name}
                setOpen={setOpen}
            />
            {isOpen && <ShortcutsModal isOpen={isOpen} setOpen={setOpen} />}
        </>
    );
};

Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    auth: authProp.isRequired
};

const mapStateToProps = state => {
    const { auth } = state;

    return {
        auth
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Logout));

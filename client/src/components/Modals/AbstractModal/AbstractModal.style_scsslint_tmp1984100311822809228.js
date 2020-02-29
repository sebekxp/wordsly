import React, { useState } from 'react';
import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap';

const AbstractModal = Component => {
    return props => ({ isOpen, setOpen, children }) => {
        const toggle = () => setOpen(!isOpen);
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Available keyboard shortcuts</ModalHeader>
                {/*{children}*/}
                <Component {...props} />
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    };
};

export default AbstractModal;

import React from 'react';
import { Button, Modal, ModalFooter } from 'reactstrap';

export const ModalWrapper = ({ isOpen, setOpen, children }) => {
    const toggle = () => setOpen(!isOpen);
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            {children}
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    );
};

const AbstractModal = Component => {
    return ({ isOpen, setOpen }) => (
        <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
            <Component isOpen={isOpen} setOpen={setOpen} />
        </ModalWrapper>
    );
};

export default AbstractModal;

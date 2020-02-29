import React from 'react';
import { ModalHeader } from 'reactstrap';
import AbstractModal from '../AbstractModal/AbstractModal.style';
import { P } from '../ShortcutsModal/ShortcutsModal.style';

const AddWordModal = ({ isOpen, setOpen }) => {
    const toggle = () => setOpen(!isOpen);
    return (
        <>
            <ModalHeader toggle={toggle}>Can not create word</ModalHeader>
            <P>The name is too short or too long to be used as a navigation word</P>
        </>
    );
};

export default AbstractModal(AddWordModal);

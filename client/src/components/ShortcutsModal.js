/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = ({ isOpen, setOpen }) => {

    const toggle = () => setOpen(!isOpen);
    const pStyle = {
        fontFamily: 'Roboto',
        fontVariantLigatures: 'normal'
    };

    return (
        // TODO Made infos about shortcuts
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>How to use shortcuts?</ModalHeader>
            <ModalBody>
                <p style={pStyle}>When you are on the "Examples" bookmark:</p>
                <p style={pStyle}>Arrow Right -> Change to the next word</p>
                <p style={pStyle}>Arrow Left -> Change to the previous word</p>
                <p style={pStyle}>Space -> Shows and hides sample sentences</p>
                <p style={pStyle}>Arrow Down -> Scroll to the next sentence when examples are shows</p>
                <p style={pStyle}>Arrow Up -> Scroll to the previous sentence when examples are shows</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalExample;
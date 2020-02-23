/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = ({ isOpen, setOpen }) => {

    const toggle = () => setOpen(!isOpen);

    const pStyle = {
        fontFamily: 'Roboto',
        fontVariantLigatures: 'normal',
        padding: '5px 10px',
        margin: '0 0'
    };
    const spanStyle = {
        fontWeight: '600'
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Available keyboard shortcuts</ModalHeader>
            <p style={pStyle}>
                Shortcuts help you save time. Available can be used throughout the application and some
                available only for a specific activity.
            </p>
            <ModalBody>
                <p style={pStyle}><span style={spanStyle}>[Arrow Right]</span> - change to the next word</p>
                <p style={pStyle}><span style={spanStyle}>[Arrow Left]</span> - change to the previous word</p>
                <p style={pStyle}>
                    <span style={spanStyle}>[Space] </span>
                    - shows and hides sample sentences (Examples bookmark)
                </p>
                <p style={pStyle}>
                    <span style={spanStyle}>[Space] </span>
                    - flips the flashcard (Flashcards bookmark)
                </p>
                <p style={pStyle}>
                    <span style={spanStyle}>[Arrow Down] </span>
                    - scrolls to the next sentence when the examples are expanded
                </p>
                <p style={pStyle}>
                    <span style={spanStyle}>[Arrow Up] </span>
                    - scrolls to the previous sentence when the examples are expanded
                </p>
                <p style={pStyle}>
                    <span style={spanStyle}>[Ctrl + Arrow Right] </span>
                    - changes to the next bookmark
                </p>
                <p style={pStyle}>
                    <span style={spanStyle}>[Ctrl + Arrow Left] </span>
                    - changeslo to the previous bookmark
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalExample;
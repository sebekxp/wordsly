import React from 'react';
import { ModalHeader } from 'reactstrap';
import { P, SPAN } from './ShortcutsModal.style';
import AbstractModal from '../AbstractModal/AbstractModal.style';

const ShortcutsModal = ({ isOpen, setOpen }) => {
    const toggle = () => setOpen(!isOpen);

    return (
        <>
            <ModalHeader toggle={toggle}>Available keyboard shortcuts</ModalHeader>
            <P>
                <SPAN>[Arrow Left]</SPAN> - change to the previous word
            </P>
            <P>
                <SPAN>[Arrow Right]</SPAN> - change to the next word
            </P>
            <P>
                <SPAN>[Space] </SPAN>- shows and hides sample sentences (Examples bookmark)
            </P>
            <P>
                <SPAN>[Space] </SPAN>- flips the flashcard (Flashcards bookmark)
            </P>
            <P>
                <SPAN>[Arrow Down] </SPAN>- scrolls to the next sentence when the examples are
                expanded
            </P>
            <P>
                <SPAN>[Arrow Up] </SPAN>- scrolls to the previous sentence when the examples are
                expanded
            </P>
            <P>
                <SPAN>[Ctrl + Arrow Right] </SPAN>- changes to the next bookmark
            </P>
            <P>
                <SPAN>[Ctrl + Arrow Left] </SPAN>- changes to the previous bookmark
            </P>
        </>
    );
};

export default AbstractModal(ShortcutsModal);

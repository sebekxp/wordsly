import styled from 'styled-components';
import { FormatQuote } from 'styled-icons/material/FormatQuote';
import Colors from '../../utils/Colors';

export const ExampleContentComponent = styled.div`
    height: auto;
    overflow: hidden;

    p {
        padding: 10px 0;
        width: 95%;
        margin: 0;
    }
`;

export const Quote = styled(FormatQuote)`
    width: 5%;
    height: 24px;
    margin: 10px 5px;
    color: ${Colors.DEFAULT_VIOLET};
`;

export const KeyWordHeader = styled.div`
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-items: center;

    h3 {
        padding: 5px 0;
    }
`;

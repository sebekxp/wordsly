import styled from 'styled-components';

export const ExpandHideIcon = styled.div`
        display: none;
        width: 25px;
        height: 25px;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
        animation-name: bounce;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }
    
    @keyframes bounce {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-9px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-3px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    `;

export const MoreExamples = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 51px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
        text-decoration: underline;

        ${ExpandHideIcon} {
            display: block;
        }
    }
`;

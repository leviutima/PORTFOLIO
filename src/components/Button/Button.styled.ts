import { Link } from "react-router-dom";
import styled from "styled-components";

interface PropsButton {
    $bgColor?: string;
    $borderColor?: string;
    $textColor?: string;
    $hoverColor?: string
}

export const Ancora = styled.a`
    text-decoration: none;
    & :hover {
        background-color: var(--cinza);
    }
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    & :hover {
        background-color: var(--cinza);
    }
`

export const ButtonStyle = styled.div <PropsButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 11vw;
    height: 6vh;

    color: var(--preto);
    background-color: var(--branco);
    font-size: 22px;
    border-radius: 10px;
    cursor: pointer;

    background-color: ${(props) => props.$bgColor || 'transparent'};
    color: ${(props) => props.$textColor};
    border: 1px solid ${(props) => props.$borderColor};


    @media (max-width: 768px) {
        width: 35vw;
        height: 8vh;

        .button-text {
            display: none;
        }
    }

`

export const ImgStyle = styled.img `
    width: 2vw;
    
    @media (max-width: 768px) {
        width: 10vw;
    }
`
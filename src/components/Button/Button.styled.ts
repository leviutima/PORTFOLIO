import styled from "styled-components";

export const Ancora = styled.a`
    text-decoration: none;
    color: var(--branco);
    & :hover {
        background-color: #6962AD;
    }
`

export const ButtonStyle = styled.div `
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


`

export const ImgStyle = styled.img `
    width: 2vw;
    
`
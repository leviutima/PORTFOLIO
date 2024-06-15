import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

export const CardProjetos = styled.div`
    cursor: pointer;
    width: 15vw;
    height: 15vh;
    overflow: hidden;
    border-radius: 10px;
`;

export const ImgCard = styled.img`
    width: 100%;
    height: 100%;

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const TextSection = styled.div `
    color: var(--branco);
`
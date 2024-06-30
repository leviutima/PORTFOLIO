import styled from "styled-components";

export const ProjetoSection = styled.section `
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-left: 10%;
    padding-bottom: 5%;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5%;
    }
`

export const SectionProjeto = styled.div `
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ProjetoCard = styled.div `
    display: flex;
    flex-direction: row;
    gap: 80px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
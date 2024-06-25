import styled from "styled-components";

export const MainContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormCard = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 52px;

    border-radius: 10px;
    height: 60vh;
    width: 35vw;
    background-color: #191A19;
    margin-bottom: 5%;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`

export const ContainerLabel = styled.label `
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export const InputStyle = styled.input `
    width: 25vw;
    height: 6vh;

    background-color: var(--cinza);
    border: none;
    border-radius: 8px;
`
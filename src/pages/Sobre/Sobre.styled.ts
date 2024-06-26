import styled, { keyframes } from "styled-components";

export const MainContainer = styled.main `
    display: flex;
    flex-direction: column;
    gap: 150px;
`

// Define a animação de rotação
const rotateBorder = keyframes`
  0% {
    border-color: #fff #fff transparent transparent;
  }
  25% {
    border-color: transparent #fff #fff transparent;
  }
  50% {
    border-color: transparent transparent #fff #fff;
  }
  75% {
    border-color: #fff transparent transparent #fff;
  }
  100% {
    border-color: #fff #fff transparent transparent;
  }
`;

export const SectionMain = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const ImgProfile = styled.img`
  border-radius: 10px;
  border: 2px solid #fff; 
  animation: ${rotateBorder} 5s linear infinite; 
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 25vw;


  & h2 {
    font-size: 52px;
  }

  & p {
    color: var(--cinza);
  }


`;

export const Negrito = styled.span `
    font-weight: 700;
    color: var(--branco);
`
export const SectionContato = styled.section `
  
`

export const SectionExercito = styled.section `
  
`
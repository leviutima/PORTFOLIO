import styled, { keyframes } from "styled-components";

export const MainContainer = styled.main `
    display: flex;
    flex-direction: column;
    gap: 150px;
`

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
  }
`;

export const ImgProfile = styled.img`
  border-radius: 10px;
  border: 2px solid #fff; 
  animation: ${rotateBorder} 5s linear infinite; 
  width: 25vw;

  @media (max-width: 768px) {
    width: 80vw;
    height: 50vh;

  }
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


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    width: 80vw;

    & h2 {
      font-size: 32px;
    }

    & p {
      font-size: 18px;
    }
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

export const SectionOracaoIntendente = styled.section `
    display: flex;
    justify-content: center;
    gap: 150px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 80px;
    }
`

export const CardOracao = styled.div `
    display: flex;
    flex-direction: column;
    gap: 22px;

    width: 25vw;

    & p {
      color: var(--cinza);
    }

    @media (max-width: 768px) {
      width: 80vw;
    }
`
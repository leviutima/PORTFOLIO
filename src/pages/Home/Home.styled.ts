import styled, { keyframes }  from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const MainContainer = styled.main `
    display: grid;
    gap: 80px;
  
    @media (max-width:768px) {
        display: grid;
        align-items: center;
        justify-content: center;
    }
`



const digitando = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const efeitoDigitacao = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: black; }

` 

export const SectionContainerFirst = styled.section `
    margin-left: 10%;

`

export const Title = styled.div `
    display: grid;
    gap: 25px;
    font-size: 42px;

    @media (max-width: 768px) {
      font-size: 21px;
      padding-right: 10%;
    }
`

export const SpanStyle = styled.span `
    font-size: 14px;
    color: var(--cinza);
    font-weight: 300;

    @media (min-width: 768px) {
      display: none;
    }

`

export const SpanStyleDigitacao = styled.span`
  font-size: 18px;
  color: var(--cinza);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation:
    ${digitando} 4s steps(40, end),
    ${efeitoDigitacao} 0.75s step-end infinite;

    @media (max-width: 768px) {
      display: none;
    }
`

export const ContainerDigitacao = styled.div `
  display: inline-block;
  white-space: normal;
  line-height: 1.5; /* Ajuste conforme necessário */
`

export const SectionContainerSecond = styled.section `
    font-size: 22px;
    display: grid;
    gap: 30px;

    margin-left: 10%;

    @media (max-width:768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      margin-right: 10%;
    }
`

export const ContainerProjetos = styled.div `
  display: flex;
  justify-content: start;
  gap: 100px;

  @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const SectionContainerThird = styled.section `
  display: grid;
  justify-content: center;
  gap: 50px;

  text-align: center;
  font-size: 25px;
  margin-bottom: 5%;

  @media (max-width:768px) {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const TechsCointainer = styled.div `
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 100px;

  @media (max-width:768px) {
    display: grid;
    align-items: center;
    justify-content: center;
  }
`

export const ContainerImgTechs = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    @media (max-width:768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }
`

export const StyleHTML = styled(FaHtml5) `
  font-size: 8vw;
  cursor: pointer;


  :hover {
        color: #6962AD;

    }
`

export const StyleCSS = styled(FaCss3) `
  font-size: 8vw;
  cursor: pointer;


  :hover {
        color: #6962AD;

    }
` 

export const StyleJS = styled(IoLogoJavascript) `
  font-size: 8vw;
  cursor: pointer;


  :hover {
        color: #6962AD;
    }
`

export const StyleReact = styled(FaReact) `
  font-size: 8vw;
  cursor: pointer;


  :hover {
        color: #6962AD;

    }
`

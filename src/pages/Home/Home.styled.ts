import styled, { keyframes }  from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export const MainContainer = styled.main `
    display: grid;
    gap: 80px;
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
    gap: 24px;
    font-size: 42px;
`

export const SpanStyle = styled.span`
  font-size: 18px;
  color: var(--cinza);
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation:
    ${digitando} 4s steps(40, end),
    ${efeitoDigitacao} 0.75s step-end infinite;
`

export const SectionContainerSecond = styled.section `
    font-size: 22px;
    display: grid;
    gap: 30px;

    margin-left: 10%;
`

export const ContainerProjetos = styled.div `
  display: flex;
  justify-content: start;
  gap: 100px;
`

export const SectionContainerThird = styled.section `
  display: grid;
  justify-content: center;
  gap: 50px;

  text-align: center;
  font-size: 25px;
  margin-bottom: 5%;
`

export const TechsCointainer = styled.div `
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 100px;
`

export const ContainerImgTechs = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;

    cursor: pointer;
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
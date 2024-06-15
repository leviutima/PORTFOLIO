import styled, { keyframes }  from "styled-components";

const digitando = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const efeitoDigitacao = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: black; }
` 

export const Container = styled.section `
    margin-left: 10%;

`

export const Title = styled.div `
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




export const ImgStyle = styled.img `
    border: 1px solid var(--branco);
    width: 14vw;
    height: 30vh;
    border-radius: 100%;
`
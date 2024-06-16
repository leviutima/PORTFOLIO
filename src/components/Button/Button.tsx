import React from "react"
import { Ancora, ButtonStyle, ImgStyle } from "./Button.styled"

interface PropsButton {
    img?: string,
    children: React.ReactNode,
    link:string 
}

const Button = ({img, children, link}: PropsButton) => {
    return(
        <>
            <Ancora href={link}>
            <ButtonStyle>
                <ImgStyle src={img}></ImgStyle>
                {children}
            </ButtonStyle>
            </Ancora>
        </>
    )
}

export default Button 
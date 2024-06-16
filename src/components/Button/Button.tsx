import React from "react"
import { Ancora, ButtonStyle, ImgStyle } from "./Button.styled"

interface PropsButton {
    img?: string,
    children: React.ReactNode
}

const Button = ({img, children}: PropsButton) => {
    return(
        <>
            <Ancora href="https://github.com/leviutima">
            <ButtonStyle>
                <ImgStyle src={img}></ImgStyle>
                {children}
            </ButtonStyle>
            </Ancora>
        </>
    )
}

export default Button 
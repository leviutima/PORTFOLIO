import React from "react";
import { LinkStyle, ButtonStyle, ImgStyle, Ancora } from "./Button.styled";

interface PropsButton {
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    img?: string;
    children: React.ReactNode;
    link?: string;
    path?: string;
    ancora?: string;
    type?: "button" | "submit" | "reset";
    download?: string; 
}

const Button: React.FC<PropsButton> = ({ img, bgColor, borderColor, textColor, children, path, type, ancora, download }) => {
    return (
        <>
            {path ? (
                <LinkStyle to={path}>
                    <ButtonStyle $bgColor={bgColor} $borderColor={borderColor} $textColor={textColor}>
                        {img && <ImgStyle src={img} alt="" />}
                        <span className="button-text">{children}</span>
                    </ButtonStyle>
                </LinkStyle>
            ) : (
                <Ancora href={ancora} download={download}>
                    <ButtonStyle as="button" type={type} $bgColor={bgColor} $borderColor={borderColor} $textColor={textColor}>
                        {img && <ImgStyle src={img} alt="" />}
                        <span className="button-text">{children}</span>
                    </ButtonStyle>
                </Ancora>
            )}
        </>
    );
}

export default Button;

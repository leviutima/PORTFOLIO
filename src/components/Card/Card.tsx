import React from "react";
import { CardContainer, CardProjetos, ImgCard, TextSection} from "./Card.styled";

interface CardProp {
    img: string;
    titulo: string;
}

const Card = ({ img, titulo }: CardProp) => {
    return (
        <>
        <CardContainer>
            <CardProjetos>
                <ImgCard src={img} />
            </CardProjetos>
            <TextSection>
                    <h4>{titulo}</h4>
            </TextSection>
        </CardContainer>
        </>
    );
};

export default Card;

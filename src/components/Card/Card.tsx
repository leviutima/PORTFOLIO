import { CardContainer, CardProjetos, ImgCard, LinkStyleCard, TextSection} from "./Card.styled";

interface CardProp {
    img: string;
    titulo: string;
    link: string;
}

const Card: React.FC<CardProp>  = ({ img, titulo, link }: CardProp) => {
    return (
        <>
        <LinkStyleCard to={link}>
            <CardContainer>
                <CardProjetos>
                    <ImgCard src={img} />
                </CardProjetos>
                <TextSection>
                        <h4>{titulo}</h4>
                </TextSection>
            </CardContainer>
        </LinkStyleCard>
        </>
    );
};

export default Card;

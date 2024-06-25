import Button from "../../components/Button/Button"
import { ContainerLabel, FormContainer, InputStyle, MainContainer, FormCard } from "./Contact.styled"

const Contato = () => {
    return(
        <>
            <MainContainer>
                <FormCard>
                    <FormContainer>
                        <ContainerLabel>
                            <span>Nome</span>
                            <InputStyle></InputStyle>
                        </ContainerLabel>
                        <ContainerLabel>
                            <span>Email</span>   
                            <InputStyle></InputStyle>
                        </ContainerLabel>
                        <ContainerLabel>
                            <span>Mensagem</span>
                            <InputStyle></InputStyle>
                        </ContainerLabel>
                    </FormContainer>
                    <Button >Enviar</Button>
                </FormCard>
            </MainContainer>
        </>
    )
}

export default Contato
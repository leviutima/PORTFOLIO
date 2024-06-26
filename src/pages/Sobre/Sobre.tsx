import Levi from '../../assets/profileLevi.png'
import { ContainerText, ImgProfile, MainContainer, Negrito, SectionContato, SectionMain } from './Sobre.styled'
import linkedin from '../../assets/linkedinLogo.png'
import Button from '../../components/Button/Button'
import LeviAspOf from '../../assets/leviOf.jpeg'

const Sobre = () => {
    return(
        <>
        <MainContainer>
            <SectionMain>
                <ImgProfile src={Levi}></ImgProfile>
                <ContainerText>
                    <div>
                        <h2>QUEM É O LEVI ?</h2>
                        <p>Olá, meu chamo <Negrito>LEVI YUKI UTIMA</Negrito>, desenvolvedor Front-End.
                        Atualmente estou cursando <Negrito>Análise e Desenvolvimento de Sistemas</Negrito>  na Faculdade <Negrito>FIAP</Negrito>.</p>
                        <p>Escolhi o Front-end por conta da vasta liberdade que eu tenho de criar o que eu quiser e como quiser, por mais que siga
                        um padrão de códigos, sempre há uma maneira diferente de se fazer a mesma coisa.
                        </p>
                    </div>
                    <Button bgColor='#fff' img={linkedin} ancora='https://www.linkedin.com/in/levi-yuki-utima-7b3187289/'>Meu LinkedIn</Button>
                </ContainerText>
            </SectionMain>
            <SectionMain>
                <ContainerText>
                    <h2>Aspirante Oficial</h2>
                    <p>Fui declarado Aspirante Oficial da reserva </p>
                </ContainerText>
                <ImgProfile src={LeviAspOf} width={400} height={400}></ImgProfile>

            </SectionMain>
            <SectionContato>
                    <>
                        
                    </>
            </SectionContato>
        </MainContainer>
        </>
    )
}

export default Sobre 
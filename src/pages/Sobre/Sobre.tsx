import Levi from '../../assets/profileLevi.png'
import Button from '../../components/Button/Button'
import { ContainerText, ImgProfile, SectionSobre } from './Sobre.styled'
import linkedin from '../../assets/linkedinLogo.png'

const Sobre = () => {
    return(
        <>
        <SectionSobre>
            <ImgProfile src={Levi}></ImgProfile>
            <ContainerText>
                <div>
                    <h2>QUEM É O LEVI ?</h2>
                    <p>Olá, meu chamo <span>LEVI YUKI UTIMA</span>, desenvolvedor Front-End.
                    Atualmente estou cursando <span>Análise e Desenvolvimento de Sistemas</span>  na Faculdade <span>FIAP</span>.</p>
                    <p>Escolhi o Front-end por conta da vasta liberdade que eu tenho de criar o que eu quiser e como quiser, por mais que siga
                    um padrão de códigos, sempre há uma maneira diferente de se fazer a mesma coisa.
                    </p>
                </div>
                <Button link='https://www.linkedin.com/in/levi-yuki-utima-7b3187289/' img={linkedin}>Meu Linkedin</Button>
            </ContainerText>
        </SectionSobre>
        </>
    )
}

export default Sobre 
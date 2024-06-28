import { ContainerText, SectionMain } from "../../Sobre/Sobre.styled"
import movelt from '../../../assets/projetos/movelt.png'
import { ContainerButton, ImgProject } from "./movelt.styled"
import Button from "../../../components/Button/Button"
import github from '../../../assets/githubLogo.png'
import vercel from '../../../assets/Vercel_favicon.svg'


const Movelt = () => {
    return(
        <>
            <SectionMain>
                <ImgProject src={movelt} width={700}></ImgProject>
                <ContainerText>
                    <h2>MOVELT</h2>
                    <p>MOVELT se baseia em uma página de login e cadastro de usuário.
                        Projeto foi feito para me desafiar na integração do formulário
                        de cadastro com o back-end.
                    </p>
                    <p>Foi feita uma API rest com spring-boot no JAVA 17, apenas com a 
                        função POST, integrando com o banco de dados no MySQL</p>
                    <ContainerButton>
                        <Button img={github} bgColor="#fff" ancora="https://github.com/leviutima/LoginPage" >Repositório</Button>
                        <Button img={vercel} bgColor="#fff" ancora="https://movelt.vercel.app/">VERCEL</Button>
                    </ContainerButton>
                </ContainerText>
            </SectionMain>
        </>
    )
}

export default Movelt
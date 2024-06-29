import { ContainerText, SectionMain } from "../../Sobre/Sobre.styled"
import salesForce from '../../../assets/projetos/projeto 3.png'
import { ContainerButton, ImgProject } from "../MOVELT/movelt.styled"
import Button from "../../../components/Button/Button"
import github from '../../../assets/githubLogo.png'
import vercel from '../../../assets/Vercel_favicon.svg'

const SalesF = () => {
    return(
        <>
            <SectionMain>
                <ImgProject src={salesForce} width={900}></ImgProject>
                <ContainerText>
                    <h2>Sales Force</h2>
                    <p>O projeto foi feito para a empresa Sales Force, que se baseia em atrair mais cliente utilizando a plataforma
                        da empresa. Eu e meu grupo, composto por mais duas pessoas desenvolvemos um novo desing para a plataforma, além de
                        deixar ela mais acessível para pessoas com limitações auditivas e visuais, aplicando a API do governo o VLibras e a possibilitadade
                        de mudar a fonte do site para uma que facilite a leitura para pessoas com dislexia.</p>
                    <p>O projeto foi realizado em React.js e integramos uma API REST em python para receber os dados de um formulário para contato com a empresa</p>
                    <ContainerButton>
                        <Button bgColor="#fff" img={github} ancora="https://github.com/leviutima/salesF">Repositório</Button>
                        <Button bgColor="#fff" img={vercel} ancora="https://sales-f.vercel.app/">VERCEL</Button>
                    </ContainerButton>
                </ContainerText>
            </SectionMain>
        </>
    )
}

export default SalesF
import Button from "../../../components/Button/Button"
import { ContainerText, SectionMain } from "../../Sobre/Sobre.styled"
import { ContainerButton, ImgProject } from "../MOVELT/movelt.styled"
import github from '../../../assets/githubLogo.png'
import vercel from '../../../assets/Vercel_favicon.svg'
import corteEstilo from '../../../assets/CorteEstilo.png'

const CortesEstilo = () => {
    return (
        <>
            <SectionMain>
                <ImgProject src={corteEstilo} width={700}></ImgProject>
                <ContainerText>
                    <h2>CORTE & ESTILO </h2>
                    <p>CORTE & ESTILO é a landing page de uma barbearia fictícia, 
                        cujo objetivo é aperfeiçoar minhas habilidades em REACT. O projeto
                        ainda está em desenvolvimento, tendo em vista que ainda haverá a integração
                        com o banco de dados, utilizando springboot.
                    </p>
                    <p>Será desenvolvida uma APIREST em JAVA na sua versão 17 para conexão com 
                        banco de dados usando MYSQL
                    </p>
                    <ContainerButton>
                        <Button img={github} bgColor="#fff" ancora="https://github.com/leviutima/Cortes-Estilo" >Repositório</Button>
                        <Button img={vercel} bgColor="#fff" ancora="https://cortes-estilo.vercel.app/">VERCEL</Button>
                    </ContainerButton>
                </ContainerText>
            </SectionMain>
        </>
    )
}

export default CortesEstilo
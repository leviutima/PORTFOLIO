import { ContainerText, SectionMain } from "../../Sobre/Sobre.styled"
import { ContainerButton, ImgProject } from "../MOVELT/movelt.styled"
import ocenia from '../../../assets/projetos/projeto 2.png'
import Button from "../../../components/Button/Button"
import github from '../../../assets/githubLogo.png'
import vercel from '../../../assets/Vercel_favicon.svg'

const Oceania = () => {
    return(
        <>
        <SectionMain>
            <ImgProject src={ocenia} width={700}></ImgProject>
            <ContainerText>
                <h2>OCEÂNIA</h2>
                <p>Projeto Oceânia se baseia em um e-commerce de produtos feitos com
                    objetos recicláveis e reutilizáveis, incentivando as pessoas a reciclar
                    esses materiais e lucrar em cima disso, o que levará a uma diminuição dos 
                    dejetos encontrados no meio ambiente e principalmente nos oceânos.
                </p>
                <p>Projeto foi realizado com o Next.js na versão 14 integrando com o uma API REST feita em java,
                    utilzando MAVEN com o glassfish.grizzly
                </p>
                <ContainerButton>
                    <Button bgColor="#fff" ancora="https://github.com/leviutima/oceania" img={github}>Repositório</Button>
                    <Button bgColor="#fff" ancora="https://oceania-tau.vercel.app/Home" img={vercel}>Vercel</Button>
                </ContainerButton>
            </ContainerText>
        </SectionMain>
        </>
    )
}

export default Oceania 
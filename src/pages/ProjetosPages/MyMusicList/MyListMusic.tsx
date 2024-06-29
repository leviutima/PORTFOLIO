import { ContainerText, SectionMain } from "../../Sobre/Sobre.styled"
import github from '../../../assets/githubLogo.png'
import vercel from '../../../assets/Vercel_favicon.svg'
import mymusiclist from '../../../assets/projetos/projeto 1.png'
import { ContainerButton, ImgProject } from "../MOVELT/movelt.styled"
import Button from "../../../components/Button/Button"

const MyMusicList = () => {
    return(
        <>
            <SectionMain>
                <ImgProject src={mymusiclist} width={700}></ImgProject>
                <ContainerText>
                    <h2>My Music List</h2>
                    <p>My Music List é um projeto individual de uma plataforma que exibe e toca minhas musica favoritas do momento.</p>
                    <p>O projeto foi realizado com VITE e styled-components</p>
                    <ContainerButton>
                        <Button bgColor="#fff" img={github}>Repositório</Button>
                        <Button bgColor="#fff" img={vercel}>VERCEL</Button>
                    </ContainerButton>
                </ContainerText>
            </SectionMain>
        </>
    )
}

export default MyMusicList
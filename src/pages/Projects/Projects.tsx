import Card from "../../components/Card/Card"
import { ProjetoCard, ProjetoSection, SectionProjeto } from "./Project.styled"
import musicList from '../../assets/projetos/projeto 1.png'
import oceania from '../../assets/projetos/projeto 2.png'
import SalesF from '../../assets/projetos/projeto 3.png'
import linkTree from '../../assets/projetos/linktree.png'
import cineTag from '../../assets/projetos/CINETAG.png'
import pomodoro from '../../assets/projetos/pomodoro.png'
import spaceApp from '../../assets/projetos/spaceApp.png'

const Projetos = () => {
    return(
        <>
            <ProjetoSection>
                <SectionProjeto>
                    <h2>PROJETOS DE FACULDADE</h2>
                    <ProjetoCard>
                        <Card img={oceania} titulo="OCEÂNIA"/>
                        <Card img={SalesF} titulo="Sales Force"/>
                    </ProjetoCard>
                </SectionProjeto>
                <SectionProjeto>
                    <h2>PROJETOS AUTORAIS</h2>
                    <ProjetoCard>
                        <Card img={musicList} titulo='My Music List'/>
                        <Card img={linkTree} titulo="LinkTree"/>
                    </ProjetoCard>
                </SectionProjeto>
                <SectionProjeto>
                    <h2>PROJETOS DE CURSOS</h2>
                    <ProjetoCard>
                        <Card img={cineTag} titulo='CineTag'/>
                        <Card img={pomodoro} titulo="Pomodoro"/>
                        <Card img={spaceApp} titulo="Space-App"/> 
                    </ProjetoCard>
                </SectionProjeto>
            </ProjetoSection>
        </>
    )
}

export default Projetos
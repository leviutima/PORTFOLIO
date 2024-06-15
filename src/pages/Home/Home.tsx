import Card from '../../components/Card/Card'
import { ContainerImgTechs, ContainerProjetos, MainContainer, SectionContainerFirst, SectionContainerSecond, SectionContainerThird, SpanStyle, StyleCSS, StyleHTML, StyleJS, StyleReact, TechsCointainer, Title } from './Home.styled'
import myMusicList from '../../assets/projetos/projeto 1.png'
import oceania from '../../assets/projetos/projeto 2.png'
import salesF from '../../assets/projetos/projeto 3.png'


const Home = () => {
    return(
        <>
        <MainContainer>
            <SectionContainerFirst>
                <Title>
                    <h2>HEY! I'm Levi - FRONT-END</h2>
                    <h2>Developer</h2>
                    <SpanStyle>Estou aqui para te ajudar a tirar as ideias da mente e divulgar para o mundo !</SpanStyle>
                </Title>
            </SectionContainerFirst>
            <SectionContainerSecond>
                <h3>Últimos projetos realizados</h3>
                <ContainerProjetos>
                    <Card img={oceania} titulo='Oceânia'/>
                    <Card img={salesF} titulo='Sales Force'/>
                    <Card img={myMusicList} titulo='My List Music'/>
                </ContainerProjetos>
            </SectionContainerSecond>
            <SectionContainerThird>
                <h3>Minhas techs</h3>
                <TechsCointainer>
                    <ContainerImgTechs>
                     <StyleHTML />   
                     <span>HTML</span>
                    </ContainerImgTechs>
                    <ContainerImgTechs>
                        <StyleCSS />
                        <span>CSS</span>
                    </ContainerImgTechs>
                    <ContainerImgTechs>
                        <StyleJS />
                        <span>JAVA SCRIPT</span>
                    </ContainerImgTechs>
                    <ContainerImgTechs>
                        <StyleReact />
                        <span>REACT</span>
                    </ContainerImgTechs>
                    
                </TechsCointainer>
            </SectionContainerThird>
        </MainContainer>
        </>
    )
}

export default Home
import Card from '../../components/Card/Card'
import { ContainerImgTechs, ContainerProjetos, MainContainer, SectionContainerFirst, SectionContainerSecond, SectionContainerThird, SpanStyle, SpanStyleDigitacao, StyleCSS, StyleHTML, StyleJS, StyleReact, TechsCointainer, Title } from './Home.styled'
import myMusicList from '../../assets/projetos/projeto 1.png'
import oceania from '../../assets/projetos/projeto 2.png'
import salesF from '../../assets/projetos/projeto 3.png'
import Button from '../../components/Button/Button'
import github from '../../assets/githubLogo.png'
import movelt from '../../assets/projetos/movelt.png'

const Home = () => {
    return(
        <>
        <MainContainer>
            <SectionContainerFirst>
                <Title>
                        <div>
                            <h2>HEY! I'm Levi - FRONT-END</h2>
                            <h2>Developer</h2>
                        </div>
                        <div>
                            <SpanStyleDigitacao>Estou aqui para te ajudar a tirar as ideias da mente e divulgar para o mundo !</SpanStyleDigitacao>
                            <SpanStyle>Estou aqui para te ajudar a tirar as ideias da mente e divulgar para o mundo !</SpanStyle>
                        </div>
                    <Button ancora="https://github.com/leviutima" img={github} bgColor='#fff' textColor='#'>Meu GitHub</Button>
                </Title>
            </SectionContainerFirst>
                <SectionContainerSecond>
                    <h3>Últimos projetos realizados</h3>
                    <ContainerProjetos>
                        <Card link="/MOVELT" img={movelt} titulo='MOVELT'/>
                        <Card link="/Oceânia"img={oceania} titulo='Oceânia'/>
                        <Card link="/SalesF"img={salesF} titulo='Sales Force'/>
                        <Card link="/MyMusicList"img={myMusicList} titulo='My List Music'/>
                    </ContainerProjetos>
                </SectionContainerSecond>
                <SectionContainerThird>
                    <h3>Minhas habilidades</h3>
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
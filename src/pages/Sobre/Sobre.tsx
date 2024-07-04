import Levi from '../../assets/profileLevi.png'
import { CardOracao, ContainerText, ImgProfile, MainContainer, Negrito, SectionContato, SectionMain, SectionOracaoIntendente } from './Sobre.styled'
import linkedin from '../../assets/linkedinLogo.png'
import Button from '../../components/Button/Button'
import Aspira from '../../assets/AspiraYuki.jpeg'
import LeviAspOf from '../../assets/leviOf.jpeg'
import { ContainerButton } from '../ProjetosPages/MOVELT/movelt.styled'
import curriculoDownload from '../../assets/curriculo/curriculoLevi.pdf'
import pdf from '../../assets/pdfIcon.png'

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
                        <p>Escolhi o <Negrito>Front-end</Negrito> por conta da vasta liberdade que eu tenho de criar o que eu quiser e como quiser, por mais que siga
                        um padrão de códigos, sempre há uma maneira diferente de se fazer a mesma coisa.
                        </p>
                    </div>
                    <ContainerButton>
                        <Button bgColor='#fff' img={linkedin} ancora='https://www.linkedin.com/in/levi-yuki-utima-7b3187289/'>Meu LinkedIn</Button>
                        <Button bgColor='#fff' download='Curriculo Levi' ancora={curriculoDownload} img={pdf}>Baixar CSV</Button>
                    </ContainerButton>
                </ContainerText>
            </SectionMain>
            <SectionMain>
                <ContainerText>
                    <h2>Aspirante Oficial</h2>
                    <p>Fui declarado Aspirante Oficial de Intendência pelo Centro de Preparação
                        de Oficiais da Reserva de São Paulo em dezembro de 2023. A jornada no militarismo
                        mudou a minha vida, me ensinou muitas coisas, levo como a mais importante a disciplina consciente, 
                        que se baseia em fazer o certo mesmo quando não a ninguém olhando.
                    </p>
                    <p>Nessa minha jornada escolhi o curso de <Negrito>INTENDÊNCIA</Negrito>, a área logística do exército 
                    brasileiro. Lá me foi ensinado a gerir recursos com destreza, a fazer o pouco se tornar muito e também entender
                    que nem sempre levaremos os créditos pela vitória.<Negrito> A intendência</Negrito> me tornou uma pessoa melhor, mais responsável, 
                    <Negrito> me ensinou o fardo de cada escolha</Negrito>, que cada escolha pode não só, me afetar, mas também outras pessoas.</p>   
                    <p>O Exército <Negrito>MUDOU</Negrito> a minha vida.</p>
                </ContainerText>
                <ImgProfile src={Aspira}></ImgProfile>
            </SectionMain>
            <SectionOracaoIntendente>
                <ImgProfile src={LeviAspOf} ></ImgProfile>
                <CardOracao>
                    <h2>ORAÇÃO DO SOLDADO INTENDENTE</h2>
                    <p> "Senhor,
                        Deus dos exércitos
                        Agradeço-vos por conceder a este filho, soldado intendente
                        A coragem para vencer distâncias e obstáculos
                        A determinação para apoiar meus irmãos de armas
                        A perícia e a garra para não sucumbir a emboscada
                        A resistência ao sono e a fadiga em noites em claro
                        A honestidade para gerir os bens a mim confiados
                        Mas peço-vos ainda senhor
                        Que o entusiasmo de hoje seja perene
                        Preservando em minha alma
                        A vibração de pertencer a um serviço honrado e eficaz
                        A resignação por não receber as glórias da vitória
                        E a fé inabalável na nobreza da minha missão"
                    </p>
                </CardOracao>
            </SectionOracaoIntendente>
            <SectionContato>
                    <>
                        
                    </>
            </SectionContato>
        </MainContainer>
        </>
    )
}

export default Sobre 
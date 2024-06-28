import { HeaderNavigation, HeaderStyle, ImgStyle, LinkStyle, MenuList } from "./Header.styled"
import imgHeader from '../../assets/leviLogo.png'
import MusicPlayer from "../MusicPlayer/MusicPlayer"

const Header = () => {
    return(
        <>
            <HeaderStyle>
                <HeaderNavigation>
                    <LinkStyle to='/'>
                        <ImgStyle src={imgHeader}></ImgStyle>
                    </LinkStyle>
                    <MenuList>
                        <MusicPlayer></MusicPlayer>
                        <LinkStyle to='/Sobre'>
                            <li>SOBRE</li>
                        </LinkStyle>
                        <LinkStyle to='/Projetos'>
                            <li>PROJETOS</li> 
                        </LinkStyle>
                        
                    </MenuList>
                </HeaderNavigation>
            </HeaderStyle>
        </>
    )
}

export default Header
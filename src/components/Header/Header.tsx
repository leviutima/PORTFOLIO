import { HeaderNavigation, HeaderStyle, ImgStyle, LinkStyle, MenuList } from "./Header.styled"
import imgHeader from '../../assets/leviLogo.png'

const Header = () => {
    return(
        <>
            <HeaderStyle>
                <HeaderNavigation>
                    <LinkStyle to='/'>
                        <ImgStyle src={imgHeader}></ImgStyle>
                    </LinkStyle>
                    <MenuList>
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
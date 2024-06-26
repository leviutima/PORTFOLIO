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
                        <LinkStyle to='/Projetos'>
                            <li>PROJETOS</li> 
                        </LinkStyle>
                        <LinkStyle to='/Sobre'>
                            <li>SOBRE</li>
                        </LinkStyle>
                    </MenuList>
                </HeaderNavigation>
            </HeaderStyle>
        </>
    )
}

export default Header
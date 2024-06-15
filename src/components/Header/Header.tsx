import { HeaderNavigation, HeaderStyle, ImgStyle, MenuList } from "./Header.styled"
import imgHeader from '../../assets/leviLogo.png'

const Header = () => {
    return(
        <>
            <HeaderStyle>
                <HeaderNavigation>
                    <ImgStyle src={imgHeader}></ImgStyle>
                    <MenuList>
                        <li>PROJETOS</li>
                        <li>CONTATO</li>
                        <li></li>
                    </MenuList>
                </HeaderNavigation>
            </HeaderStyle>
        </>
    )
}

export default Header
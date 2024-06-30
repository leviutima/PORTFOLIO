import React, { useState, useEffect, useRef } from 'react';
import { HeaderNavigation, HeaderStyle, ImgStyle, LinkStyle, MenuList, HamburgerMenu, HamburgerIcon, HamburgerLinks } from "./Header.styled";
import imgHeader from '../../assets/leviLogo.png';
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <HeaderStyle>
            <HeaderNavigation>
                <LinkStyle to='/'>
                    <ImgStyle src={imgHeader} alt="Logo" />
                </LinkStyle>
                <HamburgerMenu onClick={toggleMenu}>
                    <HamburgerIcon />
                </HamburgerMenu>
                <MenuList>
                    {!isMobile && <MusicPlayer />}
                    <LinkStyle to='/Sobre'>
                        <li>SOBRE</li>
                    </LinkStyle>
                    <LinkStyle to='/Projetos'>
                        <li>PROJETOS</li>
                    </LinkStyle>
                </MenuList>
                {isOpen && (
                    <HamburgerLinks ref={menuRef}>
                        {isMobile && <MusicPlayer />}
                        <LinkStyle to='/Sobre'>
                            <li>SOBRE</li>
                        </LinkStyle>
                        <LinkStyle to='/Projetos'>
                            <li>PROJETOS</li>
                        </LinkStyle>
                    </HamburgerLinks>
                )}
            </HeaderNavigation>
        </HeaderStyle>
    );
}

export default Header;

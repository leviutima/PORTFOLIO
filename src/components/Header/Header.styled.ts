import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export const HeaderStyle = styled.header`

`;

export const HeaderNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        gap: 60px;
    }

`;

export const ImgStyle = styled.img`

   @media (max-width: 768px) {
    width: 30vw;
   }
`;

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;

    & li {
        font-size: 21px;
        list-style: none;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;
    gap: 100px;

    @media (max-width: 958px) {
        display: none;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 958px) {
        display: block;
    }
`;

export const HamburgerIcon = styled(FaBars)`
    font-size: 24px;
`;

export const HamburgerLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 70px;
    right: 10px;
    background-color: black;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    color: var(--branco);

    ${LinkStyle} {
        display: block;
        padding: 10px 20px;
    }
`;

import styled from "styled-components";

export const HeaderStyle = styled.header `
    
`

export const HeaderNavigation = styled.nav `
    display: flex;
    justify-content: space-around;
    align-items: center; 
    
`

export const ImgStyle = styled.img `
    width: 8vw;
`

export const MenuList = styled.ul `
    display: flex;
    gap: 100px;

    font-size: 18px;
    list-style: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    & li:hover {
        color: #6962AD;
        transform: scale(1.1);
        transition: transform 0.4s ease, box-shadow 0.3s ease;
    }
`
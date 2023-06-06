import React from "react";
import { Links } from "../styles";
import { ImagemMenu, MenuContainer,Button, MenuCelular } from "./styles";
import { useState } from "react";
import ImageMenu from './icons8-menu-64.png'


export function MenuMobile(){
    const [isMenuOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isMenuOpen);
    };

    
    return(
        <MenuCelular>
        <Button onClick={handleMenuToggle}><ImagemMenu src={ImageMenu} alt="Imagem Menu"/></Button>
        <MenuContainer className={isMenuOpen ? 'open' : ''}>
        <ul>
            <li><Links to="/experiencia">A experiência</Links></li>
            <li><Links to="/mapa">Mapa de Setores</Links></li>
            <li><Links to="/info">Informações</Links></li>
            <li><Links to="/ingresso">Ingresso</Links>  </li>
        </ul>
        </MenuContainer>
        </MenuCelular>
    );
}
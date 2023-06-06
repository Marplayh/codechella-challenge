import React, { useEffect, useState } from "react";
import Logo from '../../assets/Logo-header.png'
import { HeaderContainer, Links, LinksContainer } from "./styles";
import { MenuMobile } from "./MenuMobile";
import { Link } from "react-router-dom";


export function Header(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 570);
    const handleResize = () => {
            setIsMobile(window.innerWidth <= 570);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
  }, []);
    
    return(
        <HeaderContainer>
            <div>
                <Link to="/"><img src={Logo} alt="Logo da empresa" className="imagem"></img></Link>
            </div>
            {isMobile ? (<MenuMobile/>) : (
            <LinksContainer>
                <ul>
                    <li><Links to="/experiencia">A experiência</Links></li>
                    <li><Links to="/mapa">Mapa de Setores</Links></li>
                    <li><Links to="/info">Informações</Links></li>
                    <li><Links to="/ingresso">Ingresso</Links>  </li>
                </ul>
            </LinksContainer>
            )}
            
        </HeaderContainer>
    )
}
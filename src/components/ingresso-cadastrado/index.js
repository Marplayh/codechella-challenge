import React from "react";
import Logo from "./assets/Logocinza.png";
import Ellipse from "./assets/Ellipse 4.png";
import QrCode from "./assets/Qr code 1.png";
import { BlockOne, BlockTwo, Container, MainContainer } from "./styles";
import { useLocation } from "react-router-dom";

export function IngressoCadastrado(){
    const location = useLocation();
    const usuario = location.state?.usuario;
    
    return(
        <MainContainer>
            <h1>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h1>
            <Container>
                <BlockOne>
                    <img src={Logo} className="imagem1" alt="Logo"></img>
                    <img src={Ellipse} className="imagem2" alt="Ellipse"></img>
                </BlockOne>
                <BlockTwo>
                    <img src={QrCode} alt="QR Code"></img>
                    <div>
                        <h2>{usuario.nome}</h2>
                        <span>Ingresso Cortesia</span>
                        <span>{usuario.tipoIngresso}</span>
                        <span>{usuario.data}</span>
                        <span>Local: São Paulo-SP</span>
                    </div>
                </BlockTwo>
            </Container>
        </MainContainer>
    );
}
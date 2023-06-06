import React from "react";
import LogoFooter from "../../assets/Logocinza.png"
import whats from "../../assets/Ícone whatsapp.png"
import twitter from "../../assets/Ícone twitter.png"
import twitch from "../../assets/Ícone Twitch.png"
import insta from "../../assets/Ícone instagram.png"
import { IconesContainer, LogoRedesContainer, LogoStyled, RodapeContainer, Texto, TextoContainer } from "./styles";


export function Footer(){
    return (
        <RodapeContainer>   
            <LogoRedesContainer>
                <LogoStyled src={LogoFooter} alt="Logo codechella"></LogoStyled>
                <IconesContainer>               
                    <Texto>Acesse nossas redes: </Texto>
                    <div>
                    <a href="/whatsapp"><img src={whats} alt="ícone whatssap"></img></a>
                    <a href="http://www.twitter.com"><img src={twitter} alt="ícone whatssap"></img></a>
                    <a href="http://www.instagram.com"><img src={insta} alt="ícone whatssap"></img></a>
                    <a href="http://www.twitch.tv"><img src={twitch} alt="ícone whatssap"></img></a>
                    </div> 
                </IconesContainer>
            </LogoRedesContainer>
            <TextoContainer>
            <Texto>Desenvolvido por Márcio Pereira. Projeto fictício sem fins comerciais.</Texto>
            </TextoContainer> 
        </RodapeContainer>
    )
}
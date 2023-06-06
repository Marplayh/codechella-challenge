import React from "react";
import ImgMapa from './assets/3 - Mapa setores1.png';
import { Container, Imagem, Legend } from "./styles";

export function Mapa(){
    return(
        <div>
            <Container>
                <Imagem src={ImgMapa} alt="Mapa de setores"></Imagem>
                <Legend>
                    <h1>Legenda:</h1>
                    <ul className="azul">
                        <li><span>Pista Premium</span></li>
                    </ul>
                    <ul className="rosa">
                        <li><span>Pista Comum</span></li>
                    </ul>
                    <ul className="verde">
                        <li><span>Cadeiras térreo</span></li>
                    </ul>
                    <ul className="roxo">
                        <li><span>Cadeiras superiores</span></li>
                    </ul>
                    <ul className="azul">
                        <li><span>Rampas</span></li>
                    </ul>
                </Legend>
            </Container>
        </div>
    )
}
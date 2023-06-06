import React from "react";
import imgHome1 from "../../assets/Imagemhomepage1.png";
import { FirstContainer, Imagem, InfoContainer, LineupContainer} from "./styles";
import { Button } from "../buttons/button-garantir-ingresso";


export function Section(){
    return (
        <>
        <FirstContainer>
                <Imagem src={imgHome1} alt="Festival"></Imagem>
                <InfoContainer>
                        <h6>&lt; 11 e 12 de Março &gt; Aluródromo de São Paulo</h6>
                        <p>Hora de programar nossa memória com novas lembranças! 
                            Uma nova experiência sobre música, linguagens e, claro, tecnologia! 
                            Somos um festival diverso, com vários artistas e referências. Divirta-se!
                        </p>
                        <Button>Garantir Ingresso!</Button>  
                </InfoContainer>
            </FirstContainer>
            <LineupContainer>
                <h1>/Line-Up/</h1>
            </LineupContainer>
        </>
            
    )
}
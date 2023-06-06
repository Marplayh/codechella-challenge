import React from "react";
import PrimeiraImagem from './assets/Mapadesetores2.png'
import SegundaImagem from './assets/Mapadesetores3.png'
import TerceiraImagem from './assets/Mapadesetores4.png'
import { Container, Imagem, SmallContainers, Titulo } from "./styles";

export function Detalhes(){
    return(
        <>
        <Titulo>Mais detalhes sobre os setores:</Titulo>
        <Container>
            <SmallContainers>
                <Imagem src={PrimeiraImagem} alt="Imagem show"></Imagem>
                <h1>Pista</h1>
                <p>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
            </SmallContainers>
            <SmallContainers className="meio">
                <Imagem src={SegundaImagem} alt="Imagem show"></Imagem>
                <h1>Pista Premium</h1>
                <p>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
            </SmallContainers>
            <SmallContainers>
                <Imagem src={TerceiraImagem} alt="Imagem show"></Imagem>
                <h1>Cadeiras</h1>
                <p>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
            </SmallContainers>
        </Container>
    </>
    )
}
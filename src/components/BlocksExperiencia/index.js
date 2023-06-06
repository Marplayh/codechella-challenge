import React, { useEffect, useState } from "react";
import PrimeiraImagem from './assets/primeira.png';
import SegundaImagem from './assets/segunda.png';
import TerceiraImagem from './assets/terceira.png';
import { Container, Imagem, TextContainer } from "./styles";
import { ExperienciaMobile } from "./ExperienciaMobile";

export function BlocksExperiencia(){
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 570); // Defina a largura máxima da tela para ativar o menu compacto
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
  }, []);
    return (
        <>
        {isMobile ? (<ExperienciaMobile/>) : (
            <>
            <Container>
                <Imagem src={PrimeiraImagem} alt="Mulher sorrindo com braços abertos"></Imagem>
                <TextContainer>
                    <h1>Acessibilidade e inclusão</h1>
                    <p>
                        Nosso evento tenta abraçar um público mais amplo em todos os sentidos, 
                        de todas as idades, corpos, gostos e pensamentos!  
                        Isso está presente no  espaço físico, na sinalização, 
                        no treinamento da equipe de apoio, na comunicação em libras, 
                        braile, visual e tátil. Além disso, 
                        dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, 
                        pessoas idosas e crianças!
                    </p>
                </TextContainer>
            </Container>

            <Container>
                <TextContainer>
                    <h1>Sustentabilidade</h1>
                    <p>
                    Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
                    </p>
                </TextContainer>
                <Imagem src={SegundaImagem} alt="Sacola com garrafas"></Imagem>
            </Container>

            <Container>
                <Imagem src={TerceiraImagem} alt="Roda Gigante"></Imagem>
                <TextContainer>
                    <h1>Atrações</h1>
                    <p>
                    Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
                    </p>
                </TextContainer>
            </Container>  
            </>
        )}
            
        </>
        
        
    );
}
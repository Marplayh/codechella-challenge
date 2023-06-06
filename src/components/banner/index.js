import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HomeImagem from './assets/Banner-Homepage.png';
import ExperienciaImagem from './assets/AExperiencia.png';
import SetoresImagem from './assets/Mapadesetores.png';
import InfoImagem from './assets/Banner-infosgerais.png';
import IngressoImagem from './assets/garantaseuingresso.png';
import SeuIngresso from './assets/seuingressoestaaqui.png';
import styled from "styled-components";

const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    background: ${({ imagem }) => imagem && `url(${imagem})`} no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    

    h1{
        font-family: 'Calistoga';
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        white-space: nowrap;
        text-align: center;
        color: #444444;
    }

    @media(max-width: 768px){
        h1{
            font-size: 24px;
        }
    }
`;

 export function Banner(){
    const [imagem, setImagem] = useState();
    const [texto, setTexto] = useState('');
    const location = useLocation();
    const usuarioId = location.state?.usuario.id;
    const page = location.pathname.substring(1);

    useEffect(()=>{
        if(page === ''){
            setImagem(HomeImagem);
            setTexto('Boas-vindas ao #CodeChella2023!')
        }else if (page === 'info') {
            setTexto('Informações')
            setImagem(InfoImagem);
        } else if (page === 'experiencia') {
            setTexto('A experiência')
            setImagem(ExperienciaImagem);
          } else if (page === 'ingresso') {
            setTexto('Garanta seu Ingresso!')
            setImagem(IngressoImagem);
          } else if(page === 'mapa'){
            setTexto('Mapa de Setores')
            setImagem(SetoresImagem);
          } else if(page === `ingresso/${usuarioId}`){
            setTexto('Seu ingresso está aqui!')
            setImagem(SeuIngresso);
          }
    }, [page, usuarioId])
    
    return(
        <BannerContainer imagem={imagem}>
            <h1>{texto}</h1>
        </BannerContainer>
    )
}
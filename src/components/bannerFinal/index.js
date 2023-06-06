import React from "react";
import imgShow from "../../assets/Imagemhomepage2.png"
import styled from "styled-components";

const Banner = styled.div`
height: 200px;
mix-blend-mode: multiply;
overflow: hidden;
`;

const Imagem = styled.img`
width: 100%;
@media(max-width: 768px){
  max-width: 100%;
  transform: translate(1.5);
    height: 338px;
   }  
   @media(min-width: 375px){
    height: 200px;
    align-self: stretch;
   }  
   
`;

export function BannerFinal(){
   return(
    <Banner>
      <Imagem src={imgShow} alt="Imagem do Evento"></Imagem>
    </Banner>
   )

}
import styled from "styled-components";

export const Titulo = styled.h1`
   
    font-family: 'Raleway';
    white-space: nowrap;
    font-style: normal;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 47px;
    color: #444444;
    @media(max-width: 768px){
        font-size: 1.5rem;
    } 
    @media(max-width: 375px){
        font-size: 1.5rem;
   } 

`;



export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 80px;
  gap: 24px;
  
    .meio{
        margin-top: 70px;
        @media(max-width: 808px){
        margin: 0px;
    }
    }
    @media(max-width: 808px){
        flex-direction: column;
    }
`;

export const SmallContainers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #444444;
        display: flex;
        align-items: center;
        text-align: center;
    }
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #444444;
    }
`;

export const Imagem = styled.img`
  width: 300px;
  @media(max-width: 900px){
    width: 250px;
  } 
  @media(max-width: 800px){
    width: 350px;
  } 
  @media(max-width: 375px){
    width: 250px;
  } 
`;
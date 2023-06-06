import styled from "styled-components";

export const FirstContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 120px;
    gap: 48px;
    

    @media(max-width: 768px){
      flex-direction: column;
      padding: 70px 70px;
    }

`;
export const LineupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 0;
  h1{
    font-family: 'Calistoga';
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 53px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Cinza */

    color: #444444;
  }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;   
  h6{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    color: #444444;
    padding: 20px 50px;
    @media(max-width: 768px){
      padding: 20px 10px;
    } 
  }
  p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    /* or 200% */
    text-align: center;
    color: #444444;
    padding-bottom: 10px;
  }

`;

export const Imagem = styled.img`
   border-radius: 16px;
   width: 50%;
   @media(max-width: 768px){
     width: 100%;
   }
   @media(max-width: 470px){
     width: 300px;
   }
`;
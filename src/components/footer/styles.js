import styled from "styled-components";

export const RodapeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 15px 50px;

    background: #FACF9D;

    @media(max-width: 768px){
        gap: 5px;
        flex-direction: column;
        justify-content: center;
    } 
`;
export const LogoRedesContainer = styled.div`
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } 
`;

export const TextoContainer = styled.div`
       display: flex;
       justify-content: center;
       width: 300px;
       
    @media(max-width: 768px){
        align-self: center;
        padding: 0px 40px;        
    } 
    @media(max-width: 468px){
        align-self: center;
        text-align: center;
        padding: 0px 20px;        
    } 
`;
export const Texto = styled.p`
        @media(max-width: 768px){
            font-size: 0.9em;
        } 
        color: red;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height:30px;
        display: flex;
        align-items: center;
        color: #444444;
`;
export const LogoStyled = styled.img`
  height: 54px;
` 

export const IconesContainer = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   align-items: center;
   margin-top: -15px;
   div a{
    margin-right: 5px;
   }
   @media(max-width: 768px){
        flex-direction: column;
        img{
            width: 23px;
        }
    } 

   p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height:30px;
    color: #444444;
   }
`;
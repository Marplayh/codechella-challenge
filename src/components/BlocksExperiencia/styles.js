import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    gap: 48px;
    margin-bottom: 20px;
    @media(max-width: 768px){
        flex-direction: column;
    }

`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    @media(max-width: 768px){
        align-items: center;
    }
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #444444;
        @media(max-width: 768px){
            text-align: center;
        }
    }
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 35px;
        color: #444;
        @media(max-width: 768px){
        text-align: center;
        font-size: 18px;
        }
    }
`;
export const Imagem = styled.img`
    width: 50%;
    border-radius: 16px;
    @media(max-width: 768px){
        width: 300px;
    }
`;

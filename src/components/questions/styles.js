import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    h1{
        font-family: 'Calistoga';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 62px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #444444;
    }
`

export const Container = styled.div`
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
     display: block;
     flex-direction: row;
     
     justify-content: space-between;
     align-items: center;
     padding: 16px;
     width: 100%;
     background: #2E7BA2;
     position: relative;
     transition: 1s;
     &.c-open{
        margin-bottom: 100px;
        @media(max-width: 768px){
            margin-bottom: 150px;
        } 
        @media(max-width: 458px){
            margin-bottom: 230px;
        } 
     }
     button{
        background: none;
        border: none;
        cursor: pointer;
     }
     h6{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        color: #fff;
    }
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        color: #444444;
        padding: 16px;
        background: #C8DEEF;
        display: none;
        visibility: hidden;
        position: absolute;
        bottom: -100%;
        top: 100%;
        overflow: auto;
        left: 0;
        width: 100%;
        transition: 1;
        transform: translateY(200); 
        
    }
    p.open{
        bottom: -150%; /* Posição inicial abaixo do container */
        visibility: visible;
        display: flex;
        position: absolute;
        opacity: 1;
        transition: 1s;
        transform: translateY(0); 
        @media(max-width: 450px){
            height: 220px;
        } 
        
    }
`;
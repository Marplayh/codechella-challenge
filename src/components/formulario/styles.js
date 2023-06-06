import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 70%;
    h1{
        font-family: 'Calistoga';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 32px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #444444;
    }
`;

export const Labels = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 38px;
    color: #444;
    flex: 1;
    margin-bottom: 10px;
    input{
        border-color: none;
        height: 30px;
        min-width: 100%;
        flex-shrink: 0;
    }
    select{
        height: 30px;
        min-width: 100%;
        flex-shrink: 0;
    }
`;

export const FirstContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SecondContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    margin-top: 10px;
    gap: 15px;
    @media(max-width: 768px){
        flex-direction: column;
        align-items: stretch;
    } 
`;
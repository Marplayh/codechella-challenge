import styled from "styled-components";
export const MainContainer = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 32px;

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 34px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #444444;

    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 32px;
    gap: 32px;
    background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
`;

export const BlockOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    align-self: stretch;

    .imagem1{
        width: 116.95px;
        height: 32px;
        margin: 0px;
    }
    .imagem2{
        width: 32px;
        height: 32px;
    }
`;

export const BlockTwo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 48px;
    align-self: stretch;
    flex: none;
    flex-grow: 0;
    img{
        margin: 0px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        margin: 0;
        gap: 18px;
        h2{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 28px;

            display: flex;
            align-items: center;
            text-align: center;
            color: #444444;
        }
        span{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 15px;
            display: flex;
            align-items: center;
            color: #444444;
        }
    }

    @media(max-width: 768px){
        flex-direction: column;
    } 
`;
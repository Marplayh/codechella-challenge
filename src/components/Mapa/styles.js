import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin: auto;
    gap: 48px;

    align-self: stretch;

    @media(max-width: 768px){
      flex-direction: column;
    } 
`

export const Imagem = styled.img`
  width: 450px;
  @media(max-width: 768px){
      width: 300px;
    } 
`;

export const Legend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
    ul {
        list-style: none;
    }
    ul li:before{
        content: "■";
        list-style: square;
        display: inline-block;
        margin-right: 1.5rem;
        font-size: 20px;
    }
    .azul{
        color: #0E7DF1;
    }
    .rosa{
        color: #FE016E;
    }
    .verde{
        color: #01A89E;
    }
    .roxo{
        color: #3F51B5;
    }
    span{
        font-family: 'Raleway';
        color: #444;
        font-weight: 500;
        font-size: 18px;
    }

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;

        color: #444444;
    }
`;
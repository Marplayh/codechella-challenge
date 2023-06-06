import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 48px 120px;
    @media(max-width:470px){
    padding: 50px;
   } 
`
export const ContainerData = styled.div`
    display: flex;
    width: 100%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 32px;
`
export const Line = styled.div`
   width: 100%;
   border: 1px solid #DF9010;
`;
export const Data = styled.div`
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    background: #DF9010;
    font-family: 'Calistoga';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    color: #fff;
    padding: 16px;
    @media(max-width: 768px){
        padding: 10px;
        font-size: 20px;
    }
`;
export const BandsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
    white-space: nowrap;
    @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-bottom: 5px;
  }
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;
export const Bands = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    h2, h4, h5, h6  {
        font-family: 'Raleway';
        font-style: normal;
        display: flex;
        color: #444444;
        margin: 5px 0px; 
        align-items: center;
        text-align: center;
    }
    h2{   
        margin-top: 0;
        font-weight: 800;
        font-size: 48px;
    }
    h4{
        font-weight: 550;
        font-size: 28px;
    }
    h5{
        font-weight: 400;
        font-size: 25px;
    }
    h6{
        font-weight: 300;
        font-size: 20px;
    }
`;
import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 120px;
    gap: 32px;
    background: #2E7BA2;
    @media( max-width: 800px){
        flex-direction: column;
        justify-content: space-evenly;
    }
    @media( max-width: 475px){
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const LinksContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;
   padding: 0px;
   gap: 32px;
   ul{
    display: flex;
    flex-direction: row;
    gap: 32px;
    list-style: none;
   }
`;


export const Links = styled(Link)`
    font-family: 'Raleway';
    white-space: nowrap;
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;

    &:hover{
        border-bottom: 1px solid #FFFFFF;
    }
`;
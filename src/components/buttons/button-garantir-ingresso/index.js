import React from "react";
import imgIngresso from "../../../assets/ícone ingresso.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    gap: 10px;
    background: #2E7BA2;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 16px;
    color: #fff;
    text-decoration: none;
    img{
        width: 20px;
        height: 20px;
    }
    &:hover{
        background-color: #519EC5;
        cursor: pointer;
    }
`;


export function Button(){
    return(
        <ButtonStyled to={"/ingresso"}>Garantir ingresso!<img src={imgIngresso} alt="Ingresso"/></ButtonStyled>
    )
}
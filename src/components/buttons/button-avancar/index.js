import React from "react";
import Arrow from "../../../assets/local_activity.png"
import styled from "styled-components";

const ButtonStyled = styled.button`
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
    margin-top: 10px;
    align-self: center;
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
        <ButtonStyled type="submit">Avançar!<img src={Arrow} alt="Ingresso"/></ButtonStyled>
    )
}
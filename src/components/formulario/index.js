import React from "react";

import {Button} from "../buttons/button-avancar"
import { FirstContainer, Labels, MainContainer, SecondContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Formulario(){
    
    const [usuarios, setUsuarios] = useState([]);
    const [novoUsuario, setNovoUsuario] = useState({
        id: '',
        nome: '',
        data: '',
        tipoIngresso: ''
      });
    const navigate = useNavigate();

    useEffect(()=>{
        const formattedDate = formatInput(novoUsuario.data);
        setNovoUsuario((prevUsuario) => ({
        ...prevUsuario,
        data: formattedDate
    }));
    }, [novoUsuario.data]);
    const handleChange=(event)=>{
        const {name, value} = event.target;
        setNovoUsuario((prevUsuario)=>({
            ...prevUsuario,
            [name]: value
        }))
    }
    const formatInput = (value) => {
        if (value) {
          value = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
          if (value.length > 2) {
            value = value.replace(/^(\d{2})/, '$1/');
          }
          if (value.length > 5) {
            value = value.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
          }
          return value.slice(0, 10);
        }
        return value;
      };
    
  const handleSubmit = (event) => {
    event.preventDefault();

    // Cria um novo ID para o usuário
    const novoId = usuarios.length + 1;
    const novoUsuarioCompleto = {
        id: novoId,
        nome: novoUsuario.nome,
        data: novoUsuario.data,
        tipoIngresso: novoUsuario.tipoIngresso
    };


    setUsuarios((prevUsuarios) => [...prevUsuarios, novoUsuarioCompleto]);
    navigate(`/ingresso/${novoUsuarioCompleto.id}`, { state: { usuario: novoUsuarioCompleto } });
  };
  
    return(
        <MainContainer>
        <h1>
        Preencha o formulário a seguir:
        </h1>
        <FirstContainer onSubmit={handleSubmit}>
            <Labels>Nome Completo:<input type="text" name="nome" id="name" value={novoUsuario.nome} onChange={handleChange}></input></Labels>
            <Labels>Email:<input type="text" name="email" id="email" value={novoUsuario.email} onChange={handleChange}></input></Labels>
            <SecondContainer>
                <Labels>Tipo de ingresso
                    <select name="tipoIngresso" value={novoUsuario.tipoIngresso} onChange={handleChange}>
                        <option value="">Tipo do ingresso</option>
                        <option value="Setor 1">Setor 1</option>
                        <option value="Setor 2">Setor 2</option>
                        <option value="VIP">VIP</option>
                    </select>
                </Labels>
                <Labels>Data de nascimento:
                <input 
                type="text" 
                id="dateInput" 
                name="data" 
                placeholder="dd/mm/aaaa" 
                value={novoUsuario.data} 
                maxLength="10"
                onChange={handleChange}></input></Labels>
            </SecondContainer>   
            <Button onClick={handleSubmit}></Button>   
        </FirstContainer>
        
    </MainContainer>
    )
    
}
import React from "react";
import { Footer } from '../../components/footer';
import { Header } from "../../components/Header";
import { Banner } from "../../components/banner";
import { Mapa } from "../../components/Mapa";
import { MainBody } from "../../components/body-page";
import { Detalhes } from "../../components/detalhes-setores";


export function Setores(){
    return(
        <>
            <Header/>
            <Banner/>
            <MainBody>
                <Mapa/>    
                <Detalhes/>    
            </MainBody>
            <Footer/>
        </>
    )
}
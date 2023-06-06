import React from "react";
import { Footer } from '../../components/footer';
import { Header } from "../../components/Header";
import { Banner } from "../../components/banner";
import { MainBody } from "../../components/body-page";
import { Formulario } from "../../components/formulario";


export function Ingresso(){
    return(
        <>
            <Header/>
            <Banner/>
            <MainBody>
                <Formulario></Formulario>
            </MainBody>
            <Footer/>
        </>
    )
}
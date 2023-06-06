import React from "react";
import { Footer } from '../../components/footer';
import { Header } from "../../components/Header";
import { Banner } from "../../components/banner";
import { MainBody } from "../../components/body-page";
import { IngressoCadastrado } from "../../components/ingresso-cadastrado";


export function DetalhesDoIngresso(){
    return(
        <>
            <Header/>
            <Banner/>
            <MainBody>
                <IngressoCadastrado/>
            </MainBody>
            <Footer/>
        </>
    )
}
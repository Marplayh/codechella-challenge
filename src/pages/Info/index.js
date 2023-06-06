import React from "react";
import { Footer } from '../../components/footer';
import { Header } from "../../components/Header";
import { Banner } from "../../components/banner";
import { Questions } from "../../components/questions";
import { MainBody } from "../../components/body-page";


export function Info(){
    return(
        <>
            <Header/>
            <Banner/>
            <MainBody>
            <Questions/>
            </MainBody>
            <Footer/>
        </>
    )
}
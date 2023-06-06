import React from "react";
import { Header } from '../../components/Header';
import { Banner } from '../../components/banner';
import { BannerFinal } from '../../components/bannerFinal';
import { Footer } from '../../components/footer';
import { BlocksExperiencia } from "../../components/BlocksExperiencia";
import { MainBody } from "../../components/body-page";

export function Experiencia(){
    return(
        <>
            <Header/>
            <Banner/>
            <MainBody>
            <BlocksExperiencia/>
            </MainBody>
            <BannerFinal/>
            <Footer/>
        </>
    )
}
import React from "react";
import { Header } from '../../components/Header';
import { Banner } from '../../components/banner';
import { BannerFinal } from '../../components/bannerFinal';
import { Footer } from '../../components/footer';
import { Section } from '../../components/section';
import { Shows } from '../../components/shows';
import { MainBody } from "../../components/body-page";

export function HomePage(){
    return(
        <>
            <Header/>
            <Banner/>
            <MainBody>
            <Section/>
            <Shows/>
            </MainBody>
            <BannerFinal/>
            <Footer/>
        </>
    )
}
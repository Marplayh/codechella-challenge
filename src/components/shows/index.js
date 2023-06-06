import React from "react";
import { Container, ContainerData, Data, Line, Bands, BandsList } from "./styles";


export function Shows(){
    return(
        <Container>
            <ContainerData>
                <Line></Line>
                <Data>SÁBADO &lt;11/03&gt;</Data>
                <Line></Line>
            </ContainerData>
            <Bands>
                <h2>System of a DOM</h2>
                <BandsList>
                   <h4>Python Maiden</h4>  
                   <h4>Apollo Client 2001</h4>   
                   <h4>Bon Java</h4> 
                   <h4>NickCallback</h4>
                </BandsList>
                <BandsList>
                    <h5>LinkinPromises</h5>   
                    <h5> Fullstack Figthers</h5>    
                    <h5>Papa React</h5>  
                    <h5>Angular in Chains</h5>
                </BandsList>
                <BandsList>
                    <h6>Agnostic Front-end</h6>
                    <h6> SlipkNode</h6> 
                    <h6>Pink Flutter</h6> 
                    <h6>Kiss</h6>
                </BandsList>  
            </Bands>
        </Container>
    );
}
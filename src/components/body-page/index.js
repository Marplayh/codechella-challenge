import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 120px;
    gap: 20px;
    background:linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%) no-repeat;
    @media(max-width: 768px){
        padding: 32px 10px;
   }
   @media(max-width: 400px){
   }
`;
export function MainBody({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}
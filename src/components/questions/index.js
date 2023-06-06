import React from "react";
import { Container, MainContainer } from "./styles";
import ArrowDown from './assets/arrow_drop_down.png';
import { useState } from "react";

export function Questions(){
    const [isOpen, setIsOpen] = useState([]);
    function verResposta(index) {
        setIsOpen(prevState => {
          const updatedState = [...prevState];
          updatedState[index] = !updatedState[index];
          return updatedState;
        });
      }
    return(
        <MainContainer>
            <h1>Perguntas Frequentes:</h1>
            <Container className={isOpen[0] ? "c-open" : ""}>
                <div>
                <h6>Quais serão as atrações?</h6>
                <button onClick={() => verResposta(0)}>
                    <img src={ArrowDown} alt="Butão"></img>
                </button>
                </div>
                <p className={isOpen[0] ? "open" : ""}>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
            </Container>
            <Container className={isOpen[1] ? "c-open" : ""}>
                <div>
                <h6>Qual é a classificação etária?</h6>
                <button onClick={() => verResposta(1)}>
                    <img src={ArrowDown} alt="Butão"></img>
                </button>
                </div>
                <p className={isOpen[1] ? "open" : ""}>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
            </Container>
            <Container className={isOpen[2] ? "c-open" : ""}>
                <div>
                <h6>Quais são os setores disponíveis?</h6>
                <button onClick={() => verResposta(2)}>
                    <img src={ArrowDown} alt="Butão"></img>
                </button>
                </div>
                <p className={isOpen[2] ? "open" : ""}>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
            </Container>
            <Container className={isOpen[3] ? "c-open" : ""}>
                <div>
                <h6>Quais são os itens proibidos?</h6>
                <button onClick={() => verResposta(3)}>
                    <img src={ArrowDown} alt="Butão"></img>
                </button>
                </div>
                
                <p className={isOpen[3] ? "open" : ""}>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link! Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link! Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
            </Container>
            <Container className={isOpen[4] ? "c-open" : ""}>
                <div>
                <h6>Quais são os itens proibidos?</h6>
                <button onClick={() => verResposta(4)}>
                    <img src={ArrowDown} alt="Butão"></img>
                </button>
                </div>
                <p className={isOpen[4] ? "open" : ""}>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!</p>
            </Container>
        </MainContainer>
    )
}
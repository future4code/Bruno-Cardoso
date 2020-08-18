import React from "react";
import styled from "styled-components";

const Cabecalho = styled.header`
  width: 1200px;
  height: 150px;

  display: flex;
  justify-content: center;
`;

const TituloPrincipal = styled.h1`
  font-size: 50px;
  font-family: sans-serif;
  color: #ffffff;
  font-style: italic;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

const Pergunta = styled.h3`
  font-size: 30px;
  text-align: left;
  font-family: sans-serif;
  font-style: italic;
  color: #ffffff;
`;

const Resposta = styled.input`
  font-size: 30px;
  color: #4b7bec;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #7f8c8d;
  outline: none;
`;

export class SecondStep extends React.Component {
  render() {
    return (
      <div>
        <Cabecalho>
          <TituloPrincipal>
            ETAPA 2. Informações de Ensino Superior
          </TituloPrincipal>
        </Cabecalho>
        <Formulario>
          <Pergunta>5. Qual curso?</Pergunta>
          <Resposta></Resposta>
          <Pergunta>6. Qual a unidade de ensino?</Pergunta>
          <Resposta></Resposta>
        </Formulario>
      </div>
    );
  }
}

export default SecondStep;

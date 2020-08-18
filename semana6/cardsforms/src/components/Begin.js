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

const RespostaSelecao = styled.select`
  font-size: 30px;
  color: #4b7bec;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #7f8c8d;
`;

export class Begin extends React.Component {
  render() {
    return (
      <div>
        <Cabecalho>
          <TituloPrincipal>Etapa 1. Dados Pessoais</TituloPrincipal>
        </Cabecalho>
        <Formulario>
          <Pergunta>1. Qual o seu nome?</Pergunta>
          <Resposta></Resposta>

          <Pergunta>2. Qual sua idade?</Pergunta>
          <Resposta></Resposta>

          <Pergunta>3. Qual seu email?</Pergunta>
          <Resposta></Resposta>

          <Pergunta>4. Qual a sua escolaridade?</Pergunta>
          <RespostaSelecao name="escolaridade">
            <option value="1">Ensino médio incompleto</option>
            <option value="2">Ensino médio completo</option>
            <option value="3">Ensino superior incompleto</option>
            <option value="4">Ensino superior completo</option>
          </RespostaSelecao>
        </Formulario>
      </div>
    );
  }
}

export default Begin;

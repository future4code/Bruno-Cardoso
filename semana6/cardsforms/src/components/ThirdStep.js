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

export class ThirdStep extends React.Component {
  render() {
    return (
      <div>
        <TituloPrincipal>Etapa 3. Informações Gerais de Ensino</TituloPrincipal>
        <Formulario>
          <Pergunta>
            5. Por que você não terminou um curso de graduação?
          </Pergunta>
          <Resposta></Resposta>
          <Pergunta>6. Você fez algum curso complementar?</Pergunta>
          <RespostaSelecao>
            <option value="1">Nenhum</option>
            <option value="2">Curso Técnico</option>
            <option value="3">Curso de Inglês</option>
          </RespostaSelecao>
        </Formulario>
      </div>
    );
  }
}

export default ThirdStep;

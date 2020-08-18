import React from "react";
import styled from "styled-components";

const ContainerApp = styled.div`
  max-width: 1920px;
  height: 100vh;
  width: 100%;
  background-color: #e57373;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

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

const Mensagem = styled.h2`
  width: 500px;
  font-size: 60px;
  text-align: left;
  font-family: sans-serif;
  font-style: italic;
  text-align: center;
  color: #ffffff;
`;

export class Congrats extends React.Component {
  render() {
    return (
      <ContainerApp>
        <Cabecalho>
          <TituloPrincipal>O Formulário Acabou!</TituloPrincipal>
        </Cabecalho>
        <Mensagem>Muito obrigado por participar! Entraremos em contato!</Mensagem>
      </ContainerApp>
    );
  }
}

export default Congrats;

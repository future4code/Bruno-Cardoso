import React from "react";
import styled from "styled-components";

export class Begin extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form>
          <h3>1. Qual o seu nome?</h3>
          <input></input>

          <h3>2. Qual sua idade?</h3>
          <input></input>

          <h3>3. Qual seu email?</h3>
          <input></input>

          <h3>4. Qual a sua escolaridade?</h3>
          <select name="escolaridade">
            <option value="1">Ensino médio incompleto</option>
            <option value="2">Ensino médio completo</option>
            <option value="3">Ensino superior incompleto</option>
            <option value="4">Ensino superior completo</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Begin;

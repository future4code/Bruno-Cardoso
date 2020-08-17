import React from "react";
import styled from "styled-components";

export class ThirdStep extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <form>
          <h3>5. Por que você não terminou um curso de graduação?</h3>
          <input></input>
          <h3>6. Você fez algum curso complementar?</h3>
          <select>
            <option value="1">Nenhum</option>
            <option value="2">Curso Técnico</option>
            <option value="3">Curso de Inglês</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ThirdStep;

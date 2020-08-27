import React from "react";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import ShowUsers from "./components/ShowUsers/ShowUsers";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export class App extends React.Component {
  state = {
    currentPage: "signUpScreen",
  };

  // função que faz, ao clicar do botão trocar a renderização por uma condição
  // renderização condicional
  changePage = () => {
    // ternário
    this.state.currentPage === "signUpScreen"
      ? this.setState({ currentPage: "showUsers" })
      : this.setState({ currentPage: "signUpScreen" });
  };

  render() {
    // função que seta a renderização atual da página por uma condicional IF.
    const currentPage = () => {
      if (this.state.currentPage === "signUpScreen") {
        return <SignUpScreen />;
      } else if (this.state.currentPage === "showUsers") {
        return <ShowUsers />;
      }
    };
    return (
      <AppContainer>
        {currentPage()}
        <button onClick={this.changePage}> Trocar de página </button>
      </AppContainer>
    );
  }
}

export default App;

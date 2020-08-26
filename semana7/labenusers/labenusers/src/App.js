import React from "react";
import SignUpScreen from "./components/SignUpScreen/SignUpScreen";
import ShowUsers from "./components/ShowUsers/ShowUsers";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <SignUpScreen />
        TESTE
        <ShowUsers />
      </AppContainer>
    );
  }
}

export default App;

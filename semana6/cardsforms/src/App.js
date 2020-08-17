import React from "react";
import styled from "styled-components";
import Begin from "./components/Begin";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Congrats from "./components/Congrats";

class App extends React.Component {
  render() {
    return (
      <div>
        <Begin />
        <SecondStep />
        <ThirdStep />
        <Congrats />
      </div>
    );
  }
}

export default App;

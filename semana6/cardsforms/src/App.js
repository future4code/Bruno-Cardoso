import React from "react";
import styled from "styled-components";
import Begin from "./components/Begin";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Congrats from "./components/Congrats";

class App extends React.Component {
  state = {
    step: 1,
  };

  stepRender = () => {
    switch (this.state.step) {
      case 1:
        return <Begin />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <Congrats />;
    }
  };

  nextStep = () => {
    const steps = this.setState({ step: this.state.step + 1 });
  };

  render() {
    if (this.state.step <= 3) {
      return (
        <div>
          {this.stepRender()}
          <button onClick={this.nextStep}>Proxima etapa</button>
        </div>
      );
    } else {
      return <div>{this.stepRender()}</div>;
    }
  }
}

export default App;

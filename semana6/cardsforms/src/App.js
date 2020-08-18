import React from "react";
import styled from "styled-components";
import Begin from "./components/Begin";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import Congrats from "./components/Congrats";

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

const BtnProximaEtapa = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #7f8c8d;
  outline: none;
  font-size: 30px;
  margin-top: 70px;
`;

export class App extends React.Component {
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
        <ContainerApp>
          {this.stepRender()}
          <BtnProximaEtapa onClick={this.nextStep}>
            Proxima etapa
          </BtnProximaEtapa>
        </ContainerApp>
      );
    } else {
      return <div>{this.stepRender()}</div>;
    }
  }
}

export default App;

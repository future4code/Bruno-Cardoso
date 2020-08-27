import React from "react";
import ShowUsers from "../ShowUsers/ShowUsers";

export class SignUpScreen extends React.Component {
  state = {
    
  };

  render() {
    return (
      <div>
        <input value="" placeholder="nome" />
        <input value="" placeholder="email" />
        <button>Criar Usuário</button>
      </div>
    );
  }
}

export default SignUpScreen;

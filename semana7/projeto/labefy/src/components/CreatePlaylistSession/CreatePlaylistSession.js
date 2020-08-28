import React from "react";
import styled from "styled-components";

const CreatePlaylistContainer = styled.div`
  border: 2px solid #000000;

  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export class CreatePlaylistSession extends React.Component {
  render() {
    return (
      <CreatePlaylistContainer>
        LOGO
        <h2>Criar PlayList</h2>
        <input placeholder={"Nome da PlayList"} type="text"></input>
        <button>Criar PlayList</button>
      </CreatePlaylistContainer>
    );
  }
}

export default CreatePlaylistSession;

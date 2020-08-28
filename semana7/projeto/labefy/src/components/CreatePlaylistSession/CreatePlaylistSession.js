import React from "react";
import styled from "styled-components";
import axios from "axios";

const CreatePlaylistContainer = styled.div`
  border: 2px solid #000000;

  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export class CreatePlaylistSession extends React.Component {
  state = {
    inputValue: "",
  };

  onChangeInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  createPlaylist = () => {
    const axiosConfig = {
      headers: {
        Authorization: "pedro-severo-jackson",
      },
    };
    const body = {
      name: this.state.inputValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then((response) => {
        this.setState({ inputValue: "" })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <CreatePlaylistContainer>
        LOGO
        <h2>Criar PlayList</h2>
        <input
          type="text"
          onChange={this.onChangeInputValue}
          placeholder={"Nome da PlayList"}
          value={this.state.inputValue}
        ></input>
        <button onClick={this.createPlaylist}>Criar PlayList</button>
      </CreatePlaylistContainer>
    );
  }
}

export default CreatePlaylistSession;

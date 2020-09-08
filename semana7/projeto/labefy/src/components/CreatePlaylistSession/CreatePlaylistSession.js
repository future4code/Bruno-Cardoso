import React from "react";
import AddTrack from "./AddTrack";
import axios from "axios";

export default class CreatePlaylistSession extends React.Component {
  state = {
    inputPlaylistValue: "",
  };
  onChangePlaylistInput = (event) => {
    this.setState({ inputPlaylistValue: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylistValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "bruno-cardoso-jackson",
          },
        }
      )
      .then((response) => {
        this.setState({ inputValue: "" });
        alert("A playlist foi criada com sucesso!");
      })
      .catch((error) => {
        alert("Erro, tente novamente!");
      });
  };

  render() {
    return (
      <div className="mainContainer">
        <div>
          <h2>Crie sua Playlist</h2>
          <input
            type="text"
            value={this.state.inputPlaylistValue}
            onChange={this.onChangePlaylistInput}
            placeholder={"Insira o nome da Playlist"}
          ></input>
          <button onClick={this.createPlaylist}>Criar Playlist</button>
        </div>
        <AddTrack />
      </div>
    );
  }
}

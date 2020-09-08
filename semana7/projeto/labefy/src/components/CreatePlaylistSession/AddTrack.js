import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../../constants/axiosConfig";

export default class AddTrack extends React.Component {
  state = {
    trackInputValue: "",
    artistInputValue: "",
    urlInputValue: "",
    playlists: [],
    playlistName: "",
  };

  onChangeTrackInputValue = (event) => {
    this.setState({ trackInputValue: event.target.value });
  };
  onChangeArtistInputValue = (event) => {
    this.setState({ artistInputValue: event.target.value });
  };
  onChangeUrlInputValue = (event) => {
    this.setState({ urlInputValue: event.target.value });
  };

  getAllPlaylists = () => {
    const axiosConfig = {
      headers: {
        Authorization: "bruno-cardoso-jackson",
      },
    };
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  selectedPlaylist = (event) => {
    const playlistId = event.target.value;
    this.getAPlaylist(playlistId);
    console.log(playlistId);
  };

  getAPlaylist = (id) => {
    const body = {
      name: this.state.trackInputValue,
      artist: this.state.artistInputValue,
      url: this.state.urlInputValue,
    };
    const axiosConfig = {
      headers: {
        Authorization: "bruno-cardoso-jackson",
      },
    };
    axios
      .post(
        ` 
        https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        axiosConfig,
        body
      )
      .then((response) => {});
  };

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  render() {
    return (
      <div>
        <h2>Adicione músicas à suas Playlists</h2>
        <input
          type="text"
          value={this.state.trackInputValue}
          onChange={this.onChangeTrackInputValue}
          placeholder={"Insira o nome da Música"}
        ></input>

        <input
          type="text"
          value={this.state.artistInputValue}
          onChange={this.onChangeArtistInputValue}
          placeholder={"Insira o nome d@ Artista"}
        ></input>
        <input
          type="text"
          value={this.state.urlInputValue}
          onChange={this.onChangeUrlInputValue}
          placeholder={"Insira o url"}
        ></input>

        <select onChange={this.selectedPlaylist}>
          <option value={""}></option>
          {this.state.playlists.map((playlist) => {
            return (
              <option key={playlist.id} value={playlist.id}>
                {playlist.name}
              </option>
            );
          })}
        </select>

        <button onClick={this.getAPlaylist}>Adicionar Música</button>
      </div>
    );
  }
}


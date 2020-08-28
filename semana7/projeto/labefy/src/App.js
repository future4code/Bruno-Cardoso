import React from "react";
import { CreatePlaylistSession } from "./components/CreatePlaylistSession/CreatePlaylistSession";
import { Playlists } from "./components/Playlists/Playlists";
import { PlaylistCard } from "./components/Playlists/PlaylistCard";
import { Player } from "./components/Playlists/Player";
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 19vw 80vw;
  gap: 10px;
  margin-top: 15px;
`;

export class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <CreatePlaylistSession />
        <Playlists />
      </AppContainer>
    );
  }
}

export default App;

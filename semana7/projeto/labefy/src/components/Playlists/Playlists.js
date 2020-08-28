import React from "react";
import { PlaylistCard } from "./PlaylistCard"
import { Player } from "./Player"

import styled from "styled-components"

const PlaylistsContainer = styled.div`
  border: 2px solid #000000;
`;

const PlaylistsHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
`;
const TituloPrincipalPlaylist = styled.h1`
  margin-left: 10px;
`;
const PlaylistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 15px;
`;

export class Playlists extends React.Component {
  render() {
    return (
      <PlaylistsContainer>
        <PlaylistsHeader>
          <TituloPrincipalPlaylist>Ouça as PlayLists</TituloPrincipalPlaylist>
        </PlaylistsHeader>
        <main>
          <PlaylistsGrid>
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </PlaylistsGrid>
        </main>
        <Player/>
      </PlaylistsContainer>
    );
  }
}

export default Playlists;

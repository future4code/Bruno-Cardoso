import React from "react";
import styled from "styled-components";

const PlaylistContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`
const PlaylistCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #000000;
`;
const CardPlaylistTitle = styled.h2`
  margin-right: 10px;
  width: 95%;
`;

export class PlaylistCard extends React.Component {
  render() {
    return (
      <PlaylistContainer>
        <PlaylistCardContainer>
          <ul>
            <CardPlaylistTitle>NOME DA PLAYLIST</CardPlaylistTitle>
            <li>NomeDaMusica</li>
            <li>NomeDaMusica</li>
            <li>NomeDaMusica</li>
            <li>NomeDaMusica</li>
            <li>NomeDaMusica</li>
            <li>NomeDaMusica</li>
          </ul>
        </PlaylistCardContainer>
          <button>Remover Playlist</button>
      </PlaylistContainer>
    );
  }
}

export default PlaylistCard;

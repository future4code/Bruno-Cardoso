import React from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97.2%;
  height: 10vh;
  border: 2px solid #000000;
  margin: 15px;
`;
const PlayerControls = styled.audio`
  width: 98%;
`;
export class Player extends React.Component {
  render() {
    return (
      <PlayerContainer>
        <PlayerControls controls="controls"></PlayerControls>
        <source src={"musica"} type="audio/mp3" />
      </PlayerContainer>
    );
  }
}
export default Player;

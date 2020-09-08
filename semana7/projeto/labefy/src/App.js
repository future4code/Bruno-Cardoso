import React from "react";
import CreatePlaylistSession from "./components/CreatePlaylistSession/CreatePlaylistSession";
import PlaylistSession from "./components/PlaylistsSession/PlaylistSession";
export default class App extends React.Component {
  state = {
    playlists: []
  }

  render() {
    return (
      <div>
        <CreatePlaylistSession />
        <PlaylistSession />
      </div>
    );
  }
}

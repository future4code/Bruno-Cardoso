import React from "react"
import "./App.css"
import Post from "./components/Post/Post"
import PostDoBruno from "./components/PostDoBruno/PostDoBruno"
import PostDoZezinho from "./components/PostDoZezinho/PostDoZezinho"

class App extends React.Component {
  render() {
    return (
      <div className={"app-container"}>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <PostDoBruno
          nomeUsuario={"brunoLabenu"}
          fotoDoBruno={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <PostDoZezinho
          nomeUsuario={"zezinhoLabenu"}
          fotoDoZezinho={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
      </div>
    )
  }
}

export default App

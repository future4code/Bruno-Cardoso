import React from "react"
import "./PostDoZezinho.css"

import { IconeComContador } from "../IconeComContador/IconeComContador"

import iconeCoracaoBranco from "../../img/favorite-white.svg"
import iconeCoracaoPreto from "../../img/favorite.svg"
import iconeComentario from "../../img/comment_icon.svg"
import { SecaoComentario } from "../SecaoComentario/SecaoComentario"
import { Post } from "../Post/Post"

class PostDoZezinho extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    if (!this.state.curtido) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 })
    } else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    })
  }

  aoEnviarcomentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarcomentario} />
      )
    }

    return (
      <div className={"post-container"}>
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.props.fotoDoZezinho}
            alt={"Imagem do Zezinho"}
          />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {componenteComentario}
      </div>
    )
  }
}

export default PostDoZezinho

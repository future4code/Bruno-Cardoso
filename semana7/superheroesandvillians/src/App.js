import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export class App extends React.Component {
  state = {
    listaDePokemons: [],
    imagemPokemon: "",
    tipoPokemon: "",
  };

  receberListaDePokemons = () => {
    axios
      .get("http://pokeapi.co/api/v2/pokemon/?limit=251")
      .then((resposta) => {
        this.setState({ listaDePokemons: resposta.data.results });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  receberDadosDosPokemons = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resposta) => {
        this.setState({ imagemPokemon: resposta.data.sprites.front_default });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  receberTiposDosPokemons = (tipos) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${tipos}`)
      .then((resposta) => {
        this.setState({ tipoPokemon: resposta.data.types });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  selecionarPokemon = (evento) => {
    const nomePokemon = evento.target.value;
    this.receberDadosDosPokemons(nomePokemon);

    const habilidadeDoPokemon = evento.target.value;
    this.receberTiposDosPokemons(habilidadeDoPokemon);
  };

  componentDidMount = () => {
    this.receberListaDePokemons();
  };

  render() {
    return (
      <ContainerPrincipal>
        {this.state.imagemPokemon && (
          <img alt={"Imagem dos pokémons"} src={this.state.imagemPokemon} />
        )}
        <select onChange={this.selecionarPokemon}>
          <option value={""}></option>
          {this.state.listaDePokemons.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>        
      </ContainerPrincipal>
    );
  }
}
export default App;

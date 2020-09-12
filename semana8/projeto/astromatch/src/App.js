import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import FrameInicial from "./components/FrameInicial/FrameInicial";
import FrameMatches from "./components/FrameMatches/FrameMatches";
import styled from "styled-components";
import { baseUrl, choosePerson, clear } from "./apiRequests/apiRequests";

const Container = styled.div`
  width: 30vw;
  height: 95vh;
  border: 2px solid #000000;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = (props) => {
  const [telas, setTelas] = useState(0);
  const [pessoas, setPessoas] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const mudarPagina = () => {
    if (telas === 0) {
      setTelas(1);
    } else {
      setTelas(0);
    }
  };
  const paginaAtual = () => {
    if (telas === 0) {
      return (
        <FrameInicial
          mostrarPessoas={getProfileToChoose}
          foto={pessoas.photo}
          nome={pessoas.name}
          idade={pessoas.age}
          descricao={pessoas.bio}
          mostrarPessoas={getProfileToChoose}
          matches={darmatch}
        />
      );
    }
    if (telas === 1) {
      return <FrameMatches />;
    }
  };

  const getProfileToChoose = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setPessoas(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const darmatch = () => {
    const body = {
      id: pessoas.id,
      choice: true,
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(choosePerson, body, headers)
      .then((response) => {
        getProfileToChoose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <Header mudarPagina={mudarPagina} />
        {paginaAtual()}
      </Container>
    </>
  );
};

export default App;

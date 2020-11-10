import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header/Header";
import { Button } from "../../components/Header/styles";
import { useTripsList } from "../../hooks/useTripsList";
import { Main, Container, Trip } from "../HomePage/styles";

const HomePage = () => {
  const trips = useTripsList();
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Trip>
            <Link to={"/viagens/cadastrar"}>
              <Button>Viaje Já</Button>
            </Link>
          </Trip>
          <Trip>
            <Link to={"/viagens/cadastrar"}>
              <Button>Viaje Já</Button>
            </Link>
          </Trip>
          <Trip>
            <Link to={"/viagens/cadastrar"}>
              <Button>Viaje Já</Button>
            </Link>
          </Trip>
          <Trip>
            <Link to={"/viagens/cadastrar"}>
              <Button>Viaje Já</Button>
            </Link>
          </Trip>
        </Container>
      </Main>
    </>
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Header/styles";
import { TripsContainer } from "../NewTripForm/styles";
import { TripsTitle, ListTrips, Trip } from "./styles";

const Trips = () => {
  return (
    <>
      <TripsContainer>
        <ListTrips>
          <TripsTitle>Lista de Viagens</TripsTitle>
          <Link to={"/viagens/detalhes"}>
            <Trip>
              <Button>Viagem A</Button>
            </Trip>
          </Link>
          <Link to={"/viagens/detalhes"}>
            <Trip>
              <Button>Viagem A</Button>
            </Trip>
          </Link>
          <Link to={"/viagens/detalhes"}>
            <Trip>
              <Button>Viagem A</Button>
            </Trip>
          </Link>
          <Link to={"/viagens/detalhes"}>
            <Trip>
              <Button>Viagem A</Button>
            </Trip>
          </Link>
        </ListTrips>
      </TripsContainer>
    </>
  );
};

export default Trips;

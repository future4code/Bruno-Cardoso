import React from "react";
import { Link } from "react-router-dom";
import { useTripsList } from "../../hooks/useTripsList";
import { Button } from "../Header/styles";
import { TripsContainer } from "../NewTripForm/styles";
import { TripsTitle, ListTrips, Trip } from "./styles";

const Trips = () => {
  const trips = useTripsList();
  return (
    <>
      <TripsContainer>
        <ListTrips>
          <TripsTitle>Lista de Viagens</TripsTitle>
          {trips.map((trip) => {
            return (
              <Link to={"/viagens/detalhes"}>
                <Trip>
                  <Button>{trip.name}</Button>
                </Trip>
              </Link>
            );
          })}
        </ListTrips>
      </TripsContainer>
    </>
  );
};

export default Trips;

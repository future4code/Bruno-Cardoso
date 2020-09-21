import React from "react";
import DetailsTrips from "../../components/DetailsTrips/DetailsTrips";
import Candidates from "../../components/Candidates/Candidates";
import { Title, TitleContainer } from "../TripsPage/styles";
import { ContainerTripDetails, MainContainer } from "./styles";

const TripDetailsPage = () => {
  return (
    <>
      <TitleContainer>
        <Title>Detalhes da Viagem</Title>
      </TitleContainer>
      <MainContainer>
        <ContainerTripDetails>
          <DetailsTrips />
          <Candidates />
        </ContainerTripDetails>
      </MainContainer>
    </>
  );
};

export default TripDetailsPage;

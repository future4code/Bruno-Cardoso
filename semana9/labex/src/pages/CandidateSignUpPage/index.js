import React from "react";
import Header from "../../components/Header/Header";
import {
  ButtonTrips,
  InputTrips,
  TripsForm,
  TripsTitle,
} from "../../components/NewTripForm/styles";
import { SignUpContainer } from "./styles";

const CandidateSignUpPage = () => {
  return (
    <>
      <Header />
      <SignUpContainer>
        <TripsForm>
          <TripsTitle>Se inscrever para Novas Viagens</TripsTitle>
          <InputTrips placeholder="Nome" />
          <InputTrips placeholder="Idade" type="number" />
          <InputTrips placeholder="Porquê devo ir?" />
          <InputTrips placeholder="Profissão" />
          <InputTrips placeholder="Nacionalidade (SELECT)" />
          <InputTrips placeholder="Viagem (SELECT)" />
          <ButtonTrips>Inscrever-se</ButtonTrips>
        </TripsForm>
      </SignUpContainer>
    </>
  );
};

export default CandidateSignUpPage;

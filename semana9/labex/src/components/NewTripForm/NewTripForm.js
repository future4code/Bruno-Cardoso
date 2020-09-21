import React from "react";
import {
  ButtonTrips,
  InputTrips,
  TripsTitle,
  TripsForm,
  TripsContainer,
} from "./styles";

const NewTripsForm = () => {
  return (
    <>
      <TripsContainer>
        <TripsForm>
          <TripsTitle>Criar Novas Viagens</TripsTitle>
          <InputTrips placeholder="Nome" />
          <InputTrips placeholder="Planeta" />
          <InputTrips placeholder="Data" type="date" />
          <InputTrips placeholder="Descrição" />
          <InputTrips placeholder="Duração em dias" type="number" />
          <ButtonTrips>Criar</ButtonTrips>
        </TripsForm>
      </TripsContainer>
    </>
  );
};

export default NewTripsForm;

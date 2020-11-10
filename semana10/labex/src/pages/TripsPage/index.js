import React from "react";
import Header from "../../components/Header/Header";
import Trips from "../../components/Trips/Trips";
import NewTripForm from "../../components/NewTripForm/NewTripForm";
import { TitleContainer, ComponentsContainer } from "./styles";
import { Title } from "./styles";

const TripsPage = () => {
  return (
    <>
      <Header />
      <TitleContainer>
        <Title>Área Administrativa</Title>
      </TitleContainer>
      <ComponentsContainer>
        <Trips />
        <NewTripForm />
      </ComponentsContainer>
    </>
  );
};

export default TripsPage;

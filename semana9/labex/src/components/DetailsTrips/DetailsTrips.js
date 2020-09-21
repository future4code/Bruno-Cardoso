import React from "react";
import TripInfo from "../TripInfo/TripInfo";
import { ContentContainer, List, Title } from "./styles";

const DetailsTrips = () => {
  return (
    <>
      <ContentContainer>
        <List>
          <Title>Informações da Viagem</Title>
          <TripInfo Name={"Nome:"} Text={"Ano novo em Mercúrio"} />
          <TripInfo Name={"Planeta:"} Text={"Mercúrio"} />
          <TripInfo Name={"Data:"} Text={"20/12/2030"} />
          <TripInfo
            Name={"Descrição:"}
            Text={"Ano novo em Mercúrio com fogs de artifiicio"}
          />
          <TripInfo Name={"Duração em dias:"} Text={"10"} />
        </List>
      </ContentContainer>
    </>
  );
};

export default DetailsTrips;

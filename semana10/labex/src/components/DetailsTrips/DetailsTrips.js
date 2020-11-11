import React from "react";
import TripInfo from "../TripInfo/TripInfo";
import { ContentContainer, List, Title } from "./styles";

const DetailsTrips = (props) => {
  const { name, planet, description, date, durationInDays } = props.details;
  return (
    <>
      <ContentContainer>
        <List>
          <Title>Informações da Viagem</Title>
          <TripInfo Name={"Nome:"} Text={name} />
          <TripInfo Name={"Planeta:"} Text={planet} />
          <TripInfo Name={"Data:"} Text={date} />
          <TripInfo Name={"Descrição:"} Text={description} />
          <TripInfo Name={"Duração em dias:"} Text={durationInDays} />
        </List>
      </ContentContainer>
    </>
  );
};

export default DetailsTrips;

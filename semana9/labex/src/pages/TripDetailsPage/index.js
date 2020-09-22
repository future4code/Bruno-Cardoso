import React, { useEffect, useState } from "react";
import DetailsTrips from "../../components/DetailsTrips/DetailsTrips";
import Candidates from "../../components/Candidates/Candidates";
import { Title, TitleContainer } from "../TripsPage/styles";
import { ContainerTripDetails, MainContainer } from "./styles";
import axios from "axios";
import { baseUrl } from "../../requisitions/apiRequisitions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/trip/${params.tripId}`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTrip(response.data.trip);
      })
      .catch((error) => {
        alert("Erro ao aprovar o candidato");
      });
  }, []);

  return (
    <>
      <TitleContainer>
        <Title>Detalhes da Viagem</Title>
      </TitleContainer>
      {trip ? (
        <MainContainer>
          <ContainerTripDetails>
            <DetailsTrips details={trip} />
            <Candidates candidates={trip.candidates} />
          </ContainerTripDetails>
        </MainContainer>
      ) : (
        <div> Carregando ... </div>
      )}
    </>
  );
};

export default TripDetailsPage;

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

  const getTripDetail = () => {
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
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  const decideCandidate = (acept, candidatesId) => {
    const body = {
      approve: acept,
    };
    axios
      .put(
        `${baseUrl}/trips/${params.tripId}/candidates/${candidatesId}/decide`,
        body,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        getTripDetail();
      })
      .catch((error) => {
        alert("Erro ao tentar decidir se o candidat@ irá ou não!");
      });
  };

  return (
    <>
      <TitleContainer>
        <Title>Detalhes da Viagem</Title>
      </TitleContainer>
      {trip ? (
        <MainContainer>
          <ContainerTripDetails>
            <DetailsTrips details={trip} />
            <Candidates
              candidates={trip.candidates}
              decideCandidate={decideCandidate}
            />
          </ContainerTripDetails>
        </MainContainer>
      ) : (
        <div> Carregando ... </div>
      )}
    </>
  );
};

export default TripDetailsPage;

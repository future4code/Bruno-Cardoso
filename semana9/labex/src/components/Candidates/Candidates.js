import React from "react";
import CandidateInfo from "../CandidateInfo/CandidateInfo";
import { ContentContainer, List, Title } from "../DetailsTrips/styles";

const Candidates = () => {
  return (
    <>
      <ContentContainer>
        <List>
          <Title>Candidat@s</Title>

          <CandidateInfo Name={"Nome:"} Text={"Bruno"} />
          <CandidateInfo Name={"Nome:"} Text={"Bruno"} />
          <CandidateInfo Name={"Nome:"} Text={"Bruno"} />
          <CandidateInfo Name={"Nome:"} Text={"Bruno"} />
        </List>
      </ContentContainer>
    </>
  );
};

export default Candidates;

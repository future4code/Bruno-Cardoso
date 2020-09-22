import React from "react";
import CandidateInfo from "../CandidateInfo/CandidateInfo";
import { ContentContainer, List, Title } from "../DetailsTrips/styles";

const Candidates = (props) => {
  return (
    <>
      <ContentContainer>
        <List>
          <Title>Candidat@s</Title>
          {props.candidates.map((candidateInfo) => {
            return <CandidateInfo Name={"Nome:"} candidates={candidateInfo} />;
          })}
        </List>
      </ContentContainer>
    </>
  );
};

export default Candidates;

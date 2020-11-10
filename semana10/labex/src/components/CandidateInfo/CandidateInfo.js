import React from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Bold, BoxIcons, ListItem, Text } from "../DetailsTrips/styles";
import axios from "axios";
import { baseUrl } from "../../requisitions/apiRequisitions";

const CandidateInfo = (props) => {
  const aceptCandidade = () => {
    props.decideCandidate(true, props.candidates.id);
  };
  const declineCandidate = () => {
    props.decideCandidate(false, props.candidates.id);
  };

  return (
    <>
      <ListItem>
        <Bold>{props.Name}</Bold>
        <Text>{props.candidates.name}</Text>
        <BoxIcons>
          <CheckIcon
            boxSize={20}
            color={"green"}
            onClick={aceptCandidade}
            cursor={"pointer"}
          />
          <CloseIcon
            boxSize={16}
            color={"red"}
            onClick={declineCandidate}
            cursor={"pointer"}
          />
        </BoxIcons>
      </ListItem>
    </>
  );
};

export default CandidateInfo;

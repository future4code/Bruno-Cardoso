import React from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Bold, BoxIcons, ListItem, Text } from "../DetailsTrips/styles";

const CandidateInfo = (props) => {
  return (
    <>
      <ListItem>
        <Bold>{props.Name}</Bold>
        <Text>{props.candidates.name}</Text>
        <BoxIcons>
          <CheckIcon boxSize={20} color={"green"} />
          <CloseIcon boxSize={16} color={"red"} />
        </BoxIcons>
      </ListItem>
    </>
  );
};

export default CandidateInfo;

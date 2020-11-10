import React from "react";
import { Bold, ListItem, Text } from "../DetailsTrips/styles";

const TripInfo = (props) => {
  return (
    <>
      <ListItem>
        <Bold>{props.Name}</Bold>
        <Text>{props.Text}</Text>
      </ListItem>
    </>
  );
};

export default TripInfo;

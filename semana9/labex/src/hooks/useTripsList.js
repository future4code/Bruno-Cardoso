import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../requisitions/apiRequisitions";

export const useTripsList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/trips`)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert("erro ao importar API");
      });
  }, []);

  return trips;
};

import React, { useState } from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import {
  ButtonTrips,
  InputTrips,
  TripsTitle,
  TripsForm,
  TripsContainer,
} from "./styles";
import { baseUrl } from "../../requisitions/apiRequisitions";
import { useHistory } from "react-router-dom/";

const NewTripsForm = () => {
  const [date, setDate] = useState(new Date());
  const history = useHistory();
  const [form, onChangeInput] = useForm({
    name: "",
    planet: "",
    description: "",
    duration: "",
  });

  const handleSubmition = (event) => {
    const dateFormat = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    event.preventDefault();
    const body = {
      name: form.name,
      planet: form.planet,
      date: dateFormat,
      description: form.description,
      durationInDays: form.duration,
    };
    axios
      .post(`${baseUrl}/trips`, body, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        history.push("/viagens");
      });
  };

  return (
    <>
      <TripsContainer>
        <TripsForm onSubmit={handleSubmition}>
          <TripsTitle>Criar Novas Viagens</TripsTitle>
          <InputTrips
            onChange={onChangeInput}
            value={form["name"]}
            name={"name"}
            placeholder="Nome"
            type="text"
          />
          <InputTrips
            onChange={onChangeInput}
            value={form["planet"]}
            name={"planet"}
            placeholder="Planeta"
            type="text"
          />
          <InputTrips
            onChange={(date) => onChangeInput(date)}
            value={form["date"]}
            name={"date"}
            placeholder="Data"
            type="date"
          />
          <InputTrips
            onChange={onChangeInput}
            value={form["description"]}
            name={"description"}
            placeholder="Descrição"
            type="text"
          />
          <InputTrips
            onChange={onChangeInput}
            value={form["duration"]}
            name={"duration"}
            placeholder="Duração em dias"
            type="number"
          />
          <ButtonTrips type="submit">Criar</ButtonTrips>
        </TripsForm>
      </TripsContainer>
    </>
  );
};

export default NewTripsForm;

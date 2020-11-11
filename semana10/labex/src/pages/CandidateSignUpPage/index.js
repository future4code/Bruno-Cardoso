import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  ButtonTrips,
  InputTrips,
  SelectTrips,
  TripsForm,
  TripsTitle,
  OptionTrips,
} from "../../components/NewTripForm/styles";
import useForm from "../../hooks/useForm";
import { useTripsList } from "../../hooks/useTripsList";
import { baseUrl } from "../../requisitions/apiRequisitions";
import { SignUpContainer } from "./styles";

const CandidateSignUpPage = () => {
  const trips = useTripsList();
  const [form, onChangeInput] = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: null,
  });

  const handleSubmition = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${baseUrl}/trips/${form.trip.id}/apply`, body)
      .then((response) => {
        alert("Inscrição realizada com sucesso! 🚀");
      });
  };

  console.log(form);

  return (
    <>
      <Header />
      <SignUpContainer>
        <TripsForm onSubmit={handleSubmition}>
          <TripsTitle>Se inscrever para Novas Viagens</TripsTitle>

          <InputTrips
            onChange={onChangeInput}
            placeholder="Nome"
            type="text"
            value={form["name"]}
            name={"name"}
          />

          <InputTrips
            onChange={onChangeInput}
            placeholder="Idade"
            type="number"
            value={form["age"]}
            name={"age"}
          />
          <InputTrips
            onChange={onChangeInput}
            placeholder="Porquê devo ir?"
            value={form["applicationText"]}
            name={"applicationText"}
          />
          <InputTrips
            onChange={onChangeInput}
            placeholder="Profissão"
            value={form["profession"]}
            name={"profession"}
          />
          <SelectTrips
            onChange={onChangeInput}
            value={form["country"]}
            name={"country"}
          >
            <OptionTrips value={""}>Selesione um País</OptionTrips>
            <OptionTrips value={"Brasil"}>Brasil</OptionTrips>
          </SelectTrips>
          <SelectTrips
            onChange={onChangeInput}
            value={form["trip"]}
            name={"trip"}
          >
            <OptionTrips value={""}>Selecione uma viagem</OptionTrips>

            {trips.map((trip) => (
              <OptionTrips key={trip.name} value={trip.id}>
                {trip.name}
              </OptionTrips>
            ))}
          </SelectTrips>
          <ButtonTrips type={"submit"}>Inscrever-se</ButtonTrips>
        </TripsForm>
      </SignUpContainer>
    </>
  );
};

export default CandidateSignUpPage;

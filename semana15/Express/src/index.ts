import express, { Express, request, Request, Response } from "express";
import cors from "cors";

import { countries, country } from "./countries";

const app: Express = express();
app.use(express.json());
app.use(cors());

// endpoint 1

app.get("/countries/all", (request: Request, response: Response) => {
  const countryFound = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));
  response.status(200).send(countryFound);
  response.status(400).send("Não foi encontrado nenhum país");
});

// endpoint 2

app.get("/countries/:id", (request: Request, response: Response) => {
  const countryFound: country | undefined = countries.find(
    (country) => country.id === Number(request.params.id)
  );

  countryFound
    ? response.status(200).send(countryFound)
    : response.status(400).send("Não foi encontrado nenhum país");
});

// endpoint 3

app.get("/countries/search", (request, response) => {
  const queryName = request.query.name ? String(request.query.name) : "";
  const queryContinent = request.query.continent
    ? String(request.query.continent)
    : "";

  if (queryName || queryContinent) {
    const filteredCountries = countries
      .filter((country) =>
        country.name.toLowerCase().includes(queryName.toLowerCase())
      )
      .filter((country) =>
        country.continent.toLowerCase().includes(queryContinent.toLowerCase())
      );

    return filteredCountries.length > 0
      ? response.json(filteredCountries)
      : response.status(404).json({ message: "NO_SUCH_COUNTRIES" });
  }

  return response.status(400).json({ message: "NO_QUERY_PARAMS" });
});

//endpoint 4
app.put("/countries/edit/:id", (request, response) => {
  const country = countries.find(
    (country) => country.id === Number(request.params.id)
  );

  if (!country) {
    return response.status(404).json({ message: "NO_SUCH_COUNTRY" });
  }

  const { name, capital } = request.body;

  country.name = name ? name : country.name;
  country.capital = capital ? capital : country.capital;

  return response.status(202).json(country);
});

app.delete("/countries/:id", (request, response) => {
  const authorization = request.headers.authorization;
  if (!authorization || authorization.length < 10) {
    return response.sendStatus(401);
  }

  const countryIndex = countries.findIndex(
    (country) => country.id === Number(request.params.id)
  );

  if (countryIndex < 0) {
    return response.status(404).json({ message: "NO_SUCH_COUNTRY" });
  }

  countries.splice(countryIndex, 1);

  return response.sendStatus(200);
});

app.post("/countries/create", (request, response) => {
  const authorization = request.headers.authorization;
  if (!authorization || authorization.length < 10) {
    return response.sendStatus(401);
  }

  const { name, capital, continent } = request.body;

  if (!name || !capital || !continent) {
    return response.sendStatus(400);
  }

  if (countries.some((country) => name === country.name)) {
    return response.status(400).json({ message: "ALREADY_EXISTS" });
  }

  const country = {
    id: countries.length,
    name,
    capital,
    continent,
  };

  countries.push(country);

  return response.status(200).json({ message: "success", country });
});

app.listen(3003, () => {
  console.log("O Servidor está rodando na porta 3003 ... e rodando");
});

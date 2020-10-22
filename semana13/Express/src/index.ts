import express, { Express, Request, Response } from "express";
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

  response.status(200).send(countryFound);
});

// endpoint 3

app.listen(3003, () => {
  console.log("O Servidor está rodando na porta 3003 ... e rodando");
});

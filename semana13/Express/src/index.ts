import express, { Express, Request, Response } from "express";
import cors from "cors";

import { countries } from "./countries";

const app: Express = express();
app.use(express.json());
app.use(cors());

// endpoint 1

app.get("/countries/all", (request: Request, response: Response) => {
  response.status(200).send(countries);
});

// endpoint 2



app.listen(3003, () => {
  console.log("O Servidor está rodando na porta 3003 ... e rodando");
});

import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app: Express = express();
app.use(cors());
app.use(express.json());

//endpoint criação de conta

app.post("/users/create", (request: Request, response: Response) => {
  try {
    // validar as entradas da requisição
    //consultar ou alterar a base de dados
    const { name, CPF, dateOfBirthAsString } = request.body;

    const [day, month, year] = dateOfBirthAsString.split("/");

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);
    accounts.push({
      name,
      CPF,
      dateOfBirth,
      ballance: 0,
      statement: [],
    });
    // validar os resultados da consulta
    //enviar a resposta
    response.status(201).send("Conta criada com sucesso");
  } catch (error) {
    console.log(error);
    response.status(400).send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Servidor pronto e rodando na porta 3003");
});

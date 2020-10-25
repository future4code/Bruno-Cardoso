import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app: Express = express();
app.use(cors());
app.use(express.json());

//endpoint criação de conta

app.post("/users/create", (request: Request, response: Response) => {
  try {
    //consultar ou alterar a base de dados
    const { name, CPF, dateOfBirthAsString } = request.body;

    const [day, month, year] = dateOfBirthAsString.split("/");

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    // validar as entradas da requisição
    const ageInMiliseconds: number = Date.now() - dateOfBirth.getTime();

    const ageInYears: number = ageInMiliseconds / 1000 / 60 / 60 / 24 / 365;

    if (ageInYears < 18) {
      response.statusCode = 406;
      throw new Error("Idade deve ser amior que 18 anos");
    }
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
    response.send(error.message);
  }
});

app.get("/users/all", (request: Request, response: Response) => {
  try {
    if (!accounts.length) {
      response.statusCode = 404;
      throw new Error("Nenuhma conta foi encontrada!");
    }
    response.status(200).send(accounts);
  } catch (error) {
    response.send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Servidor pronto e rodando na porta 3003");
});

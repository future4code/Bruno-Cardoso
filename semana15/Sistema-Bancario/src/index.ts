import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { users } from "./user";
import { UserAccount } from "./types";

const app: Express = express();
app.use(cors());
app.use(express.json());

// ENDPOINTS
app.post("/users", (request: Request, response: Response) => {
  try {
    const { name, cpf, dateOfBirthAsString } = request.body;

    const [day, month, year] = dateOfBirthAsString.split("/");

    const birthDate: Date = new Date(`${year}-${month}-${day}`);

    const ageInMiliseconds: number = Date.now() - birthDate.getTime();

    const ageInYears: number = ageInMiliseconds / 1000 / 60 / 60 / 24 / 365;

    if (ageInYears < 18) {
      response.statusCode = 406;
      throw new Error("Idade deve ser amior que 18 anos");
    } else if (users.find((doccument) => doccument.cpf === cpf)) {
      throw new Error("Este cpf já está cadastrado em outra conta");
    }
    users.push({
      name,
      cpf,
      birthDate: dateOfBirthAsString,
      balance: 0,
      spending: [],
    });
    response.status(201).send("conta criada com sucesso!");
  } catch (error) {
    console.log(error);
    response.send(error.message);
  }
});

app.get("/users", (request: Request, response: Response) => {
  try {
    if (!users.length) {
      response.statusCode = 404;
      throw new Error("Nenuhma conta foi encontrada!");
    }
    response.status(200).send(users);
  } catch (error) {
    response.send(error.message);
  }
});

app.get("/users/query", (request: Request, response: Response) => {
  const cpf = request.query.cpf;
  const funds = users.find((user) => user.cpf === cpf);
  try {
    if (funds?.cpf === cpf) {
      response.status(200).send(users.map((account) => account.balance));
    } else {
      response.statusCode = 404;
      throw new Error("Cpf não encontrado!");
      return;
    }
  } catch (error) {
    response.send(error.message);
  }
});



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`O servidor está rodando em http://localhost:${address.port}`);
  } else {
    console.error(
      "Houve um problema ao tentar rodar o servidor, confira o que houve"
    );
  }
});

import express, { Express, json, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

import { users } from "./users";
import { User } from "./types";

const app: Express = express();
app.use(cors());
app.use(json());

//ENDPOINTS

app.get("/users", (request: Request, response: Response): void => {
  try {
    if (!users) {
      response.statusCode = 404;
      console.log("Não foi encontrado nenhum usuário");
    }
    response.status(200).send(users);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/users/name", (request: Request, response: Response): void => {
  const usersByName: User[] | undefined = users.filter(
    (user) =>
      user.name.toLowerCase() === String(request.query.name).toLowerCase()
  );
  try {
    if (usersByName.length < 0) {
      response.statusCode = 404;
      throw new Error("Não foi encontrado nenhum usuário");
    }
    response.status(200).send(usersByName);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/users/:type", (request: Request, response: Response): void => {
  try {
    if (!users) {
      response.statusCode = 404;
      throw new Error("Nenhum usuário foi encontrado!");
    }
    const usersByType: User[] | undefined = users.filter(
      (user) => user.type === request.params.type
    );
    response.status(200).send(usersByType);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/users", (request: Request, response: Response): void => {
  const { id, name, email, type, age } = request.body;
  try {
    if (!request.body) {
      response.statusCode = 404;
      throw new Error("Não foi possível criar usuário");
    }
    users.push({
      id,
      name,
      email,
      type,
      age,
    });
    response.status(201).send("Usuário criado com sucesso!");
  } catch (error) {
    console.log(error.message);
  }
});

app.put("/users/:id", (request: Request, response: Response): void => {
  try {
    const { id, name, email, age, type } = request.body;

    const searchById: number | undefined = users.findIndex(
      (user) => user.id === Number(request.params.id)
    );
    if (searchById === -1) {
      response.statusCode = 404;
      throw new Error("Nenhum usuário encontrado");
    }
    if (name) {
      users[searchById].name = name;
      response.status(200).send("nome atualizado");
    }
    throw new Error("O nome não foi atualizado!");
  } catch (error) {
    console.log(error.message);
  }
});

app.patch("/users/:id", (request: Request, response: Response): void => {
  try {
    const { id, name, email, age, type } = request.body;
    const searchById: number | undefined = users.findIndex(
      (user) => user.id === Number(request.params.id)
    );
    if (name) {
      users[searchById].name = name;
      response.status(200).send("nome atualizado");
    }
    throw new Error("O nome não foi atualizado!");
  } catch (error) {
    console.log(error.message);
  }
});

app.delete("/users/:id", (request: Request, response: Response): void => {
  try {
    const searchById: number | undefined = users.findIndex(
      (user) => user.id === Number(request.params.id)
    );

    if (searchById === -1) {
      throw new Error("Nenhum usuário encontrado");
    }
    users.splice(searchById);
    response.status(200).send("Usuário deletado");
  } catch (error) {
    response.status(400).send(console.log(error.message));
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`O servidor está rolando em http://localhost:${address.port}`);
  } else {
    console.error("Houve uma falha ao rodar o servidor na porta 3003");
  }
});

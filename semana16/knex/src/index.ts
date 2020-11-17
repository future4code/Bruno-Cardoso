import { AddressInfo } from "net";
import express, { Express, Response, Request } from "express";
import knex from "knex";
import dotenv from "dotenv";
import { getActorById } from "./handlers/getActorById";
import { getActorByGender } from "./handlers/getActorByGender";

dotenv.config();

const app: Express = express();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

app.use(express.json());

//endpoints

app.get("/user/:id", getActorById);
app.get("/actor", getActorByGender);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`O servidor está rolando em http://localhost:${address.port}`);
  }
  console.error("Houve um erro");
});

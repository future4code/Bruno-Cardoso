import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";

import { AddressInfo } from "net";
import getAllUsers from "./endpoints/getAllUsers";
import searchUsersByName from "./endpoints/searchUsersByName";
import searchUsersByType from "./endpoints/searchUsersByType";
import getAllUsersWithLimit from "./endpoints/getAllUsersWithLimit";
import getAllUsersWithAllFilters from "./endpoints/getAllUsersWithAllFilters";

dotenv.config();
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

const app: Express = express();
app.use(express.json());
app.use(cors());

//endpoints
app.get("/users/all", getAllUsers);
app.get("/users/all", getAllUsersWithAllFilters);
app.get("/users/limit", getAllUsersWithLimit);
app.get("/user/search", searchUsersByName);
app.get("/users/:type", searchUsersByType);

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta ${address.port}`);
  } else {
    console.error("Houve um problema ao iniciar o servidor");
  }
});

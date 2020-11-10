import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import userCreate from "./endpointHandlers/userCreate";
import getUserById from "./endpointHandlers/getUserById";
import editUserData from "./endpointHandlers/editUserData";
import taskCreate from "./endpointHandlers/taskCreate";
import getTaksById from "./endpointHandlers/getTaskById";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
  },
});

const app = express();
app.use(express.json());

app.put("/user", userCreate);
app.get("/user/:id", getUserById);
app.post("/user/edit/:id", editUserData);

app.put("/task", taskCreate);
app.get("/task/:id", getTaksById);

app.listen(3003, () => {
  console.log("Servidor pronto! Porta: 3003");
});

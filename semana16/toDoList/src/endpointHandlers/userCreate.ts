import { Request, Response } from "express";
import handleCreateUser from "../dbHandlers/handleCreateUser";

export default async function userCreate(request: Request, response: Response) {
  try {
    if (!request.body.name || !request.body.nickname || !request.body.email) {
      response.status(400).send("Os campos foram preenchidos corretamente?");
    }

    return;

    const userId: string = Date.now() + Math.random().toString();

    await handleCreateUser(
      userId,
      request.body.name,
      request.body.nickname,
      request.body.email
    );

    response.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    response.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}

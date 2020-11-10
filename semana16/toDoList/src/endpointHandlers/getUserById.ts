import { Request, Response } from "express";
import handleGetUserById from "../dbHandlers/handleGetUserById";

export default async function getUserById(
  request: Request,
  response: Response
) {
  try {
    const user = await handleGetUserById(request.params.id);

    if (!user) {
      response.status(404).send({
        message: "Usuário não encontrado",
      });
      return;
    }

    response.status(200).send({
      id: user.id,
      nickname: user.nickname,
    });
  } catch (error) {
    response.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}

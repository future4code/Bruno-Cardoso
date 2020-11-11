import { Request, Response } from "express";
import handleEditUser from "../dbHandlers/handleEditUser";

export default async function editUserData(
  request: Request,
  response: Response
) {
  try {
    if (
      request.body.name === "" ||
      request.body.nickname === "" ||
      request.body.email === ""
    ) {
      response.status(400).send({
        message: "Os campos não podem ficar em branco",
      });
    }
    if (!request.body.name && !request.body.nickname && !request.body.email) {
      response.status(400).send({
        message: "Algum campo deve ser alterado",
      });

      return;
    }

    await handleEditUser(
      request.params.id,
      request.body.name,
      request.body.nickname,
      request.body.email
    );

    response.status(200).send({
      message: "Dados atualizados com sucesso!",
    });
  } catch (error) {
    response.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}

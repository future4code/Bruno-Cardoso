import { Request, Response } from "express";
import { dbSelectActorById } from "../databaseHandler/dbSelectActorById";

export async function getActorById(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const actor = await dbSelectActorById(request.params.id);
    if (!actor) {
      response.status(404).send({
        message: "Ator não encontrado!",
      });
      return;
    }
    response.status(200).send({
      id: actor.id,
    });
  } catch (error) {
    response.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

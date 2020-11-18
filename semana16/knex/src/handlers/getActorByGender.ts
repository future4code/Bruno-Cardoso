import { Request, Response } from "express";
import { dbCountActorByGender } from "../databaseHandler/dbCountActorByGender";
import { connection } from "../index";

export async function getActorByGender(
  response: Response,
  request: Request
): Promise<void> {
  try {
    const genderByQuery = await dbCountActorByGender(
      request.query.gender as string
    );
    response.status(200).send({
      quantity: genderByQuery,
    });
  } catch (error) {
    response.status(404).send({
      message: error.message,
    });
  }
}

import { Request, response, Response } from "express";
import { dbGetAllMovies } from "../databaseHandler/dbGetAllMovies";

export async function getAllMovies(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const movies = await dbGetAllMovies();
    response.status(200).send({ movies: movies });
  } catch (error) {
    response.status(404).send({
      message: error.message,
    });
  }
}

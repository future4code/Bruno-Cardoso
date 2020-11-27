import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

export default async function getAllUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const users = await selectAllUsers();
    if (!users.length) {
      res.statusCode = 404;
      throw new Error("Não foi encontrado nenhum usuário");
    }
    res.status(200).send(users);
  } catch (error) {
    message: error.message || error.sqlMessage;
  }
}

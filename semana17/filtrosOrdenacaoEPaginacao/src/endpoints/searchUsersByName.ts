import { json, Request, Response } from "express";
import dbFilterUsers from "../data/dbFilterUsers";

export default async function searchUsersByName(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const nameFilter = (req.query.name as string).toLowerCase();

    const result = await dbFilterUsers(nameFilter);
    if (!nameFilter) {
      throw new Error("Informe um nome válido por favor");
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
}

import { Request, Response } from "express";
import dbFilterUsers from "../data/dbFilterUsers";
import dbFilterUsersByType from "../data/dbFilterUsersByType";
export default async function searchUsersByType(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const typeFilter: string = req.params.type as string;
    const result = await dbFilterUsersByType(typeFilter);

    if (!typeFilter) {
      throw new Error("Informe um tipo válido por favor");
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
}

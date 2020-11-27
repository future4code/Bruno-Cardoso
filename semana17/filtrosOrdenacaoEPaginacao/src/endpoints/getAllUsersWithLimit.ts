import { Request, Response } from "express";
import { dbLimitPage } from "./dbLimitPage";

export default async function getAllUsersWithLimit(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const result = await dbLimitPage();
    if (!result.length) {
      throw new Error("Não tem resultado");
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
}

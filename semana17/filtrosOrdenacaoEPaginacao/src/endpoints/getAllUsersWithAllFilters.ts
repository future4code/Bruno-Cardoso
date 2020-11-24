import { Request, Response } from "express";
import dbAllFilters from "../data/dbAllFilters";
import { inputData, User } from "../types/User";

export default async function getAllUsersWithAllFilters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const data: inputData = {
      name: (req.query.title as string).toLowerCase(),
      orderBy: (req.query.title as string) || "name",
      orderType: (req.query.title as string) || "DESC",
      page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1,
    };

    if (!data.name) {
      throw new Error(
        "Não foi encontrado! Veja se informou o 'name' corretamente"
      );
    }

    const validOrderByValues = ["name", "DESC"];
    if (!validOrderByValues.includes(data.orderBy)) {
      throw new Error(
        "Os valores para 'OrderBy' devem ser 'title' ou 'CreatedAt'"
      );
    }

    const validOrderTypeValues = ["ASC", "DESC"];

    if (!validOrderTypeValues.includes(data.orderType)) {
      throw new Error("Os valores para 'OrderType' devem ser 'ASC' ou 'DESC'");
    }

    const result = await dbAllFilters(data);

    if (!result.length) {
      res.statusCode = 404;
      throw new Error("Nenhuma receita encontrada!");
    }

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
}

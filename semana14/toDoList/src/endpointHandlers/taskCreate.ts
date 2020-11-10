import { Request, Response } from "express";
import moment from "moment";
import handleCreateTask from "../dbHandlers/handleCreateTask";

export default async function taskCreate(request: Request, response: Response) {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.limitDate ||
      !request.body.creatorUserId
    ) {
      response.status(400).send({
        message: "Os campos foram preenchidos corretamente?",
      });
      return;
    }

    const dateComparition: number =
      moment(request.body.limitDate, "DD/MM/YYYY").unix() - moment().unix();

    if (dateComparition <= 0) {
      response.status(400).send({
        message: "Data inválida, a data não pode ser menor que a data atual",
      });

      return;
    }

    const id: string = Date.now() + Math.random().toString();

    await handleCreateTask(
      id,
      request.body.title,
      request.body.description,
      moment(request.body.limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
      request.body.creatorUserId
    );

    response.status(200).send({
      message: "Tarefa criada com sucesso!",
      id,
    });
  } catch (error) {
    response.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}

import { Request, Response } from "express";
import moment from "moment";
import handleGetTaskById from "../dbHandlers/handleGetTaskById";

export default async function getTaksById(
  request: Request,
  response: Response
) {
  try {
    const taskOutput = await handleGetTaskById(request.params.id);

    if (!taskOutput) {
      response.status(404).send({
        message: "Nenhuma tarefa foi encontrada",
      });

      return;
    }

    response.status(200).send({
      id: taskOutput.id,
      title: taskOutput.title,
      description: taskOutput.description,
      limitDate: moment(taskOutput.limitDate, "YYYY-MM-DD").format(
        "DD/MM/YYYY"
      ),
      status: taskOutput.status,
      creatorUserId: taskOutput.creator_user_id,
      creatorNickName: taskOutput.nickname,
    });
  } catch (error) {
    response.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}

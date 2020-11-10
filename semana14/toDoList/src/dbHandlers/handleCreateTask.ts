import { connection } from "../";

export default async function handleCreateTask(
  id: string,
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
) {
  await connection("TodoListTask").insert({
    id: id,
    title: title,
    description: description,
    limit_date: limitDate,
    creator_user_id: creatorUserId,
  });
}

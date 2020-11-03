import { connection } from "../";

export default async function handleGetUserById(id: string) {
  const valueReturn = await connection("TodoListUser")
    .select("*")
    .where({ id: id });

  return valueReturn[0];
}

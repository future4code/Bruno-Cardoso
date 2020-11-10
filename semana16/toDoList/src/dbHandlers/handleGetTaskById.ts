import { connection } from "../";

export default async function handleGetTaskById(id: string): Promise<any> {
  const valueReturn = await connection.raw(`
      SELECT tasks.*, nickname FROM TodoListTask AS tasks
      JOIN TodoListUser AS users
      ON creator_user_id = users.id
      WHERE tasks.id = "${id}";
    `);

  return valueReturn[0][0];
}

import { connection } from "../index";
import { inputData, User } from "../types/User";

export default async function dbFilterUsers(name: string): Promise<void> {
  try {
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE name LIKE "%${name}%"
    `);

    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
}

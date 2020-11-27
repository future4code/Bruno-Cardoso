import { connection } from "../index";

export default async function dbFilterUsersByType(type: string): Promise<void> {
  try {
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE type LIKE "%${type}%"
    `);

    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
}

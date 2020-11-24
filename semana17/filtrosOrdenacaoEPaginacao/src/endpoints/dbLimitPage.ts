import { connection } from "../index";

export async function dbLimitPage(): Promise<any> {
  const result = await connection.raw(`
  SELECT * FROM aula48_exercicio
  LIMIT 5
  OFFSET 10
  `);
  return result[0];
}

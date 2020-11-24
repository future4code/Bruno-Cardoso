import { connection } from "../index";
import { inputData, User } from "../types/User";

export default async function dbAllFilters(data: inputData): Promise<User[]> {
  const resultPerPage: number = 5;
  const offset: number = resultPerPage * data.page - 1;
  try {
    const result = await connection.raw(`
    SELECT * FROM recipes_aula48
    WHERE title LIKE "%${data.name}%"
    ORDER BY ${data.orderBy} ${data.orderType}
    LIMIT ${resultPerPage}
    OFFSET ${offset}
    `);
    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
}

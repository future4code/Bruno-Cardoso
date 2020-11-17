import { connection } from "../index";

export async function dbCountActorByGender(gender: string) {
  const result = await connection("Actor").count("gender");
  return result;
}

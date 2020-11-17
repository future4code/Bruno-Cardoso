import { connection } from "../index";

export async function dbSelectActorById(id: string) {
  const result = await connection("Actor").select("*").where({ id: id });

  return result[0];
}

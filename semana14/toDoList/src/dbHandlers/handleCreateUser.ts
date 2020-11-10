import { connection } from "../";

export default async function handleCreateUser(
  id: string,
  name: string,
  nickname: string,
  email: string
) {
  await connection
    .insert({
      id: id,
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("TodoListUser");
}

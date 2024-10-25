import { db } from "../db";

export const getTodo = async () => {
  const data = await db.query.todo.findMany();
  return data;
};

"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { todo } from "../db/schema";

export async function createTodo(data: string) {
  await db.insert(todo).values({ task: data });
  revalidatePath('/')
}

import TodoList from "../components/to-to";
import { getTodo } from "../server/actions/get-todo";

export default async function HomePage() {
  const data = await getTodo()
  return <TodoList todoItems={data} />;
}

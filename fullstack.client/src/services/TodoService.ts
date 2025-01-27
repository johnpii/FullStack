import Todo from "../types/Todo";

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch("api/Todo/GetTodos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

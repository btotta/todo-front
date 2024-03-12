import axios from "axios";
import { Todo, TodoResponse } from "./models";

const baseUrl = "https://todo-api.tottadev.com.br";
const createTodoUrl = `${baseUrl}/todo`;
const listTodosUrl = `${baseUrl}/todos`;
const deleteTodoUrl = `${baseUrl}/todo`;
const getTodoUrl = `${baseUrl}/todo`;

const getTodo = async (id) => {
  try {
    const response = await axios.get(`${getTodoUrl}/${id}`);
    return response.data.map(
      (todo) =>
        new TodoResponse(
          todo.completed,
          todo.completed_at,
          todo.created_at,
          todo.description,
          todo.id,
          todo.scheduled,
          todo.scheduled_to,
          todo.title
        )
    );
  } catch (error) {
    console.error("Erro ao buscar o Todo:", error.message);
    throw error;
  }
};

const createTodo = async (todo) => {
  if (!todo.isValid()) {
    throw new Error("Todo inválido: dados incompletos ou incorretos.");
  }

  try {
    const response = await axios.post(createTodoUrl, todo);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o Todo:", error.message);
    throw error;
  }
};

const listTodos = async () => {
  try {
    const response = await axios.get(listTodosUrl);

    return response.data.data.map(
      (todo) =>
        new TodoResponse(
          todo.completed,
          todo.completed_at,
          todo.created_at,
          todo.description,
          todo.id,
          todo.scheduled,
          todo.scheduled_to,
          todo.title
        )
    );
  } catch (error) {
    console.error("Erro ao listar os Todos:", error.message);
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${deleteTodoUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o Todo:", error.message);
    throw error;
  }
};

const editTodo = async (todo) => {
  try {
    const response = await axios.put(`${deleteTodoUrl}/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar o Todo:", error.message);
    throw error;
  }
};

export { Todo, createTodo, listTodos, deleteTodo };

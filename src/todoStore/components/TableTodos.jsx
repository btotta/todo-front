import React from "react";
import { deleteTodo } from "../api/api";

const TableTodos = ({ todos }) => {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTodo(id);
      console.log("Todo deletado com sucesso:", response);

      // Usando todos.setTodos para atualizar o estado dos todos
      todos.setTodos(todos.todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar o Todo:", error.message);
    }
  };

  return (
    <div>
      <table className="todo-table">
        <thead className="todo-table-head">
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado em</th>
            <th>Agendado</th>
            <th>Finalizado em</th>
            <th>Ação</th>
          </tr>
        </thead>
        {todos.todos.length === 0 ? (
          <tbody className="todo-table-body">
            <tr>
              <td colSpan="8" className="empty-todo-message">
                Nenhum Todo cadastrado.
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="todo-table-body">
            {todos.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Feito" : "Pendente"}</td>
                <td>{todo.created_at}</td>
                <td>{todo.scheduled ? todo.scheduled_to : "Não"}</td>
                <td>{todo.completed_at}</td>
                <td>
                  <button onClick={() => handleDelete(todo.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TableTodos;

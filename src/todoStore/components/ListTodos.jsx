import React, { useState, useEffect } from "react";
import { listTodos } from "../api/api";
import TableTodos from "./TableTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await listTodos();
      setTodos(response);
    } catch (error) {
      console.error("Erro ao listar os Todos:", error.message);
    }
  };

  return (
    <div>
      <button onClick={() => fetchTodos()}>Buscar</button>
      {/* Passando todos e setTodos como uma propriedade */}
      <TableTodos todos={{ todos, setTodos }} />
    </div>
  );
};

export default ListTodos;

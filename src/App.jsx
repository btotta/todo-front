import { useState } from "react";
import "./App.css";
import CreateTodo from "./todoStore/components/CreateTodo";
import ListTodos from "./todoStore/components/ListTodos";

function App() {
  const [showComponent, setShowComponent] = useState("list");

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={() => setShowComponent("list")}>Listar Tarefas</button>
        <button onClick={() => setShowComponent("create")}>Criar Tarefa</button>
      </div>

      <div className="content">
        {showComponent === "list" ? <ListTodos /> : <CreateTodo />}
      </div>
    </div>
  );
}

export default App;

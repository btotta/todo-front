import React from "react";
import { createTodo } from "../api/api";
import { Todo } from "../api/models";

const CreateTodo = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isScheduled, setIsScheduled] = React.useState(false);
  const [scheduledTo, setScheduledTo] = React.useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //check if its valid
    if (!title || !description) {
      console.error("Título e Descrição são obrigatórios.");
      return;
    }

    const todo = new Todo(title, description, isScheduled, scheduledTo);

    //after created, clear the form

    setTitle("");
    setDescription("");
    setIsScheduled(false);
    setScheduledTo("");

    try {
      const response = await createTodo(todo);
      console.log("Todo criado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao criar o Todo:", error.message);
    }
  };

  return (
    <div>
      <form className="todo-form">
        <label htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <label htmlFor="isScheduled">
          Agendar?
          <input
            type="checkbox"
            id="isScheduled"
            checked={isScheduled}
            onChange={(event) => setIsScheduled(event.target.checked)}
          />
        </label>

        {isScheduled && (
          <label htmlFor="scheduledTo">
            Agendar para:
            <input
              type="datetime-local"
              id="scheduledTo"
              value={scheduledTo}
              onChange={(event) => setScheduledTo(event.target.value)}
            />
          </label>
        )}

        <button onClick={handleFormSubmit}>Criar Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;

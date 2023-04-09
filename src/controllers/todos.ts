import { RequestHandler } from "express";
import { Todo } from "../models/todos";
const TODOS: Todo[] = [];
export const createTodos: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "Created the todo", data: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: "Todos fetched successfully", data: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todId = req.params.id;
  const text = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((t) => t.id === todId);
  if (todoIndex < 0) {
    throw new Error("Could not find todo.");
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);
  res
    .status(200)
    .json({ message: "Todos updated successfully", data: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todId = req.params.id;

  const todoIndex = TODOS.findIndex((t) => t.id === todId);
  if (todoIndex < 0) {
    throw new Error("Could not find todo.");
  }
  TODOS.splice(todoIndex, 1);
  res.status(200).json({ message: "Todo deleted successfully", data: TODOS });
};

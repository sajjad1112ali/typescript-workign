"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodos = exports.getTodos = exports.createTodos = void 0;
const todos_1 = require("../models/todos");
const TODOS = [];
const createTodos = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo", data: newTodo });
};
exports.createTodos = createTodos;
const getTodos = (req, res, next) => {
    res.status(200).json({ message: "Todos fetched successfully", data: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todId = req.params.id;
    const text = req.body.text;
    const todoIndex = TODOS.findIndex((t) => t.id === todId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo.");
    }
    TODOS[todoIndex] = new todos_1.Todo(TODOS[todoIndex].id, text);
    res
        .status(200)
        .json({ message: "Todos updated successfully", data: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
const deleteTodo = (req, res, next) => {
    const todId = req.params.id;
    const todoIndex = TODOS.findIndex((t) => t.id === todId);
    if (todoIndex < 0) {
        throw new Error("Could not find todo.");
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo deleted successfully", data: TODOS });
};
exports.deleteTodo = deleteTodo;

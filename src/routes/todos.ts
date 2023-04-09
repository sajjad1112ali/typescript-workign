import { Router } from "express";
import {
  createTodos,
  getTodos,
  updateTodos,
  deleteTodo,
} from "../controllers/todos";
const router = Router();

router.post("/", createTodos);
router.get("/", getTodos);
router.patch("/:id", updateTodos);
router.delete("/:id", deleteTodo);

export default router;

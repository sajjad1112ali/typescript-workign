import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
const app = express();
app.use(json());
import todosRouter from "./routes/todos";

app.use("/todos", todosRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ msg: err.message });
});
app.listen(3000);

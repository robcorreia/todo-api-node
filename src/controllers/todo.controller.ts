import e, { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const all = async (req: Request, res: Response) => {
  const tasks = await Todo.findAll();
  res.json({ tasks });
};

export const add = async (req: Request, res: Response) => {
  if (req.body.title) {
    let newTask = await Todo.create({
      title: req.body.title,
      done: req.body.done ? true : false,
    });

    res.status(201).json({ item: newTask });
  } else {
    res.json({
      error: "Dados não enviados.",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  let task = await Todo.findByPk(id);

  if (task) {
    if (req.body.title) {
      task.title = req.body.title;
    }

    if (req.body.done) {
      switch (req.body.done.toLowerCase()) {
        case "true":
        case "1":
          task.done = true;
          break;
        case "false":
        case "0":
          task.done = false;
          break;
      }
    }
    await task.save();
    res.json({ item: task });
  } else {
    res.json({ error: "Item não encontrado" });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  let task = await Todo.findByPk(id);
  if (task) {
    await task.destroy();
  }
  res.json({});
};

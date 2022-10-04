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

export const update = async () => {};

export const remove = async () => {};

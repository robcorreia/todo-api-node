import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const all = async (req: Request, res: Response) => {
  const tasks = await Todo.findAll();
  res.json({ tasks });
};

export const add = async () => {};

export const update = async () => {};

export const remove = async () => {};

import { Request, Response, response } from "express";
import db from "../database/connection";

// interface

export default class {
  async index(req: Request, res: Response) {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return res.json({ total });
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    const response = await db("connections").insert({ user_id });

    return res.status(201).json({
      response,
    });
  }
}

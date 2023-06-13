import { Router, Request, Response } from "express";

export function Routes(app: Router) {
  app.get("/", (request: Request, response: Response) => {
    response.json([
      { id: 1, name: "A" },
      { id: 2, name: "B" },
    ]);
  });
}

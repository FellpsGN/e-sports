import { Router, Request, Response } from "express";

export function Routes(app: Router) {
  app.get("/games", (request: Request, response: Response) => {
    return response.json([]);
  });

  app.post("/ads", (request: Request, response: Response) => {
    return response.status(201).json([]);
  });

  app.get("/games/:id/ads", (request: Request, response: Response) => {
    return response.json([]);
  });
}

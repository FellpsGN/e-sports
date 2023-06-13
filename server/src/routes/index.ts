import { Router, Request, Response } from "express";
import { createAds, listAds, listAdsGames, listGames } from "../utils/database";

export function Routes(app: Router) {
  app.get("/games", async (request: Request, response: Response) => {
    const games = await listGames();
    return response.json(games);
  });

  app.get("/games/:id/ads", async (request: Request, response: Response) => {
    const gameId = request.params.id;
    const adsBygames = await listAdsGames(gameId);
    return response.json(adsBygames);
  });

  app.get("/ads/:id/discord", async (request: Request, response: Response) => {
    const adId = request.params.id;
    const ad = await listAds(adId);

    return response.json(ad);
  });

  app.post("/games/:id/ads", async (request: Request, response: Response) => {
    const gameId = request.params.id;
    const body = request.body;

    const ad = await createAds(gameId, body);

    return response.status(201).json(ad);
  });
}

import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { converHourStringToMinute } from "./convertHoursMinutes";
import { convertMinutesToHourString } from "./convertMinutesToHours";

/* const prisma = new PrismaClient({
  log: ["query"],
}); */

const prisma = new PrismaClient();

// GET /games
export function listGames() {
  const games = prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  }); // end findMany

  return games;
}

// GET /games/:id/ads
export async function listAdsGames(gameId: string) {
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId: gameId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  const result = ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(","),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd),
    };
  });
  return result;
}

// GET /ads/:id/discord
export function listAds(adId: string) {
  const ad = prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return ad;
}

// POST /games/:id/ads

export function createAds(gameId: string, body: any) {
  const ad = prisma.ad.create({
    data: {
      gameId: gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      hourStart: converHourStringToMinute(body.hourStart),
      hourEnd: converHourStringToMinute(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return ad;
}

"use server";
import { db } from ".";
import { weddingRSVP } from "./schema";
import { eq } from "drizzle-orm";
import { Guest } from "@/lib/types";

export const findGuest = async (guestName: string) => {
  const foundGuest = await db
    .select()
    .from(weddingRSVP)
    .where(eq(weddingRSVP.guestName, guestName));

  if (foundGuest.length === 0) {
    return;
  } else {
    return foundGuest;
  }
};

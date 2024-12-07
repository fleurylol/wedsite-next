"use server";
import { eq } from "drizzle-orm";
import { db } from ".";
import { weddingRSVP } from "./schema";

export async function findGuest(guestName: string) {
  return db
    .select()
    .from(weddingRSVP)
    .where(eq(weddingRSVP.guestName, guestName));
}

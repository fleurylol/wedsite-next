import { drizzle } from "drizzle-orm/vercel-postgres";

import { sql } from "drizzle-orm";

export const db = drizzle(sql);

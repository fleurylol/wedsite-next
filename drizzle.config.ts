import { type Config } from "drizzle-kit";
import { env } from "process";

const dbUrl: string = env.POSTGRES_URL || "default_postgres_url"; // Provide a default value if necessary

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
  tablesFilter: ["wedsite_*"],
} satisfies Config;

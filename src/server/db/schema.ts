// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  boolean,
  timestamp,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `wedsite_${name}`);

export const weddingRSVP = createTable(
  "weddingRSVP",
  {
    id: serial("id").primaryKey(),
    guestName: varchar("guestName", { length: 256 }).notNull(),
    hasPlusOne: boolean("hasPlusOne").default(false).notNull(),
    attending: boolean("attending").default(false).notNull(),
    songRequest: varchar("songRequest", { length: 256 })
      .default("No Song Request")
      .notNull(),
  },
  (example) => ({
    guestIndex: index("weddingRSVP_idx").on(example.guestName),
  })
);

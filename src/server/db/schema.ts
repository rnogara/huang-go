import {
  date,
  index,
  integer,
  pgTableCreator,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `huang-go_${name}`);

export const events = createTable(
  "events",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    type: varchar("type", { length: 100 }).notNull(),
    date: date("date", { mode: "string" }).notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
    typeIndex: index("type_idx").on(example.type),
    dateIndex: index("date_idx").on(example.date),
  })
);
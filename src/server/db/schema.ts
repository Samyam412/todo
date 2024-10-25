// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  pgTableCreator,
  serial,
  varchar
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `to-do_${name}`);



export const todo = createTable("todo", {
  id: serial("id").primaryKey(),
  task: varchar("task", { length: 256 }),
});

import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.database_url,
  },
  tablesFilter: ["to-do_*"],
} satisfies Config;

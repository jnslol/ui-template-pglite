import { PGlite } from "@electric-sql/pglite"
import { drizzle } from "drizzle-orm/pglite"
import { migrate } from "drizzle-orm/pglite/migrator"

const client = new PGlite(process.env.DATA_DIR || "./.data")
export const db = drizzle(client)
export const closeDb = () => client.close()
export const migrateDb = () => migrate(db, { migrationsFolder: "./drizzle" })

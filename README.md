# jns ui PGlite Template

A Vite + React workspace with TanStack Router and Query, a typed Hono API, Zod request validation, and Drizzle. PostgreSQL runs inside the API process using PGlite. The template includes its own UI source from [jns ui](https://jnslol.github.io/ui/).

On GitHub, select **Use this template** to create your own repository, then clone it locally.

Requires Node.js 24 or newer.

```sh
npm ci
npm run db:migrate
npm run db:seed
npm run dev
```

Open http://127.0.0.1:4310. The API listens on port 4311. Vite proxies `/api` so the browser uses one origin. Seeding is optional and can be rerun; it skips existing sample IDs.

The database lives in `.data`. To change its path or the API port, copy `.env.example` to `.env`. Close the running app before running migrations or seeding against the same embedded database directory.

```sh
npm run check
npm run build
npm start
```

The built app and API are served together at http://127.0.0.1:4311. Run `npm run db:generate -- --name your_change` after changing `server/schema.ts`, then apply the migration with `npm run db:migrate`.

The sample API has no authentication or roles. Keep it on loopback for demos. Add authentication and authorize every mutation before exposing a deployed workspace. Use the PostgreSQL server starter when multiple API processes need to share the database.

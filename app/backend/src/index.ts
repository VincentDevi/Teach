import { Elysia } from "elysia";
import { os } from "@orpc/server";
import { cors } from "@elysiajs/cors";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { openapi } from "@elysiajs/openapi";

// Create router with your procedures
const router = os.router({
  ping,
});
const handler = new OpenAPIHandler(router);

const app = new Elysia()
  .use(openapi)
  .use(
    cors({
      origin: ["http://localhost:3001"], // Your frontend URL
      credentials: true,
    }),
  )
  .get("/", "hello world")
  .all(
    "/rpc*",
    async ({ request }: { request: Request }) => {
      const { response } = await handler.handle(request, {
        prefix: "/rpc",
      });
      return response ?? new Response("Not Found", { status: 404 });
    },
    {
      parse: "none",
    },
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

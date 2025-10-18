import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { RPCHandler } from "@orpc/server/fetch";
import { router } from "./router";

const handler = new RPCHandler(router);

const app = new Elysia()
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

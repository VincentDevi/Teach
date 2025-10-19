import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { RPCHandler } from "@orpc/server/fetch";
import { router } from "./router";
import { clerkPlugin } from "elysia-clerk";

const handler = new RPCHandler(router);

const app = new Elysia()
  .use(
    cors({
      origin: ["http://localhost:3001"], // Your frontend URL
      credentials: true,
    }),
  )
  .get("/", "hello world")
  .use(clerkPlugin())
  .all(
    "/rpc*",
    async (ctx) => {
      const auth = ctx.auth();
      if (!auth.userId) {
        return ctx.status(401);
      }
      const { response } = await handler.handle(ctx.request, {
        prefix: "/rpc",
        context: {
          userId: auth.userId,
          orgId: auth.orgId,
          sessionId: auth.sessionId,
        },
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

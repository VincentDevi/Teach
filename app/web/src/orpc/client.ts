import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

import type { RouterClient } from "@orpc/server";
import type { Router } from "@/../../backend/src/router/index";

// Point to your backend server
const link = new RPCLink({
  url: "http://localhost:3000/rpc",
  fetch: (input, init) => {
    return fetch(input, {
      ...init,
      credentials: "include", // If you need cookies/auth
    });
  },
});

export const client: RouterClient<Router> = createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);

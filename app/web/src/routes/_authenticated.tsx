import { useSurreal } from "@/integrations/surrealdb/provider";
import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const auth = useAuth();
  const { client } = useSurreal();

  useEffect(() => {
    if (auth.isSignedIn && auth.isLoaded) {
      auth.getToken().then((jwt) => {
        if (jwt) {
          client.authenticate(jwt);
          console.log("[Auth] SurrealDB authenticated with JWT");
        }
      });
    }
  }, [auth.isSignedIn, auth.isLoaded, auth, client]);

  if (!auth.isLoaded) {
    return <div>Loading...</div>;
  }

  if (!auth.isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
}

import { SurrealProvider, useSurreal } from "@/integrations/surrealdb/provider";
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
          console.log(jwt);
          try {
            client.authenticate(jwt);
            console.log(client.status);
            console.log(client.connection);
          } catch (error) {
            console.log(error);
          }
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

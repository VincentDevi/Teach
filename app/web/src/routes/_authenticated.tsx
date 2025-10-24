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
  const databaseAuth = async () => {
    try {
      const token = await auth.getToken();
      await client.authenticate(token as string);
      console.log(client.status);
      console.log(client.connection);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(auth.isSignedIn);
    databaseAuth();
  }, [auth.isSignedIn]);

  if (!auth.isLoaded) {
    return <div>Loading...</div>;
  }

  if (!auth.isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
}

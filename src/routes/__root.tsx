import Header from "@/components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <div><Header />
    <main className="w-screen pt-4 bg-muted"><Outlet /></main>
  </div>

}

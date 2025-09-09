import Header from "@/components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <Header />
      <main className="bg-muted min-h-full py-4">
        <Outlet />
      </main>
    </div>
  );
}

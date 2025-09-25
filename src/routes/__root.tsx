import Header from "@/components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-muted min-h-screen">
      <Header />
      <div className="bg-muted py-4">
        <main className="m-auto w-4/6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

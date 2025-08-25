import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <h1 className="text-red-600">Hello, world!</h1>;
}

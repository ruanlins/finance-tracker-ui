import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "@/components/theme-provider";
import { FilterProvider } from "./context/filterContext";

const router = createRouter({ routeTree });

export default function App() {
  return (
    <FilterProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </FilterProvider>
  );
}

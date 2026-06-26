import { createRoute } from "@tanstack/react-router";
import TablesPage from "../pages/TablesPage";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tables",
  component: TablesPage,
});

import { createRoute } from "@tanstack/react-router";
import TournamentsPage from "../pages/TournamentsPage";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tournaments",
  component: TournamentsPage,
});

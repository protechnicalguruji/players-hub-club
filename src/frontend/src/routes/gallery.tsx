import { createRoute } from "@tanstack/react-router";
import GalleryPage from "../pages/GalleryPage";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

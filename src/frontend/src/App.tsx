import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { Route as aboutRoute } from "./routes/about";
import { Route as contactRoute } from "./routes/contact";
import { Route as galleryRoute } from "./routes/gallery";
import { Route as indexRoute } from "./routes/index";
import { Route as tablesRoute } from "./routes/tables";
import { Route as tournamentsRoute } from "./routes/tournaments";

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  tablesRoute,
  tournamentsRoute,
  galleryRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

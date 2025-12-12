import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/Home.tsx"),
  route("404", "./pages/NotFound.tsx")
] satisfies RouteConfig;

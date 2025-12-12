import type { Route } from "./+types/root";

const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Belleza&family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
  }
];

export default links;

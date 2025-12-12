import type { ReactNode } from "react";
import { Scripts } from "react-router";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className="text-gray-700 bg-white dark:text-gray-400 dark:bg-gray-800 md:bg-gray-200 md:dark:bg-gray-900"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Way Maker Family Farm</title>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export default Layout;

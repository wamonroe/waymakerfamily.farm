import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Link = ({ href, children, onClick }: LinkProps) => (
  <a
    href={href}
    className="font-bold text-blue-800 dark:text-blue-400 hover:underline"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Link;

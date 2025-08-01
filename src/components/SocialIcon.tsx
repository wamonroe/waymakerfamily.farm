import type { ReactNode } from "react";

type SocialIconProps = {
  href: string;
  children?: ReactNode;
};

const SocialIcon = ({ href, children }: SocialIconProps) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default SocialIcon;

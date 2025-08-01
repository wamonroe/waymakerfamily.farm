import type { ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  children: ReactNode;
  tag?: ElementType;
  className?: string;
};

const Heading = ({ children, className, tag: Tag = "h1" }: HeadingProps) => {
  return (
    <Tag className={twMerge(className, "font-serif tracking-tight text-gray-900 dark:text-white")}>
      {children}
    </Tag>
  );
};

export default Heading;

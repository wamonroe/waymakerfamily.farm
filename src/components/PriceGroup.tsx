import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PriceGroupProps = {
  children: ReactNode;
  className?: string;
};

const PriceGroup = ({ children, className }: PriceGroupProps) => {
  return (
    <ul
      className={twMerge(
        className,
        "text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      )}
    >
      {children}
    </ul>
  );
};

export default PriceGroup;

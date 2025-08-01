import type { ReactNode } from "react";

type AppSectionProps = {
  children?: ReactNode;
};

const AppSection = ({ children }: AppSectionProps) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 md:border md:border-gray-200 md:rounded-lg md:shadow md:dark:border-gray-700 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      {children}
    </div>
  );
};

export default AppSection;

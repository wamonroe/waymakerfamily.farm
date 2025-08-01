import type { ReactNode } from "react";
import Heading from "./Heading";

type ContentProps = {
  title: string;
  children: ReactNode;
};

const Content = ({ title, children }: ContentProps) => {
  return (
    <div>
      <Heading tag="h2" className="mb-2 text-2xl">
        {title}
      </Heading>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default Content;

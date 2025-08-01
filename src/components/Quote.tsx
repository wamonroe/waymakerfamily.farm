import type { ReactNode } from "react";

type QuoteProps = {
  cite: string;
  children: ReactNode;
};

const Quote = ({ cite, children }: QuoteProps) => {
  return (
    <figure>
      <blockquote>
        <p className="italic text-center">{children}</p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-right">
        — <cite>{cite}</cite>
      </figcaption>
    </figure>
  );
};

export default Quote;

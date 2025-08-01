import type { MouseEvent, ReactNode } from "react";
import Link from "./Link";

type EmailToLinkProps = {
  encoded_contact?: string;
  children: ReactNode;
};

const DEFAULT_ENCODED_CONTACT = "ZXJpY2FAbW9ucm9lcG9zdC5jb20";

const decodeContact = (encoded: string) =>
  typeof window !== "undefined" ? window.atob(encoded) : "";

const EmailToLink = ({ encoded_contact = DEFAULT_ENCODED_CONTACT, children }: EmailToLinkProps) => {
  const contact = decodeContact(encoded_contact);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = `mailto:${contact}`;
  };

  return (
    <Link href="#mailto" onClick={handleClick}>
      {children}
    </Link>
  );
};

export default EmailToLink;

import { ReactNode } from "react";

interface TExternalLinkProps {
  href: string;
  children: ReactNode;
}

export const ExternalLink: React.FC<TExternalLinkProps> = ({
  href,
  children,
}) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

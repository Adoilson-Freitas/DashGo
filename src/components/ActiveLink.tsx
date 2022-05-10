import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActveLinkProps extends LinkProps {
  children: ReactElement;
  shoudMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shoudMatchExactHref,
  ...rest
}: ActveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shoudMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    (!shoudMatchExactHref && asPath.startsWith(String(rest.href))) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}

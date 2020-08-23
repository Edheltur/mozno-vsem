import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Anchor, Text } from "grommet";

interface IProps {
  href: string;
  label: string;
}

export const NavLink = ({ href, label }: IProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  if (isActive) {
    return (
      <Text weight={500} as="h1" margin="none">
        {label}
      </Text>
    );
  }

  return (
    <Link passHref href={href}>
      <Anchor>{label}</Anchor>
    </Link>
  );
};

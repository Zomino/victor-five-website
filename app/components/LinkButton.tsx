"use client";

import { Button, type ButtonProps } from "@mantine/core";
import Link from "next/link";

type LinkButtonProps = Omit<ButtonProps, "component"> & {
  href: string;
};

export default function LinkButton({ href, ...props }: LinkButtonProps) {
  return <Button component={Link} href={href} {...props} />;
}

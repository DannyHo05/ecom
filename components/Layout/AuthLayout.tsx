import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { LayoutProps } from "@/models/common";
import { Auth } from "../common/auth";
export const AuthLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <Auth>
      {children}
    </Auth>
  );
};


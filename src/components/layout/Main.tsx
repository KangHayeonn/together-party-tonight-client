"use client";

import React from "react";
import { MainWrapper } from "@/styles/components/layout/Main";

export default function Main({ children }: { children: React.ReactNode }) {
  return <MainWrapper>{children}</MainWrapper>;
}

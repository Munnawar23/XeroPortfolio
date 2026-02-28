"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useSmoothScroll();

  return <>{children}</>;
};

export default SmoothScroll;

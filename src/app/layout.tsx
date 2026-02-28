import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

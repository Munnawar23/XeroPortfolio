import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/common/CustomCursor";
import SmoothScroll from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
};

export default RootLayout;

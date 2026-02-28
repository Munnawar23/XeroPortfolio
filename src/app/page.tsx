"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SplashScreenPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useGSAP(
    () => {
      // Create a dummy object for GSAP to animate from 0 to 100
      const counter = { value: 0 };
      
      const tl = gsap.timeline({
        onComplete: () => {
          // Navigate to /home exactly when the splash animation is completely finished
          router.push("/home");
        }
      });
      
      // Animate the loader value
      tl.to(counter, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          setProgress(Math.round(counter.value));
        },
      });

      // Animate the container sliding up
      tl.to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        delay: 0.2,
      });

    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black text-white"
    >
      <div 
        ref={counterRef} 
        className="text-8xl font-bold tracking-tighter"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {progress}%
      </div>
    </div>
  );
}

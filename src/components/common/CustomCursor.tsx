"use client";

import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const isVisible = useRef(false);

  const animate = useCallback(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    // Smooth trailing for outline
    const ease = 0.15;
    outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * ease;
    outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * ease;

    // Apply positions directly via style
    dot.style.left = `${mousePos.current.x}px`;
    dot.style.top = `${mousePos.current.y}px`;

    outline.style.left = `${outlinePos.current.x}px`;
    outline.style.top = `${outlinePos.current.y}px`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        dot.style.opacity = "1";
        outline.style.opacity = "1";
      }
    };

    const onMouseLeaveWindow = () => {
      isVisible.current = false;
      dot.style.opacity = "0";
      outline.style.opacity = "0";
    };

    const onMouseEnterWindow = () => {
      isVisible.current = true;
      dot.style.opacity = "1";
      outline.style.opacity = "1";
    };

    // Hover detection for interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label, .hover-target')) {
        document.body.classList.add("cursor-hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select, label, .hover-target')) {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId.current);
      document.body.classList.remove("cursor-hover");
    };
  }, [animate]);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />
      <div
        ref={outlineRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: "1.5px solid #fff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition:
            "width 0.35s cubic-bezier(0.23,1,0.32,1), height 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease, background-color 0.3s ease, border 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;

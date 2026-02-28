"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/home", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
    { name: "About", path: "/about", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
    { name: "Projects", path: "/projects", img: "https://images.unsplash.com/photo-1541888050186-353ad658dff8?w=800&q=80" },
    { name: "Studio", path: "/studio", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" },
    { name: "Contact us", path: "/contact", img: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80" },
  ];

  useGSAP(
    () => {
      if (isMenuOpen) {
        const tl = gsap.timeline();

        // Slide the menu in
        tl.to(containerRef.current, {
          left: 0,
          duration: 0.8,
          ease: "expo.inOut",
        });

        // Stagger in the menu items
        tl.fromTo(
          menuItemsRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=0.4"
        );

        // Fade in socials
        tl.fromTo(
          socialsRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "expo.out",
          },
          "-=0.6"
        );
      } else {
        // Slide menu out
        gsap.to(containerRef.current, {
          left: "-100%",
          duration: 0.6,
          ease: "expo.inOut",
        });
      }
    },
    { dependencies: [isMenuOpen] }
  );

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Delay navigation slightly so the menu closes first
    setTimeout(() => {
      router.push(path);
    }, 600);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-4 md:py-8 md:px-12 z-50 bg-transparent mix-blend-difference text-white">
        <Link href="/" className="text-2xl font-black font-heading tracking-tighter">
          XERO.
        </Link>
        <div className="flex gap-10 text-xs font-black uppercase tracking-widest flex-col justify-center">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group uppercase cursor-pointer focus:outline-none flex items-center justify-center p-2"
            aria-label="Open Menu"
          >
            <FiMenu 
              size={32} 
              className="transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-180 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
            />
          </button>
        </div>
      </nav>

      {/* Navigation Overlay Menu */}
      <div
        ref={containerRef}
        className="fixed top-0 -left-full w-full h-screen z-100 overflow-hidden flex flex-col justify-center"
        style={{ backgroundColor: "var(--color-primary)", color: "var(--color-background)" }}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="group absolute top-0 right-0 p-8 md:p-12 text-sm md:text-base font-bold uppercase tracking-widest cursor-pointer z-10 focus:outline-none flex items-center justify-center"
          style={{ fontFamily: "var(--font-body)" }}
          aria-label="Close Menu"
        >
          <FiX 
            size={40} 
            className="transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-90 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
          />
        </button>

        <div
          ref={socialsRef}
          className="absolute bottom-0 left-0 m-8 md:m-12 flex gap-8 z-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <a href="#" className="uppercase tracking-widest text-xs font-bold cursor-pointer hover:opacity-50 transition-opacity">
            Instagram
          </a>
          <a href="#" className="uppercase tracking-widest text-xs font-bold cursor-pointer hover:opacity-50 transition-opacity">
            Twitter
          </a>
          <a href="#" className="uppercase tracking-widest text-xs font-bold cursor-pointer hover:opacity-50 transition-opacity">
            LinkedIn
          </a>
        </div>

        <nav className="flex flex-col justify-center items-center md:items-start py-10 md:py-20 w-full h-full relative z-5">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative px-[6vw] overflow-visible h-[8vh] md:h-[12vh] flex items-center justify-center md:justify-start w-full"
            >
              <a
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className="relative z-10 text-[10vw] md:text-[6vw] leading-none font-bold tracking-tighter transition-opacity duration-300 group-hover:opacity-0 cursor-pointer italic uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.name}
              </a>

              {/* Hover Image */}
              <div className="absolute left-[8%] md:left-[15%] top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 w-[40vw] md:w-[22vw] aspect-4/3">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>

              {/* Marquee Text Effect */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex items-center">
                <div className="flex whitespace-nowrap opacity-0 translate-x-[60px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className="text-[10vw] md:text-[6vw] leading-none font-bold tracking-tighter opacity-10 italic px-4 uppercase"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.name} —
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

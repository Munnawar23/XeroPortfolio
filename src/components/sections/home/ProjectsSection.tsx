"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, name: "XeroLens", category: "App Development" },
  { id: 2, name: "MyApt", category: "Web Platform" },
  { id: 3, name: "HerLead", category: "Branding" },
  { id: 4, name: "Chizel", category: "Design System" },
  { id: 5, name: "NGO website", category: "Digital Experience" }
]

// Curated high-end Unsplash images for each project
const imageSources = [
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop", // XeroLens (App Dev - Mobile screens)
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // MyApt (Web Platform - Code/Dashboard)
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop", // HerLead (Branding - Clean aesthetics)
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop", // Chizel (Design System - Swatches)
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", // NGO website (Digital Experience - Human/Tech interaction)
]

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const portalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useGSAP(() => {
    if (!containerRef.current) return

    // Entrance animation for titles using fromTo for absolute control
    gsap.fromTo(".service-title", 
      { 
        y: 100, 
        opacity: 0,
        rotateX: -15
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        clearProps: "transform,rotateX,opacity",
        scrollTrigger: {
          trigger: ".services-wrapper",
          start: "top 95%",
          toggleActions: "play none none none"
        }
      }
    )

    // Force a layout refresh
    const timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(timer);
  }, { scope: containerRef })

  // Floating Portal Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useGSAP(() => {
    if (portalRef.current) {
      gsap.to(portalRef.current, {
        x: mousePos.x,
        y: mousePos.y,
        duration: 0.8,
        ease: "power3.out"
      })
    }
  }, [mousePos])

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="min-h-screen w-full bg-background py-40 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Section Title */}
      <div className="absolute top-20 left-4 md:left-12 overflow-hidden z-20">
        <h4 className="font-heading text-primary text-xs uppercase tracking-[0.6em] font-bold italic">Our Projects</h4>
      </div>

      {/* Brand Background Watermark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
        <h2 className="font-heading text-[25vw] font-black text-black/5 uppercase tracking-tighter select-none">Work.</h2>
      </div>

      <div className="services-wrapper w-full max-w-[90vw] flex flex-col items-center relative z-10">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => router.push('/projects')}
            className="group relative w-full h-[12vh] md:h-[18vh] flex items-center justify-center cursor-pointer border-b border-black/10 last:border-b-0"
          >
            <span className="absolute left-0 font-heading text-xs md:text-sm text-black/40 font-bold italic group-hover:text-primary transition-colors duration-500">
              0{index + 1}
            </span>

            <h3 className="service-title font-heading text-[8vw] md:text-[6.5vw] leading-none font-black tracking-tighter uppercase text-black/20 group-hover:text-black transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:italic group-hover:scale-110 z-10">
              {project.name}
            </h3>

            <div className="absolute right-0 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 hidden lg:block">
              <p className="font-heading text-xs text-primary uppercase tracking-[0.4em] font-bold">Discover +</p>
            </div>
          </div>
        ))}
      </div>

      {/* THE FLOATING MEDIA PORTAL */}
      <div 
        ref={portalRef}
        className={`fixed top-0 left-0 w-[300px] h-[400px] md:w-[400px] md:h-[550px] pointer-events-none overflow-hidden z-20 -translate-x-1/2 -translate-y-1/2 shadow-[0_50px_100px_rgba(0,0,0,0.1)] transition-opacity duration-500 origin-center ${hoveredIndex !== null ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
      >
        <div className="w-full h-full relative p-4 bg-background border border-black/10 rounded-xl overflow-hidden">
           <div className="w-full h-full overflow-hidden relative rounded-lg">
            {projects.map((project, index) => (
              <img
                key={project.id}
                src={imageSources[index]}
                alt={project.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
            ))}
           </div>

           <div className="absolute inset-0 z-30 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
           
           <div className="absolute bottom-8 left-8 right-8 z-40">
              <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-white/70 font-bold mb-1">Focus Sector</p>
              <h5 className="font-heading text-lg text-white font-black leading-tight uppercase italic tracking-tighter">
                {hoveredIndex !== null ? projects[hoveredIndex].category : ''}
              </h5>
           </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

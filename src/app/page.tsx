const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-6 pb-20 antialiased font-body">
      <main className="max-w-5xl w-full flex flex-col gap-24">
        
        {/* --- HEADER --- */}
        <nav className="w-full flex justify-between items-center py-12 border-b-2 border-primary">
          <span className="text-3xl font-extrabold font-heading uppercase tracking-tighter">Xero Styleguide</span>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest">
            <span>Portfolio v1.0</span>
          </div>
        </nav>

        {/* --- HERO SECTION (Bold Typography Showcase) --- */}
        <section className="flex flex-col gap-4">
          <p className="font-accent text-sm font-bold uppercase tracking-[0.3em] text-text-tertiary border-l-4 border-primary pl-4">
            Aesthetic Verification
          </p>
          <h1 className="text-8xl md:text-[10rem] font-extrabold font-heading leading-none tracking-tighter uppercase mb-4">
            Bold <br /> Minimal
          </h1>
          <p className="font-body text-2xl md:text-3xl max-w-2xl text-text-secondary leading-tight font-medium">
            Testing the intersection of high-contrast black and premium beige surfaces.
          </p>
        </section>

        {/* --- TYPOGRAPHY SHOWCASE --- */}
        <section className="flex flex-col gap-10">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] border-b border-border pb-4">01. Typography</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase opacity-40">Font Heading (Outfit)</span>
              <p className="font-heading text-5xl font-black uppercase leading-none">The quick brown fox jumps over the lazy dog</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase opacity-40">Font Accent (Syne)</span>
              <p className="font-accent text-5xl font-bold uppercase leading-none">The quick brown fox jumps over the lazy dog</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase opacity-40">Font Body (Instrument Sans - Regular)</span>
              <p className="font-body text-xl leading-relaxed">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase opacity-40">Font Body (Instrument Sans - Bold)</span>
              <p className="font-body text-xl font-bold leading-relaxed">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </section>

        {/* --- COLOR PALETTE SHOWCASE --- */}
        <section className="flex flex-col gap-10">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] border-b border-border pb-4">02. Color Palette</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <div className="h-32 w-full bg-primary border border-black shadow-sm"></div>
              <span className="text-xs font-bold uppercase">Primary (Black)</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-32 w-full bg-background border border-border shadow-sm"></div>
              <span className="text-xs font-bold uppercase">Background (Beige)</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-32 w-full bg-background-secondary border border-border shadow-sm"></div>
              <span className="text-xs font-bold uppercase">BG Secondary</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-32 w-full bg-accent border border-black shadow-sm"></div>
              <span className="text-xs font-bold uppercase">Accent (Dark Charcoal)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-black text-success uppercase font-heading">Success</span>
              <span className="text-[10px] font-mono opacity-50">--color-success</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-black text-warning uppercase font-heading">Warning</span>
              <span className="text-[10px] font-mono opacity-50">--color-warning</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-black text-error uppercase font-heading">Error</span>
              <span className="text-[10px] font-mono opacity-50">--color-error</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-black text-info uppercase font-heading">Information</span>
              <span className="text-[10px] font-mono opacity-50">--color-info</span>
            </div>
          </div>
        </section>

        {/* --- BUTTONS & INTERACTION --- */}
        <section className="flex flex-col gap-10">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] border-b border-border pb-4">03. UI Elements</h2>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary text-background font-black uppercase text-xs tracking-widest px-12 py-6 hover:invert transition-all duration-300">
              Primary Action
            </button>
            <button className="border-2 border-primary text-primary font-black uppercase text-xs tracking-widest px-12 py-6 hover:bg-primary hover:text-background transition-all duration-300">
              Secondary Action
            </button>
            <button className="bg-background-secondary text-text-secondary font-black uppercase text-xs tracking-widest px-12 py-6 hover:bg-border transition-all duration-300">
              Ghost Action
            </button>
          </div>
        </section>

        {/* --- TEXT VARIATIONS --- */}
        <section className="pb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] border-b border-border pb-4 mb-10">04. Text Hierarchy</h2>
          <div className="flex flex-col gap-4">
            <p className="text-text-primary text-3xl font-bold uppercase font-accent">Text Primary (Pitch Black)</p>
            <p className="text-text-secondary text-2xl font-medium">Text Secondary (Deep Gray) - Detailed description text goes here.</p>
            <p className="text-text-tertiary text-xl font-medium">Text Tertiary (Light Gray) - Small captions or metadata text.</p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-8 px-12 z-50 bg-transparent mix-blend-difference">
      <Link href="/" className="text-2xl font-black font-heading tracking-tighter text-white">XERO.</Link>
      <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-white">
        <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
        <Link href="/projects" className="hover:opacity-50 transition-opacity">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;

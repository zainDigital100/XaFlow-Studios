export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold font-mono tracking-tighter">
          FILMIFY<span className="text-brand">.</span>
        </div>
        
        <div className="flex gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        
        <div className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} Filmify Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
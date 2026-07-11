import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import xaflowLogo from "@/assets/xaflow-logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Work",     href: "/work" },
    { name: "Pricing",  href: "/pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5" : ""
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src={xaflowLogo} alt="XaFlow Studios logo" className="w-9 h-9 rounded-md object-cover" />
          <span className="text-xl font-bold font-mono tracking-tighter">XaFlow<span className="text-brand">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location === link.href ? "text-brand" : "text-white/70 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className={buttonVariants({ variant: "brand" })}>
            Book a Call
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium",
                  location === link.href ? "text-brand" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "brand" }), "w-full mt-4")}
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

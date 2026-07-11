import Layout from "@/components/Layout";
import Services from "@/components/sections/Services";
import { FadeIn } from "@/components/animations/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ServicesPage() {
  return (
    <Layout>
      {/* Page hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute inset-0 bg-background/60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-xs font-mono text-brand mb-4 tracking-widest uppercase">What we offer</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              One focus:<br />
              <span className="text-brand">web development.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We don't spread thin across branding or mobile. We build websites and web apps — end to end — with senior engineers only.
            </p>
          </FadeIn>
        </div>
      </section>

      <Services />

      {/* CTA */}
      <section className="py-24 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8">Let's talk about your project and find the right package.</p>
          <Link href="/contact" className={cn(buttonVariants({ variant: "brand", size: "lg" }), "gap-2")}>
            Book a Strategy Call <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </section>
    </Layout>
  );
}

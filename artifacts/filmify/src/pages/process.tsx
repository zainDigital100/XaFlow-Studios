import Layout from "@/components/Layout";
import Process from "@/components/sections/Process";
import { FadeIn } from "@/components/animations/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ProcessPage() {
  return (
    <Layout>
      {/* Page hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute inset-0 bg-background/60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-xs font-mono text-brand mb-4 tracking-widest uppercase">How we work</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              How we <span className="text-brand">ship.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A transparent, five-phase process built for clarity, speed, and zero surprises — from discovery to ongoing support.
            </p>
          </FadeIn>
        </div>
      </section>

      <Process />

      {/* CTA */}
      <section className="py-24 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to see it in action?</h2>
          <p className="text-white/60 mb-8">We'll walk you through the process for your specific project.</p>
          <Link href="/contact" className={cn(buttonVariants({ variant: "brand", size: "lg" }), "gap-2")}>
            Book a Strategy Call <ArrowRight size={18} />
          </Link>
        </FadeIn>
      </section>
    </Layout>
  );
}

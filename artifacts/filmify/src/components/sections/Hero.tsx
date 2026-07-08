import { FadeIn } from "@/components/animations/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid z-0" />
      <div className="absolute inset-0 bg-background/60 z-0" />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand mb-8">
            <Code2 size={14} />
            <span>Senior Engineering Studio</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl mb-8 leading-[1.1]">
            We don't build templates.<br />
            We engineer software<br />
            <span className="text-brand">that drives revenue.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12">
            A technical partner for SMBs burned by cheap freelancers and slow agencies. We ship production-ready web apps and high-performance marketing sites with precision.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "brand", size: "lg" }), "w-full sm:w-auto gap-2")}
          >
            Book a Strategy Call <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto border-white/10 text-white hover:bg-white/5",
            )}
          >
            View our Work
          </a>
        </FadeIn>
      </div>
      
      {/* Abstract glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
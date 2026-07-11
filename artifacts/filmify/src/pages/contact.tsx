import Layout from "@/components/Layout";
import Contact from "@/components/sections/Contact";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <Layout>
      {/* Page hero */}
      <section className="relative pt-40 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute inset-0 bg-background/60 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-xs font-mono text-brand mb-4 tracking-widest uppercase">Get in touch</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let's build something <span className="text-brand">exceptional.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tell us about your project. We usually respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <Contact />
    </Layout>
  );
}

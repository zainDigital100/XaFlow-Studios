import { FadeIn } from "@/components/animations/FadeIn";
import { Layout, Terminal, ShoppingCart, Activity } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "High-Performance Design",
    description: "Bespoke marketing sites engineered for speed, conversion, and brand authority. No WordPress templates.",
  },
  {
    icon: Terminal,
    title: "Custom Web Applications",
    description: "Complex portals, dashboards, and SaaS products built on modern, scalable React architectures.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Engineering",
    description: "Custom storefronts that load instantly and convert flawlessly, integrating headless APIs.",
  },
  {
    icon: Activity,
    title: "Technical SEO & Maintenance",
    description: "Ongoing optimization, infrastructure upgrades, and monitoring to keep you ahead of competitors.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise without the <span className="text-indigo-400">agency bloat.</span></h2>
            <p className="text-white/60 text-lg">We focus strictly on what we are world-class at: building fast, scalable, and beautiful software for businesses that care about quality.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-transform duration-300">
                  <service.icon className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
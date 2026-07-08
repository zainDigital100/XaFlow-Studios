import { FadeIn } from "@/components/animations/FadeIn";
import { Layout, Terminal, ShoppingCart } from "lucide-react";

const packages = [
  {
    icon: Layout,
    title: "Business Websites",
    description: "Marketing sites, portfolios, and landing pages engineered for speed, conversion, and brand authority. No WordPress templates.",
  },
  {
    icon: Terminal,
    title: "Web Applications",
    description: "Dashboards, internal tools, and SaaS-style products built on modern, scalable React architectures.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Custom storefronts that load instantly and convert flawlessly, delivered as part of the same web development process.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">One focus: <span className="text-brand">web development.</span></h2>
            <p className="text-white/60 text-lg">We don't spread thin across branding, marketing, or mobile. We build websites and web apps — end to end — packaged to match the scope of your project.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand/30 hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/20 transition-transform duration-300">
                  <pkg.icon className="text-brand" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>
                <p className="text-white/60 leading-relaxed">{pkg.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
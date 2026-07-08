import { FadeIn } from "@/components/animations/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter Site",
    price: "starting at $5k",
    desc: "High-performance marketing presence for new businesses.",
    features: ["Custom UI/UX Design", "React/Vite Architecture", "CMS Integration", "Technical SEO Setup", "1 Month Support"],
    popular: false
  },
  {
    name: "Growth App",
    price: "starting at $15k",
    desc: "Complex web applications and custom dashboards.",
    features: ["Everything in Starter", "Authentication & Users", "Database Architecture", "3rd-Party API Integrations", "Advanced Analytics"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    desc: "For mature organizations needing scale and refactoring.",
    features: ["Legacy Code Migration", "Custom Infrastructure", "SLA & 24/7 Support", "Dedicated Engineering Team", "Security Auditing"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent <span className="text-indigo-400">pricing.</span></h2>
          <p className="text-white/60 text-lg">Invest in software that pays for itself. No hidden fees.</p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`relative p-8 rounded-2xl border ${tier.popular ? "border-indigo-500 shadow-2xl shadow-indigo-500/10 bg-white/[0.03]" : "border-white/10 bg-white/[0.01]"} h-full flex flex-col`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-white/80 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold font-mono mb-4 text-white">{tier.price}</div>
                <p className="text-white/50 text-sm mb-8">{tier.desc}</p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <Check size={16} className="text-pink-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: tier.popular ? "gradient" : "outline" }),
                    "w-full",
                  )}
                >
                  {tier.popular ? "Get Started" : "Request Quote"}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
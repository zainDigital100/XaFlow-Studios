import { FadeIn } from "@/components/animations/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    priceLabel: "PKR 30,000",
    usdLabel: "~$2,000 USD",
    desc: "For simple business or marketing websites.",
    features: [
      "Custom UI/UX design",
      "Up to 5 pages",
      "Mobile-responsive build",
      "Basic technical SEO setup",
      "1 month of post-launch support",
    ],
    popular: false,
  },
  {
    name: "Complex / Custom",
    priceLabel: "PKR 70,000",
    usdLabel: "~$7,000 USD",
    desc: "For web applications, e-commerce, or multi-feature builds.",
    features: [
      "Everything in Starter",
      "Web application or e-commerce build",
      "Authentication & user accounts",
      "Database architecture",
      "3rd-party API integrations",
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent <span className="text-brand">pricing.</span></h2>
          <p className="text-white/60 text-lg">Invest in software that pays for itself. No hidden fees.</p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tiers.map((tier, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`relative p-8 rounded-2xl border ${tier.popular ? "border-brand shadow-2xl shadow-brand/10 bg-white/[0.03]" : "border-white/10 bg-white/[0.01]"} h-full flex flex-col`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-white/80 mb-2">{tier.name}</h3>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">{tier.priceLabel}</span>
                </div>
                <div className="text-sm text-white/50 font-mono mb-4">{tier.usdLabel}</div>
                <p className="text-white/50 text-sm mb-8">{tier.desc}</p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <Check size={16} className="text-brand mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={cn(buttonVariants({ variant: "brand" }), "w-full")}
                >
                  {tier.popular ? "Get Started" : "Book a Call"}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
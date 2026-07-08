import { FadeIn } from "@/components/animations/FadeIn";
import { ShieldCheck, Zap, Coins, Users } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Senior Talent Only",
    desc: "No juniors learning on your dime. You work directly with the principal engineers building your product."
  },
  {
    icon: Coins,
    title: "Transparent Pricing",
    desc: "Clear upfront quotes. No mysterious scope creep or surprise invoices halfway through the project."
  },
  {
    icon: Zap,
    title: "Blazing Fast Execution",
    desc: "We use modern stacks and highly refined internal tooling to ship production code in weeks, not months."
  },
  {
    icon: ShieldCheck,
    title: "Post-Launch Partnership",
    desc: "We don't hand off and disappear. We offer ongoing retainers to iterate, scale, and maintain your software."
  }
];

export default function Differentiators() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01]" aria-labelledby="differentiators-heading">
      <div className="container mx-auto px-6">
        <h2 id="differentiators-heading" className="sr-only">Why teams choose Filmify</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <item.icon className="text-brand mb-6" size={32} />
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
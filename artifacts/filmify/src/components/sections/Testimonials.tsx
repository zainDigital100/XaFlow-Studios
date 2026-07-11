import { FadeIn } from "@/components/animations/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "XaFlow Studios completely rescued our web app rebuild. We had burned 6 months with a cheap offshore team. XaFlow stepped in, audited the mess, and shipped a flawless V2 in 8 weeks.",
    author: "Sarah Jenkins",
    role: "Founder, Quantify"
  },
  {
    quote: "The attention to detail is insane. They don't just write code; they act as strategic partners advising on UX and architecture. Best agency decision we've made.",
    author: "Marcus Thorne",
    role: "CTO, Nexus Logistics"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white/[0.02]" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <h2 id="testimonials-heading" className="sr-only">What clients say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-10 rounded-2xl border border-white/5 bg-background relative group hover:border-white/10 transition-colors">
                <Quote className="absolute top-6 right-6 text-white/5" size={64} />
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 relative z-10 font-medium">"{test.quote}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand p-0.5">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-sm font-bold">
                      {test.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{test.author}</div>
                    <div className="text-sm text-white/50">{test.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
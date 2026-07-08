import { FadeIn } from "@/components/animations/FadeIn";

const steps = [
  { id: "01", title: "Discover", desc: "Deep dive into your business logic, technical audit, and architecture planning." },
  { id: "02", title: "Design", desc: "UX/UI wireframing and high-fidelity mockups emphasizing conversion." },
  { id: "03", title: "Build", desc: "Clean, test-driven code execution with weekly staging reviews." },
  { id: "04", title: "Launch", desc: "Zero-downtime deployment, SEO migration, and performance testing." },
  { id: "05", title: "Support", desc: "Ongoing feature iteration, scaling, and technical partnership." }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How we <span className="text-pink-400">ship.</span></h2>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-pink-500/0" />
          
          {steps.map((step, idx) => (
            <FadeIn key={step.id} delay={idx * 0.1} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:block w-5/12" />
                
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-background border-2 border-indigo-500 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                </div>
                
                <div className="w-full pl-12 md:pl-0 md:w-5/12 bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                  <div className="text-sm font-mono text-indigo-400 mb-2">Phase {step.id}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
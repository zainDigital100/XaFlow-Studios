import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discover", desc: "Deep dive into your business logic, technical audit, and architecture planning." },
  { id: "02", title: "Design", desc: "UX/UI wireframing and high-fidelity mockups emphasizing conversion." },
  { id: "03", title: "Build", desc: "Clean, test-driven code execution with weekly staging reviews." },
  { id: "04", title: "Launch", desc: "Zero-downtime deployment, migration, and performance testing." },
  { id: "05", title: "Support", desc: "Ongoing feature iteration, scaling, and technical partnership." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          How we <span className="text-brand">ship.</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex gap-6"
            >
              {/* Marker column: fixed width, vertical line + dot, never overlaps card content */}
              <div className="flex flex-col items-center w-8 shrink-0">
                <div className="w-8 h-8 rounded-full bg-background border-2 border-brand flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border" aria-hidden="true" />
                )}
              </div>

              {/* Card column: fixed width, consistent padding */}
              <div className="flex-1 pb-12">
                <div className="w-full bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-brand/20 transition-colors">
                  <div className="text-sm font-mono text-brand mb-2">Phase {step.id}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
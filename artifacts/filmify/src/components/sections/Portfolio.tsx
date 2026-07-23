import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
  title: "Emberr Jewelery",
  description: "At ember, we believe that jewellery transcends mere ornamentation—it embodies your most precious moments, your unique essence, and your timeless story.",
  image: "/projects/restaurant.webp",
  tags: ["React", "Tailwind", "Vite"],
  liveUrl: "https://emberr.netlify.app/",
},
  {
    title: "Aura Boutique",
    category: "E-Commerce Website",
    metric: "+120% checkout completion",
    desc: "Headless storefront emphasizing sub-second load times and premium aesthetics.",
  },
  {
    title: "Quantify SaaS",
    category: "Web Application",
    metric: "60% reduction in load time",
    desc: "Complete re-architecture of their marketing website and internal dashboard.",
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Recent <span className="text-brand">Work</span></h2>
          <p className="text-white/60 text-lg mb-16 max-w-2xl">We don't just build sites; we build business assets. Here are a few examples of how we've helped companies scale.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 h-[400px] flex flex-col justify-end p-8 hover:border-brand/30 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
                
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-mono text-brand mb-3">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="inline-flex px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/90 backdrop-blur-md">
                    {project.metric}
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

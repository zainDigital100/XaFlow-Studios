import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import Differentiators from "@/components/sections/Differentiators";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Differentiators />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

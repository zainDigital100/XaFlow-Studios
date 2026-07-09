import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import showcaseHero from "@/assets/showcase-hero.png";

export default function ShowcaseScroll() {
  return (
    <section className="relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Built to look this good{" "}
              <br />
              <span className="text-brand">on every screen.</span>
            </h2>
            <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
              A glimpse of the production-grade dashboards and storefronts we
              ship for our clients.
            </p>
          </>
        }
      >
        <img
          src={showcaseHero}
          alt="Product dashboard preview"
          height={720}
          width={1400}
          loading="lazy"
          decoding="async"
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

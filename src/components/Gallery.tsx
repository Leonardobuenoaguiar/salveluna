import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  {
    src: "/images/luna-1.png",
    alt: "Luna descansando tranquila",
    caption: "Dias de paz",
  },
  {
    src: "/images/luna-2.png",
    alt: "Luna dormindo em uma almofada",
    caption: "Sono da recuperação",
  },
  {
    src: "/images/luna-3.png",
    alt: "Luna enrolada em um cobertor rosa",
    caption: "Manto de carinho",
  },
  {
    src: "/images/luna-4.png",
    alt: "Luna olhando com curiosidade",
    caption: "Olhos de esperança",
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="galeria"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#d2b1ad]/60 bg-[#f0e6e0]/80 px-3 py-1 text-xs font-semibold text-[#8a6960]">
            🐾 Galeria da Luna
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Momentos da <span className="text-gradient">Luna</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            Pequenos registros de uma gatinha que é puro amor e que está
            contando com a nossa ajuda.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: "easeOut" }}
              className="glass group relative overflow-hidden rounded-2xl p-1.5 sm:p-2"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="absolute inset-x-2 bottom-2 rounded-xl bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-700 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 sm:bottom-3 sm:text-xs">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CategoryReveal({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        ".category-card"
      );

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.3,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".category-image",
        {
          scale: 1.2,
        },
        {
          scale: 1,
          duration: 1.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    {
      scope: container,
    }
  );

  return <div ref={container}>{children}</div>;
}

export default CategoryReveal;
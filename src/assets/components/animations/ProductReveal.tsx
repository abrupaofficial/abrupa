import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProductReveal({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const products = gsap.utils.toArray<HTMLElement>(
        ".product-card"
      );

      gsap.fromTo(
        products,
        {
          opacity: 0,
          x: -120,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",

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

export default ProductReveal;
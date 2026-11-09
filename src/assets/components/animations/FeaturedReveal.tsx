import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturedReveal({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const image = container.current.querySelector(
        ".featured-image"
      );

      const content = container.current.querySelector(
        ".featured-content"
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        image,
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
        }
      )
        .from(
          content,
          {
            opacity: 0,
            x: 60,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8"
        );
    },
    {
      scope: container,
    }
  );

  return <div ref={container}>{children}</div>;
}

export default FeaturedReveal;
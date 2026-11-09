import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturedBannerReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const image = container.current.querySelector(".banner-image");
      const content = container.current.querySelector(".banner-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Image slides from LEFT
      tl.fromTo(
        image,
        {
          x: -150,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
        }
      )

        // Text slides from RIGHT
        .fromTo(
          content,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8"
        )

        // Image slowly zooms
        .to(
          image,
          {
            scale: 1.03,
            duration: 4,
            ease: "power1.out",
          },
          "-=1"
        );
    },
    {
      scope: container,
    }
  );

  return <div ref={container}>{children}</div>;
}

export default FeaturedBannerReveal;
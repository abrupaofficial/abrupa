import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  children: React.ReactNode;
}

function ImageReveal({ children }: ImageRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, {
    scope: container,
  });

  return (
    <div ref={container} className="overflow-hidden">
      {children}
    </div>
  );
}

export default ImageReveal;
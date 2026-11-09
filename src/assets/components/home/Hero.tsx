import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        /* ================================
           INITIAL IMAGE REVEAL
        ================================= */

        tl.fromTo(
          ".hero-image",
          {
            scale: 1.25,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
          }
        );

        /* ================================
           DARK OVERLAY
        ================================= */

        tl.fromTo(
          ".hero-overlay",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1.2,
          },
          "-=1.5"
        );

        /* ================================
           TOP LABEL
        ================================= */

        tl.fromTo(
          ".hero-subtitle",
          {
            y: 25,
            opacity: 0,
            letterSpacing: "0.6em",
          },
          {
            y: 0,
            opacity: 1,
            letterSpacing: "0.35em",
            duration: 0.8,
          },
          "-=0.8"
        );

        /* ================================
           MAIN TITLE REVEAL
        ================================= */

        tl.fromTo(
          ".hero-title-line",
          {
            yPercent: 120,
          },
          {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.4"
        );

        /* ================================
           DESCRIPTION
        ================================= */

        tl.fromTo(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.7"
        );

        /* ================================
           BUTTONS
        ================================= */

        tl.fromTo(
          ".hero-button",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.5"
        );

        /* ================================
           BOTTOM BRANDING
        ================================= */

        tl.fromTo(
          ".hero-bottom",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
          },
          "-=0.3"
        );

        /* ================================
           SCROLL INDICATOR
        ================================= */

        gsap.to(".scroll-line", {
          scaleX: 0.3,
          transformOrigin: "left center",
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

        /* ================================
           SLOW IMAGE MOVEMENT
        ================================= */

        gsap.to(".hero-image", {
          scale: 1.08,
          duration: 12,
          ease: "none",
          delay: 2,
        });

      }, container);

      return () => ctx.revert();
    },
    {
      scope: container,
    }
  );

  return (
    <section
      ref={container}
      className="relative h-[calc(100vh-112px)] min-h-[600px] overflow-hidden bg-[#2B1B14]"
    >

      {/* ================= BACKGROUND IMAGE ================= */}

      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=95"
        alt="ABRUPA Fashion Collection"
        className="hero-image absolute inset-0 h-full w-full object-cover"
      />


      {/* ================= OVERLAY ================= */}

      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">

        <div className="max-w-4xl text-white">

          {/* Subtitle */}

          <p className="hero-subtitle mb-6 text-[10px] font-medium tracking-[0.35em] md:text-xs">
            ABRUPA • NEW COLLECTION
          </p>


          {/* Main Heading */}

          <div className="overflow-hidden">

            <h1 className="hero-title-line text-5xl font-light leading-[0.9] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              DEFINE YOUR
            </h1>

          </div>


          <div className="overflow-hidden">

            <h1 className="hero-title-line text-5xl font-light leading-[0.9] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">

              OWN

              <span className="ml-3 italic font-normal">
                STYLE.
              </span>

            </h1>

          </div>


          {/* Description */}

          <p className="hero-description mt-8 max-w-md text-sm leading-7 text-white/75 md:text-base md:leading-8">

            Discover fashion made for every mood, every moment,
            and every version of you.

          </p>


          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="hero-button group relative overflow-hidden bg-[#EFE5D0] px-8 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#2B1B14]">

              <span className="relative z-10">
                SHOP WOMEN
              </span>

              <span className="absolute inset-0 translate-y-full bg-[#C9A227] transition duration-500 group-hover:translate-y-0" />

            </button>


            <button className="hero-button border border-white/70 px-8 py-4 text-[10px] font-semibold tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-[#2B1B14]">

              SHOP MEN

            </button>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM INFO ================= */}

      <div className="hero-bottom absolute bottom-7 left-6 z-10 text-[10px] tracking-[0.3em] text-white/60 md:left-10">

        ABRUPA.SHOP

      </div>


      {/* ================= SCROLL INDICATOR ================= */}

      <div className="hero-bottom absolute bottom-7 right-6 z-10 hidden items-center gap-4 text-[10px] tracking-[0.2em] text-white/60 md:flex md:right-10">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="h-px w-14 overflow-hidden bg-white/30">

          <div className="scroll-line h-full w-full bg-white" />

        </div>

      </div>


      {/* ================= DECORATIVE LINE ================= */}

      <div className="absolute bottom-0 left-0 z-10 h-px w-full bg-white/20" />

    </section>
  );
} 

export default Hero;
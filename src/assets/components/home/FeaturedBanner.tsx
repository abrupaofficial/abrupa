 import FeaturedBannerReveal from "../animations/FeaturedBannerReveal";

function FeaturedBanner() {
  return (
    <section className="overflow-hidden bg-[#EFE5D0] px-5 py-20 md:px-10 md:py-32">
      
      <FeaturedBannerReveal>
        <div className="mx-auto max-w-7xl">

          {/* Banner */}
          <div className="relative min-h-[600px] overflow-hidden md:min-h-[750px]">

            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=90"
              alt="ABRUPA Fashion Collection"
              className="banner-image absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Content */}
            <div className="banner-content absolute inset-0 flex items-end p-8 md:p-16">

              <div className="max-w-xl text-white">

                {/* Small Title */}
                <p className="mb-5 text-xs tracking-[0.35em] text-white/80">
                  THE NEW COLLECTION
                </p>

                {/* Main Title */}
                <h2 className="text-5xl font-light leading-[1] md:text-8xl">
                  Everyday Style.
                  <br />

                  <span className="italic">
                    Elevated.
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-7 max-w-md text-sm leading-7 text-white/80 md:text-base">
                  Discover fresh styles designed for every moment,
                  every mood, and every version of you.
                </p>

                {/* Button */}
                <button className="mt-9 border border-white px-7 py-4 text-xs tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-[#2B1B14]">
                  SHOP COLLECTION →
                </button>

              </div>

            </div>

          </div>

        </div>
      </FeaturedBannerReveal>

    </section>
  );
}

export default FeaturedBanner;
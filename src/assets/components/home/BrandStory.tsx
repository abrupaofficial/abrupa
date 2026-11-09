import ImageReveal from "../animations/ImageReveal";

function BrandStory() {
  return (
    <section className="overflow-hidden bg-[#F5EFE3] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-20">

        {/* Image */}
        <ImageReveal>
          <div className="h-[500px] overflow-hidden md:h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90"
              alt="About ABRUPA"
              className="h-full w-full object-cover transition duration-[1500ms] hover:scale-105"
            />
          </div>
        </ImageReveal>

        {/* Content */}
        <ImageReveal>
          <div className="max-w-xl md:px-5">
            <p className="mb-6 text-xs font-medium tracking-[0.35em] text-[#8A7968]">
              OUR STORY
            </p>

            <h2 className="text-5xl font-light leading-[1.05] text-[#2B1B14] md:text-7xl">
              More Than
              <br />
              <span className="italic">Fashion.</span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-[#6B6258] md:text-base">
              ABRUPA was created with a simple idea — style should feel
              personal, comfortable, and effortless.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#6B6258] md:text-base">
              From everyday fashion to carefully selected lifestyle
              essentials, we bring together pieces that help you express
              your own style.
            </p>

            <button className="mt-10 border-b border-[#2B1B14] pb-3 text-xs font-medium tracking-[0.2em] text-[#2B1B14] transition hover:opacity-60">
              DISCOVER ABRUPA →
            </button>
          </div>
        </ImageReveal>

      </div>
    </section>
  );
}

export default BrandStory;
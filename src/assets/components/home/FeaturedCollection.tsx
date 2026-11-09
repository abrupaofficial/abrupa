import ScrollReveal from "../animations/ScrollReveal";

function FeaturedCollection() {
  return (
    <section className="bg-[#2B1B14] px-5 py-20 md:px-10 md:py-32">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl overflow-hidden md:grid md:grid-cols-2">

          {/* Image */}
          <div className="h-[500px] md:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90"
              alt="ABRUPA Collection"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex min-h-[500px] flex-col justify-center bg-[#EFE5D0] p-8 md:min-h-[700px] md:p-16">

            <p className="mb-5 text-xs tracking-[0.3em] text-[#8A7968]">
              SIGNATURE COLLECTION
            </p>

            <h2 className="text-5xl font-light leading-tight text-[#2B1B14] md:text-7xl">
              Style That
              <br />
              Feels Like
              <br />
              <span className="italic">You.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#6B6258]">
              Discover fashion designed for comfort, confidence,
              and effortless everyday style.
            </p>

            <button className="mt-10 w-fit border-b border-[#2B1B14] pb-2 text-xs tracking-[0.2em] text-[#2B1B14]">
              EXPLORE COLLECTION →
            </button>

          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

export default FeaturedCollection;
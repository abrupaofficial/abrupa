import ScrollReveal from "../animations/ScrollReveal";

function Newsletter() {
  return (
    <section className="overflow-hidden bg-[#EFE5D0] px-5 py-24 md:px-10 md:py-36">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Small Title */}
          <p className="mb-5 text-xs font-medium tracking-[0.35em] text-[#8A7968]">
            STAY CONNECTED
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl font-light leading-tight text-[#2B1B14] md:text-7xl">
            JOIN THE
            <br />
            <span className="italic">ABRUPA WORLD.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#6B6258] md:text-base">
            Be the first to discover new arrivals, exclusive offers,
            and everything happening at ABRUPA.
          </p>

          {/* Email Form */}
          <form className="mx-auto mt-12 flex max-w-2xl flex-col gap-3 sm:flex-row">
            
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className="h-14 flex-1 border border-[#2B1B14]/30 bg-transparent px-5 text-xs tracking-[0.15em] text-[#2B1B14] outline-none transition placeholder:text-[#6B6258] focus:border-[#2B1B14]"
            />

            <button
              type="submit"
              className="h-14 bg-[#2B1B14] px-8 text-xs font-medium tracking-[0.2em] text-[#EFE5D0] transition duration-300 hover:bg-[#C9A227] hover:text-[#2B1B14]"
            >
              JOIN →
            </button>

          </form>

          {/* Privacy Text */}
          <p className="mt-5 text-[10px] leading-5 text-[#8A7968]">
            By subscribing, you agree to receive updates and offers from ABRUPA.
          </p>

        </div>
      </ScrollReveal>
    </section>
  );
}

export default Newsletter;
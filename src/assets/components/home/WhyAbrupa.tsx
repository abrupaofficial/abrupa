import ScrollReveal from "../animations/ScrollReveal";

const features = [
  {
    number: "01",
    title: "PREMIUM QUALITY",
    description:
      "Carefully selected products designed to bring quality and style to your everyday life.",
  },
  {
    number: "02",
    title: "SECURE PAYMENT",
    description:
      "Shop with confidence using safe and secure payment options.",
  },
  {
    number: "03",
    title: "FAST DELIVERY",
    description:
      "Your favorite products delivered to your doorstep with care.",
  },
  {
    number: "04",
    title: "EASY RETURNS",
    description:
      "A simple and convenient shopping experience from order to delivery.",
  },
];

function WhyAbrupa() {
  return (
    <section className="bg-[#2B1B14] px-5 py-24 md:px-10 md:py-36">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <ScrollReveal>
          <div className="mb-16 text-center md:mb-24">
            
            <p className="mb-5 text-xs font-medium tracking-[0.35em] text-[#C9A227]">
              THE ABRUPA EXPERIENCE
            </p>

            <h2 className="text-5xl font-light text-[#EFE5D0] md:text-7xl">
              WHY SHOP WITH US
            </h2>

          </div>
        </ScrollReveal>

        {/* Features */}
        <div className="grid border-t border-[#EFE5D0]/20 md:grid-cols-4">
          
          {features.map((feature) => (
            <ScrollReveal key={feature.number}>
              
              <div className="group min-h-[280px] border-b border-[#EFE5D0]/20 p-8 transition duration-500 hover:bg-[#EFE5D0] md:min-h-[350px] md:border-b-0 md:border-r md:p-10">
                
                {/* Number */}
                <span className="text-xs tracking-[0.3em] text-[#C9A227] group-hover:text-[#8A7968]">
                  {feature.number}
                </span>

                {/* Title */}
                <h3 className="mt-16 text-xl font-medium tracking-[0.08em] text-[#EFE5D0] transition group-hover:text-[#2B1B14]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-[#EFE5D0]/60 transition group-hover:text-[#6B6258]">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 text-2xl text-[#C9A227] transition duration-300 group-hover:translate-x-3 group-hover:text-[#2B1B14]">
                  →
                </div>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyAbrupa;
import ScrollReveal from "../animations/ScrollReveal";
import CategoryReveal from "../animations/CategoryReveal";

const categories = [
  {
    title: "WOMEN",
    number: "01",
    subtitle: "Sarees · Kurtis · Everyday Elegance",
    button: "EXPLORE WOMEN",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=90",
    className: "md:col-span-7",
    height: "h-[580px] md:h-[700px]",
  },
  {
    title: "MEN",
    number: "02",
    subtitle: "Shirts · T-Shirts · Denim",
    button: "EXPLORE MEN",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=90",
    className: "md:col-span-5",
    height: "h-[580px] md:h-[700px]",
  },
  {
    title: "LIFESTYLE",
    number: "03",
    subtitle: "Stationery · Everyday Essentials",
    button: "EXPLORE LIFESTYLE",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=90",
    className: "md:col-span-12",
    height: "h-[420px] md:h-[500px]",
  },
];

function Categories() {
  return (
    <section className="overflow-hidden bg-[#EFE5D0] px-5 py-24 md:px-10 md:py-36">
      {/* Heading */}
      <ScrollReveal>
        <div className="mx-auto mb-16 flex max-w-7xl flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          
          <div>
            <p className="mb-5 text-xs font-medium tracking-[0.35em] text-[#8A7968]">
              THE ABRUPA COLLECTION
            </p>

            <h2 className="max-w-2xl text-5xl font-light leading-[0.95] tracking-tight text-[#2B1B14] md:text-7xl">
              FIND YOUR
              <br />
              <span className="italic">EVERYDAY STYLE.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#6B6258] md:text-right">
            Thoughtfully selected fashion and everyday essentials,
            designed for every version of you.
          </p>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <CategoryReveal>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-12 md:gap-7">
          
          {categories.map((category) => (
            <a
              key={category.title}
              href="#"
              className={`category-card group relative block overflow-hidden ${category.className} ${category.height}`}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="category-image absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1512]/80 via-[#1C1512]/20 to-transparent transition duration-700 group-hover:from-[#1C1512]/90" />

              {/* Top Number */}
              <div className="absolute left-6 top-6 flex items-center gap-3 text-white md:left-8 md:top-8">
                <span className="text-xs tracking-[0.25em]">
                  {category.number}
                </span>

                <div className="h-px w-10 bg-white/60" />
              </div>

              {/* Content */}
              <div className="category-content absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
                
                <p className="mb-4 text-[10px] tracking-[0.25em] text-white/70 md:text-xs">
                  {category.subtitle}
                </p>

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  
                  <h3 className="text-4xl font-light tracking-[0.12em] md:text-5xl">
                    {category.title}
                  </h3>

                  {/* Button */}
                  <span className="flex w-fit items-center gap-3 border-b border-white pb-2 text-[10px] tracking-[0.22em] transition-all duration-300 group-hover:gap-6 md:text-xs">
                    {category.button}

                    <span className="text-lg leading-none">
                      →
                    </span>
                  </span>

                </div>
              </div>

            </a>
          ))}

        </div>
      </CategoryReveal>
    </section>
  );
}

export default Categories;
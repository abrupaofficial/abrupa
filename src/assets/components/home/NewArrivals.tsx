import { Heart, ArrowRight } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import ProductReveal from "../animations/ProductReveal";

const products = [
  {
    id: 1,
    name: "Classic Silk Saree",
    category: "WOMEN",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 2,
    name: "Elegant Cotton Kurti",
    category: "WOMEN",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 3,
    name: "Essential Oversized Tee",
    category: "MEN",
    price: "₹699",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 4,
    name: "Premium Casual Shirt",
    category: "MEN",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=90",
  },
];

function NewArrivals() {
  return (
    <section className="overflow-hidden bg-[#F5EFE3] py-24 md:py-36">

      {/* Heading */}
      <div className="px-5 md:px-10">
        <ScrollReveal>
          <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.35em] text-[#8A7968]">
                JUST DROPPED
              </p>

              <h2 className="text-5xl font-light tracking-tight text-[#2B1B14] md:text-7xl">
                NEW ARRIVALS
              </h2>
            </div>

            <button className="group flex w-fit items-center gap-3 border-b border-[#2B1B14] pb-2 text-xs tracking-[0.2em] text-[#2B1B14]">
              VIEW ALL

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>

          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal Products */}
      <ProductReveal>
        <div className="flex gap-5 overflow-x-auto px-5 pb-5 md:gap-7 md:px-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group w-[280px] flex-shrink-0 md:w-[330px]"
            >

              {/* Image */}
              <div className="relative h-[380px] overflow-hidden bg-[#E8DDCC] md:h-[460px]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* New Badge */}
                <span className="absolute left-4 top-4 bg-[#2B1B14] px-3 py-2 text-[9px] tracking-[0.2em] text-[#EFE5D0]">
                  NEW
                </span>

                {/* Wishlist */}
                <button
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-[#EFE5D0]/90 transition hover:bg-[#EFE5D0]"
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <Heart size={18} strokeWidth={1.5} />
                </button>

                {/* Quick Add */}
                <button className="absolute bottom-0 left-0 w-full translate-y-full bg-[#2B1B14] py-4 text-[10px] tracking-[0.25em] text-[#EFE5D0] transition-transform duration-300 group-hover:translate-y-0">
                  QUICK ADD
                </button>

              </div>

              {/* Details */}
              <div className="pt-4">

                <p className="mb-2 text-[10px] tracking-[0.2em] text-[#8A7968]">
                  {product.category}
                </p>

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-sm font-medium text-[#2B1B14] md:text-base">
                    {product.name}
                  </h3>

                  <span className="whitespace-nowrap text-sm text-[#2B1B14]">
                    {product.price}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>
      </ProductReveal>

    </section>
  );
}

export default NewArrivals;
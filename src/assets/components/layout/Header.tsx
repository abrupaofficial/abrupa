import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import brandLogo from "../../images/Brand Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-gray-200 bg-[#EFE5D0]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          <a href="#" className="transition hover:opacity-60">
            WOMEN
          </a>

          <a href="#" className="transition hover:opacity-60">
            MEN
          </a>

          <a href="#" className="transition hover:opacity-60">
            LIFESTYLE
          </a>
        </nav>

        {/* Logo */}
        <img
          src={brandLogo}
          alt="ABRUPA"
          className="absolute left-1/2 h-10 w-48 -translate-x-1/2 object-contain md:h-12"
        />

        {/* Right Icons */}
        <div className="ml-auto flex items-center gap-4 md:gap-5">
          <button
            className="hidden transition hover:opacity-60 sm:block"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            className="hidden transition hover:opacity-60 sm:block"
            aria-label="Account"
          >
            <User size={20} strokeWidth={1.5} />
          </button>

          <button
            className="hidden transition hover:opacity-60 md:block"
            aria-label="Wishlist"
          >
            <Heart size={20} strokeWidth={1.5} />
          </button>

          <button
            className="relative transition hover:opacity-60"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={21} strokeWidth={1.5} />

            {/* Cart Count */}
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] text-white">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white">
          {/* Menu Header */}
          <div className="flex h-20 items-center justify-between border-b border-gray-200 px-5">
            <span className="text-xl font-bold tracking-[0.3em]">ABRUPA</span>

            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-7 px-6 py-10 text-xl font-medium">
            <a href="#" onClick={() => setMenuOpen(false)}>
              WOMEN
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              MEN
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              LIFESTYLE
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              NEW ARRIVALS
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              SALE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

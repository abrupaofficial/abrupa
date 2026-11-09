import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#2B1B14] text-[#EFE5D0]">
      
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">

        {/* Top Section */}
        <div className="grid gap-14 border-b border-[#EFE5D0]/20 pb-16 md:grid-cols-2 md:gap-20 md:pb-20">

          {/* ================= BRAND SECTION ================= */}
          <div>

            {/* Logo / Brand Name */}
            <a
              href="/"
              className="inline-block text-4xl font-light tracking-[0.25em] text-[#EFE5D0] md:text-5xl"
            >
              ABRUPA
            </a>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-7 text-[#EFE5D0]/60">
              Fashion and everyday essentials designed to bring style,
              comfort, and confidence into your life.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-[#EFE5D0]/20 transition duration-300 hover:bg-[#EFE5D0] hover:text-[#2B1B14]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center border border-[#EFE5D0]/20 transition duration-300 hover:bg-[#EFE5D0] hover:text-[#2B1B14]"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="flex h-11 w-11 items-center justify-center border border-[#EFE5D0]/20 transition duration-300 hover:bg-[#EFE5D0] hover:text-[#2B1B14]"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

            </div>

          </div>


          {/* ================= FOOTER LINKS ================= */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">


            {/* SHOP */}
            <div>

              <h3 className="mb-6 text-xs font-medium tracking-[0.25em] text-[#C9A227]">
                SHOP
              </h3>

              <ul className="space-y-4 text-sm text-[#EFE5D0]/60">

                <li>
                  <a
                    href="/women"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Women
                  </a>
                </li>

                <li>
                  <a
                    href="/men"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Men
                  </a>
                </li>

                <li>
                  <a
                    href="/lifestyle"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Lifestyle
                  </a>
                </li>

                <li>
                  <a
                    href="/new-arrivals"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    New Arrivals
                  </a>
                </li>

              </ul>

            </div>


            {/* SUPPORT */}
            <div>

              <h3 className="mb-6 text-xs font-medium tracking-[0.25em] text-[#C9A227]">
                SUPPORT
              </h3>

              <ul className="space-y-4 text-sm text-[#EFE5D0]/60">

                <li>
                  <a
                    href="/contact"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="/shipping"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Shipping & Delivery
                  </a>
                </li>

                <li>
                  <a
                    href="/returns"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Returns & Refunds
                  </a>
                </li>

                <li>
                  <a
                    href="/faq"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    FAQs
                  </a>
                </li>

              </ul>

            </div>


            {/* COMPANY */}
            <div>

              <h3 className="mb-6 text-xs font-medium tracking-[0.25em] text-[#C9A227]">
                COMPANY
              </h3>

              <ul className="space-y-4 text-sm text-[#EFE5D0]/60">

                <li>
                  <a
                    href="/about"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    About ABRUPA
                  </a>
                </li>

                <li>
                  <a
                    href="/privacy"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/terms"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="/careers"
                    className="transition duration-300 hover:text-[#EFE5D0]"
                  >
                    Careers
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>


        {/* ================= LARGE ABRUPA TEXT ================= */}
        <div className="overflow-hidden py-12 md:py-16">

          <h2 className="select-none text-center text-[18vw] font-light leading-none tracking-[-0.04em] text-[#EFE5D0]/10 md:text-[13vw]">
            ABRUPA
          </h2>

        </div>


        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col gap-5 border-t border-[#EFE5D0]/20 pt-8 text-[10px] tracking-[0.15em] text-[#EFE5D0]/50 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p>
            © {currentYear} ABRUPA. ALL RIGHTS RESERVED.
          </p>


          {/* Bottom Links */}
          <div className="flex flex-wrap items-center gap-6">

            <a
              href="/privacy"
              className="transition duration-300 hover:text-[#EFE5D0]"
            >
              PRIVACY
            </a>


            <a
              href="/terms"
              className="transition duration-300 hover:text-[#EFE5D0]"
            >
              TERMS
            </a>


            <a
              href="/contact"
              className="flex items-center gap-2 transition duration-300 hover:text-[#EFE5D0]"
            >
              CONTACT

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs"
              />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
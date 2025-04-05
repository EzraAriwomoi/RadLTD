import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="bg-[#0c2340] text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4" aria-label="Home">
              <img
                src="/logo.png"
                alt="Radiance Star Logo"
                className="h-20 object-contain"
              />
            </Link>
            <h3 className="text-2xl font-bold mb-4">Radiance Star</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Expert legislative consulting services for parliamentary and
              county assembly institutions in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic text-gray-400 space-y-2 text-sm md:text-base">
              <p>Tawakal Building, Mwananchi Road</p>
              <p>Syokimau, Athi River District</p>
              <p>P.O. Box 41842, G.P.O – 00100</p>
              <p>Nairobi, Kenya</p>
              <p className="pt-4">
                Phone:{" "}
                <a
                  href="tel:+254701265414"
                  className="hover:underline"
                  rel="noopener noreferrer"
                >
                  +254 701 265 414
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:radiancestel@gmail.com"
                  className="hover:underline"
                  rel="noopener noreferrer"
                >
                  radiancestel@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">
            Radiance Star Legislative Consult Ltd
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;

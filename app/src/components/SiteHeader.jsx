import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import clsx from "clsx";

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-colors duration-300 shadow-sm",
        scrolled ? "bg-white border-b" : "bg-[#0c2340]"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className={clsx(
            "flex items-center gap-2 text-xl font-bold transition-colors duration-300",
            scrolled ? "text-[#0c2340]" : "text-white"
          )}
        >
          <img src="logo.png" alt="Radiance Logo" className="h-8 w-8" />
          Radiance Star
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={clsx(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-[#0c2340] hover:text-[#0a1c33]"
                  : "text-white hover:text-gray-300"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Button
            asChild
            className={clsx(
              "text-white",
              scrolled
                ? "bg-[#0c2340] hover:bg-[#0a1c33]"
                : "bg-white text-[#0c2340] hover:bg-gray-100"
            )}
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle menu"
              className={clsx(
                "transition-colors border-gray-300",
                scrolled
                  ? "text-[#0c2340] hover:bg-gray-100"
                  : "text-white bg-[#1c3559] hover:bg-[#1c3559]"
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 px-6 pt-10">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Radiance Star Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-[#0c2340]">
                Radiance Star
              </span>
            </div>

            {/* Mobile Nav */}
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  onClick={handleClose}
                  className="text-lg font-semibold text-[#0c2340] hover:text-[#0a1c33] transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Call to Action */}
              <Button
                asChild
                className="w-full bg-[#0c2340] hover:bg-[#0a1c33] text-white text-base font-semibold py-3"
              >
                <Link to="/contact" onClick={handleClose}>
                  Get in Touch
                </Link>
              </Button>
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-10 text-xs text-gray-500 tracking-tight opacity-80">
              © {new Date().getFullYear()} Radiance Star Consult Ltd
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default SiteHeader;

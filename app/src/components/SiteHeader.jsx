import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#0c2340]">
          Radiance Star
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link to="/" className="text-sm font-medium hover:text-[#0c2340] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-[#0c2340] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-[#0c2340] transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-[#0c2340] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Button asChild className="bg-[#0c2340] hover:bg-[#0a1c33] text-white">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
              <Link to="/" className="text-base font-medium hover:text-[#0c2340] transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-base font-medium hover:text-[#0c2340] transition-colors">
                About
              </Link>
              <Link to="/services" className="text-base font-medium hover:text-[#0c2340] transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-base font-medium hover:text-[#0c2340] transition-colors">
                Contact
              </Link>

              <Button asChild className="mt-6 bg-[#0c2340] hover:bg-[#0a1c33] text-white">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default SiteHeader

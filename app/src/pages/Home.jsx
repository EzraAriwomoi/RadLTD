import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Building,
  GraduationCap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0c2340] text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Expert Legislative Consulting Services in Kenya
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Radiance Star Legislative Consult Ltd provides tailored training
              and consulting for Members of Parliament, Parliamentary Staff, and
              County Assembly Members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-transparent border-1 border-white hover:text-white"
              >
                <Link to="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-1 border-white text-white bg-transparent hover:bg-white hover:text-[#0c2340] transition-colors"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-white" />,
                title: "Committee Management",
                desc: "Comprehensive training on roles, responsibilities, and effective facilitation of committee functions.",
              },
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Parliamentary Training",
                desc: "Specialized training for Members of Parliament and their staff to strengthen legislative performance.",
              },
              {
                icon: <Building className="h-6 w-6 text-white" />,
                title: "County Assembly Support",
                desc: "Capacity building and strategic consulting for County Assembly Members and their teams.",
              },
              {
                icon: <GraduationCap className="h-6 w-6 text-white" />,
                title: "Legislative Solutions",
                desc: "Custom solutions to address barriers hindering legislative committees from achieving their goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="bg-[#0c2340] p-3 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Radiance Star</h2>
              <p className="text-gray-700 mb-4">
                Radiance Star Legislative Consult Ltd is a registered Kenyan
                consultancy offering specialized legislative support services.
                Our team comprises experienced trainers who have worked
                extensively with legislative bodies at national and county
                levels.
              </p>
              <p className="text-gray-700 mb-6">
                Our consultants have been recognized and engaged by institutions
                like ESAMI and CPST to provide high-impact training programs
                across the region.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src="training.jpg"
                  alt="Radiance Star training session"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0c2340] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Legislative Capabilities?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Reach out to us today and discover how our seasoned experts can
            support your institution’s legislative objectives.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-transparent border-1 border-white hover:text-white"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Home;

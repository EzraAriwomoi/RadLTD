import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Phone, Mail } from "lucide-react";

function About() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0c2340] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>{" "}
          <p className="text-lg max-w-3xl">
            {" "}
            Radiance Star Legislative Consult Ltd is a premier legislative
            consulting firm in Kenya, dedicated to enhancing the effectiveness
            of legislative bodies.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Company Profile */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Company Profile</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Radiance Star Legislative Consult Ltd trainers have been
                  training Members of Parliament, Parliamentary Staff as well as
                  various County Assembly Members and their staff.
                </p>
                <p>
                  Due to their experience, the trainers have also been
                  identified by ESAMI and CPST and have worked under them as
                  their training consultants.
                </p>
                <p>
                  Our company was incorporated on September 26, 2022, and is
                  registered with the Kenya Revenue Authority with full tax
                  compliance.
                </p>
                <p>
                  Led by Mr. Julius Kamtoi Ariwomoi, our team brings extensive
                  expertise in legislative processes, committee management, and
                  parliamentary procedures.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Company Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-[#0c2340] mt-0.5" />
                      <div>
                        <p className="font-medium">Date of Registration</p>
                        <p className="text-gray-600 text-sm">September 26, 2022</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#0c2340] mt-0.5" />
                      <div>
                        <p className="font-medium">Registered Office</p>
                        <p className="text-gray-600 text-sm">
                          Tawakal Building, Mwananchi Road
                        </p>
                        <p className="text-gray-600 text-sm">
                          Syokimau, Athi River District
                        </p>
                        <p className="text-gray-600 text-sm">Machakos County, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[#0c2340] mt-0.5" />
                      <div>
                        <p className="font-medium">Postal Address</p>
                        <p className="text-gray-600 text-sm">P.O. Box 41842, G.P.O</p>
                        <p className="text-gray-600 text-sm">00100 Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[#0c2340] mt-0.5" />
                      <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-gray-600 text-sm">+254 701 265 414</p>
                        <p className="text-gray-600 text-sm">radiancestel@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src="Julius.png"
                  alt="Julius Kamtoi Ariwomoi"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Julius Kamtoi Ariwomoi
                </h3>
                <p className="text-[#0c2340] font-medium mb-2">
                  Lead Consultant & Director
                </p>
                <p className="text-gray-600 text-sm">
                  With extensive experience in legislative consulting, Julius
                  leads our team of experts in providing top-tier training and
                  consulting services.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src="default_profile.png"
                  alt="Carolyne Chepkorir Ariwomoi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  Carolyne Chepkorir Ariwomoi
                </h3>
                <p className="text-[#0c2340] font-medium mb-2">Director</p>
                <p className="text-gray-600 text-sm">
                  Carolyne brings valuable insights to our organization, helping
                  shape our strategic direction and service offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Learn more about our services or contact us to discuss how we can
            help your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0c2340] hover:bg-[#0a1c33]"
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

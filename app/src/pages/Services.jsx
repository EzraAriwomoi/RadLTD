import { CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#0c2340] text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Radiance Star Legislative Consult Ltd offers specialized training and consulting services designed to
            enhance the effectiveness of legislative bodies.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Committee Management Training</CardTitle>
                <CardDescription>Comprehensive training on effective committee operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>The roles and functions of each committee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Effective management of committee meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Obstacles that inhibit committees from realizing their objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Solutions to committee operational challenges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parliamentary Procedure Training</CardTitle>
                <CardDescription>Expert guidance on parliamentary rules and procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Key considerations in Speaker's Rulings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Parliamentary debate procedures and protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Legislative process and bill management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Parliamentary ethics and standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>County Assembly Support</CardTitle>
                <CardDescription>Specialized training for county-level legislative bodies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>County assembly procedures and operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Effective county legislation development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>County assembly committee management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>County-national government relations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legislative Staff Development</CardTitle>
                <CardDescription>Training programs for parliamentary and assembly staff</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Legislative research and drafting skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Committee support and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Parliamentary administration best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Legislative process documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Training Approach</h2>
          <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
            <p>
              At Radiance Star Legislative Consult Ltd, we believe in a practical, hands-on approach to legislative
              training. Our programs are designed to address real-world challenges faced by legislative bodies in Kenya.
            </p>
            <p>
              Our trainers have extensive experience working with both national and county-level legislative
              institutions, bringing practical insights and solutions to every training session.
            </p>
            <p>
              We customize our training programs to meet the specific needs of each client, ensuring that the content is
              relevant, practical, and immediately applicable.
            </p>
            <p>
              Our training sessions combine theoretical knowledge with practical exercises, case studies, and
              interactive discussions to ensure maximum engagement and knowledge retention.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0c2340] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Legislative Capabilities?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our expert consultants can help your organization achieve its legislative
            objectives.
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#c09c2c] text-black">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

export default Services

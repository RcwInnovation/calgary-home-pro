import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Clock, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality Workmanship",
    description: "We never cut corners. Every project receives our full attention and expertise.",
  },
  {
    icon: Clock,
    title: "Clear Communication",
    description: "We keep you informed at every step, with transparent timelines and pricing.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver on our promises.",
  },
  {
    icon: Award,
    title: "Professional Standards",
    description: "Clean, safe, and organized work sites. We respect your property like it's our own.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            About Ninajean
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Your trusted partner for maintenance and renovation services in Calgary, Alberta.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Calgary's Reliable Renovation Partner
            </h2>
            <div className="mt-6 space-y-4 text-body leading-relaxed">
              <p>
                Ninajean Maintenance & Renovation is a Calgary-based company dedicated to delivering
                high-quality maintenance and renovation services for residential and small commercial
                clients throughout the city and surrounding areas.
              </p>
              <p>
                We understand that your home or business is more than just a building—it's where
                you live, work, and create memories. That's why we approach every project with care,
                professionalism, and attention to detail.
              </p>
              <p>
                Our team brings experience across a wide range of services, from painting and drywall
                to complete renovations and exterior work. We're committed to clear communication,
                quality workmanship, and leaving every job site clean and safe.
              </p>
              <p>
                Whether you need a small repair or a major renovation, we're here to help you
                improve your property with reliable service and lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">What We Stand For</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">
              Our values guide everything we do, from the first phone call to the final walk-through.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Why Calgary Chooses Ninajean
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Local Calgary-based company with deep community roots",
                  "Comprehensive services—one team for all your renovation needs",
                  "Clear, upfront estimates with no hidden fees",
                  "Licensed, insured, and committed to safety",
                  "Experience with Calgary's climate and building codes",
                  "Responsive communication and reliable scheduling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Team Photo Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Contact us today for a free, no-obligation estimate on your maintenance or renovation project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

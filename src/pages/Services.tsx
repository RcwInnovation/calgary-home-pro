import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Paintbrush,
  Hammer,
  Home,
  Wrench,
  Layers,
  Fence,
  SquareStack,
  DoorOpen,
  Construction,
  Truck,
  Ruler,
} from "lucide-react";

const services = [
  {
    name: "Restoration Services",
    icon: Construction,
    href: "/services/restoration",
    description: "Comprehensive property restoration including water damage, fire damage, and structural repairs.",
  },
  {
    name: "Painting (Interior & Exterior)",
    icon: Paintbrush,
    href: "/services/painting",
    description: "Professional painting services for homes and commercial properties, inside and out.",
  },
  {
    name: "Concrete Services",
    icon: SquareStack,
    href: "/services/concrete",
    description: "Driveways, patios, walkways, foundations, and concrete repair work.",
  },
  {
    name: "Drywall & Taping",
    icon: Layers,
    href: "/services/drywall",
    description: "Expert drywall installation, repair, taping, and finishing services.",
  },
  {
    name: "Flooring Installation",
    icon: Ruler,
    href: "/services/flooring",
    description: "Hardwood, laminate, tile, vinyl, and carpet installation and repair.",
  },
  {
    name: "Renovations & Remodeling",
    icon: Home,
    href: "/services/renovations",
    description: "Kitchen, bathroom, basement, and whole-home renovation projects.",
  },
  {
    name: "Light Demolition",
    icon: Truck,
    href: "/services/demolition",
    description: "Safe removal of walls, fixtures, flooring, and other interior elements.",
  },
  {
    name: "Finish Carpentry",
    icon: Hammer,
    href: "/services/carpentry",
    description: "Trim, molding, baseboards, custom built-ins, and detailed woodwork.",
  },
  {
    name: "Doors & Windows Installation",
    icon: DoorOpen,
    href: "/services/doors-windows",
    description: "Installation and replacement of interior and exterior doors and windows.",
  },
  {
    name: "Siding & Exterior Work",
    icon: Wrench,
    href: "/services/siding",
    description: "Siding installation, repair, fascia, soffit, and exterior finishing.",
  },
  {
    name: "Decks & Fences",
    icon: Fence,
    href: "/services/decks-fences",
    description: "Custom deck building, fence installation, and outdoor living spaces.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Professional maintenance and renovation services for residential and commercial
            properties in Calgary, Alberta.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="card-elevated group p-6"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  {service.name}
                </h2>
                <p className="mt-2 text-body">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 font-medium text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Need Help With Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Not sure which service you need? Contact us for a free consultation and estimate.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+14031234567">Call (403) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

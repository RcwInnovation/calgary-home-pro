import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import paintingImg from "@/assets/services/painting.jpg";
import concreteImg from "@/assets/services/concrete.jpg";
import drywallImg from "@/assets/services/drywall.jpg";
import flooringImg from "@/assets/services/flooring.jpg";
import renovationsImg from "@/assets/services/renovations.jpg";
import restorationImg from "@/assets/services/restoration.jpg";
import demolitionImg from "@/assets/services/demolition.jpg";
import carpentryImg from "@/assets/services/carpentry.jpg";
import doorsWindowsImg from "@/assets/services/doors-windows.jpg";
import sidingImg from "@/assets/services/siding.jpg";
import decksImg from "@/assets/services/decks.jpg";
import cleaningImg from "@/assets/services/cleaning.jpg";
import snowRemovalImg from "@/assets/services/snow-removal.jpg";

const services = [
  { name: "Restoration Services", image: restorationImg, href: "/services/restoration", description: "Water, fire and property-damage repairs." },
  { name: "Painting (Interior & Exterior)", image: paintingImg, href: "/services/painting", description: "Clean finishes for interiors and exteriors." },
  { name: "Concrete Services", image: concreteImg, href: "/services/concrete", description: "Driveways, patios, walkways and repairs." },
  { name: "Drywall & Taping", image: drywallImg, href: "/services/drywall", description: "Installation, repairs and smooth finishing." },
  { name: "Flooring Installation", image: flooringImg, href: "/services/flooring", description: "Hardwood, laminate, vinyl, tile and carpet." },
  { name: "Renovations & Remodeling", image: renovationsImg, href: "/services/renovations", description: "Kitchens, bathrooms, basements and more." },
  { name: "Light Demolition", image: demolitionImg, href: "/services/demolition", description: "Controlled removal and site preparation." },
  { name: "Finish Carpentry", image: carpentryImg, href: "/services/carpentry", description: "Trim, built-ins and custom woodwork." },
  { name: "Doors & Windows Installation", image: doorsWindowsImg, href: "/services/doors-windows", description: "Fitting, replacement, sealing and hardware." },
  { name: "Siding & Exterior Work", image: sidingImg, href: "/services/siding", description: "Siding, fascia, soffit and exterior repairs." },
  { name: "Decks & Fences", image: decksImg, href: "/services/decks-fences", description: "Outdoor construction, repairs and privacy." },
  { name: "Cleaning Services", image: cleaningImg, href: "/services/cleaning", description: "Homes, offices, moves and post-construction." },
  { name: "Snow Removal", image: snowRemovalImg, href: "/services/snow-removal", description: "Driveways, walkways and entrances in winter." },
];

const generalFaqs = [
  { question: "Which property services can RCW coordinate together?", answer: "We can combine cleaning, maintenance, restoration and renovation tasks into one scope. This is useful for tenant turnovers, damage repairs and multi-room updates.", link: "/contact", linkLabel: "Describe your project" },
  { question: "Are estimates free for Calgary property services?", answer: "Yes. Tell us what you need and we will review photos, measurements or a site visit when required before preparing your no-obligation estimate.", link: "/contact", linkLabel: "Request a free estimate" },
  { question: "Do you serve homes and small businesses outside Calgary?", answer: "Yes. We serve Calgary and nearby communities including Airdrie, Cochrane, Okotoks and Chestermere, subject to project availability.", link: "/service-areas", linkLabel: "View service areas" },
  { question: "How do I choose the right service for my project?", answer: "Start with the closest service and describe the outcome you want. We can identify related work and avoid asking you to coordinate separate requests.", link: "/contact", linkLabel: "Ask for guidance" },
  { question: "Can I request recurring cleaning or snow removal?", answer: "Yes. Cleaning and snow removal can be scoped as one-time or recurring services, with priorities and frequency agreed before service begins.", link: "/services/cleaning", linkLabel: "Explore cleaning services" },
];

export default function Services() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Property Services in Calgary",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: service.href,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>Property Maintenance & Renovation Services in Calgary | RCW</title>
        <meta name="description" content="Compare RCW Integrated Solutions services in Calgary: restoration, painting, concrete, drywall, flooring, renovations, cleaning, snow removal and more." />
        <link rel="canonical" href="/services" />
        <meta property="og:title" content="Property Services in Calgary | RCW Integrated Solutions" />
        <meta property="og:description" content="Explore integrated maintenance, renovation, restoration, cleaning and snow removal services." />
        <meta property="og:url" content="/services" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <section className="gradient-primary py-14 md:py-20">
        <div className="container-custom text-center">
          <h1 className="mx-auto max-w-4xl text-balance font-heading text-3xl font-bold text-primary-foreground md:text-5xl">Property Maintenance & Renovation Services in Calgary</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">One local team for homes and small businesses. Choose a service to see its scope, process and FAQs.</p>
          <Button variant="hero-outline" size="lg" className="mt-6" asChild><a href="#services-faq">View Service FAQs</a></Button>
        </div>
      </section>

      <section className="section-padding" aria-label="All property services">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link key={service.name} to={service.href} className="card-elevated group overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={service.image} alt={`${service.name} in Calgary`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-xl font-semibold text-foreground">{service.name}</h2>
                  <p className="mt-2 text-sm text-body">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">View service<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services-faq" className="section-padding scroll-mt-20 bg-section-alt">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Calgary Property Services FAQ</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-body">Quick answers to help you choose the right next step.</p>
            <Accordion type="single" collapsible className="mt-7 rounded-xl border border-border bg-card px-5">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`general-faq-${index}`}>
                  <AccordionTrigger className="py-5 text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-body">
                    <p>{faq.answer}</p>
                    <Link to={faq.link} className="mt-3 inline-flex items-center gap-2 font-semibold text-primary hover:underline">{faq.linkLabel}<ArrowRight className="h-4 w-4" /></Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">Tell us the result you want. We&apos;ll help define the right service scope.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild><Link to="/contact">Get a Free Estimate</Link></Button>
            <Button variant="outline" size="lg" asChild><a href="tel:+14031234567">Call (403) 123-4567</a></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

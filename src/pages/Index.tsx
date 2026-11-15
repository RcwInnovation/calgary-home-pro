import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Construction,
  DoorOpen,
  Fence,
  Hammer,
  Home,
  Layers,
  MapPin,
  Paintbrush,
  Pause,
  Phone,
  Play,
  Ruler,
  Snowflake,
  Sparkles,
  SquareStack,
  Star,
  Truck,
  Wrench,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { EstimateForm } from "@/components/forms/EstimateForm";

import heroBg from "@/assets/hero-bg.jpg";
import restorationImg from "@/assets/services/restoration.jpg";
import paintingImg from "@/assets/services/painting.jpg";
import concreteImg from "@/assets/services/concrete.jpg";
import drywallImg from "@/assets/services/drywall.jpg";
import flooringImg from "@/assets/services/flooring.jpg";
import renovationsImg from "@/assets/services/renovations.jpg";
import demolitionImg from "@/assets/services/demolition.jpg";
import carpentryImg from "@/assets/services/carpentry.jpg";
import doorsWindowsImg from "@/assets/services/doors-windows.jpg";
import sidingImg from "@/assets/services/siding.jpg";
import decksImg from "@/assets/services/decks.jpg";
import cleaningImg from "@/assets/services/cleaning.jpg";
import snowRemovalImg from "@/assets/services/snow-removal.jpg";

import kitchenProject from "@/assets/projects/kitchen-renovation.jpg";
import livingRoomProject from "@/assets/projects/living-room-painting.jpg";
import deckProject from "@/assets/projects/deck-installation.jpg";
import basementProject from "@/assets/projects/basement-renovation.jpg";
import bathroomProject from "@/assets/projects/bathroom-renovation.jpg";
import sidingProject from "@/assets/projects/siding-exterior.jpg";

const heroSlides = [
  {
    image: heroBg,
    eyebrow: "Serving Calgary & Surrounding Areas",
    title: "Professional Maintenance & Renovation Services in Calgary, Alberta",
    description: "Reliable, high-quality construction and renovation solutions for homes and small businesses.",
  },
  {
    image: cleaningImg,
    eyebrow: "Residential & Commercial Cleaning",
    title: "A Cleaner, Healthier Space Without the Hassle",
    description: "Detail-oriented cleaning, deep cleaning, move-out cleaning and post-construction cleanup tailored to your property.",
  },
  {
    image: snowRemovalImg,
    eyebrow: "Calgary Winter Services",
    title: "Snow Removal That Keeps Your Property Safe & Accessible",
    description: "Dependable clearing for driveways, walkways and small commercial properties, with one-time and seasonal options.",
  },
];

const recentProjects = [
  { image: kitchenProject, title: "Kitchen Renovation", location: "Calgary, AB" },
  { image: livingRoomProject, title: "Interior Painting", location: "Airdrie, AB" },
  { image: deckProject, title: "Deck & Fence", location: "Calgary, AB" },
  { image: basementProject, title: "Basement Finishing", location: "Cochrane, AB" },
  { image: bathroomProject, title: "Bathroom Remodel", location: "Calgary, AB" },
  { image: sidingProject, title: "Siding Installation", location: "Okotoks, AB" },
];

const services = [
  { name: "Restoration Services", icon: Construction, image: restorationImg, href: "/services/restoration", description: "Water, fire and property damage repairs." },
  { name: "Painting", icon: Paintbrush, image: paintingImg, href: "/services/painting", description: "Flawless interior and exterior finishes." },
  { name: "Concrete Services", icon: SquareStack, image: concreteImg, href: "/services/concrete", description: "Driveways, patios, walkways and repairs." },
  { name: "Drywall & Taping", icon: Layers, image: drywallImg, href: "/services/drywall", description: "Smooth installation, repairs and finishing." },
  { name: "Flooring Installation", icon: Ruler, image: flooringImg, href: "/services/flooring", description: "Hardwood, laminate, vinyl, tile and carpet." },
  { name: "Renovations", icon: Home, image: renovationsImg, href: "/services/renovations", description: "Kitchen, bathroom and whole-home transformations." },
  { name: "Light Demolition", icon: Truck, image: demolitionImg, href: "/services/demolition", description: "Safe, clean preparation for your next project." },
  { name: "Finish Carpentry", icon: Hammer, image: carpentryImg, href: "/services/carpentry", description: "Detailed trim, built-ins and custom woodwork." },
  { name: "Doors & Windows", icon: DoorOpen, image: doorsWindowsImg, href: "/services/doors-windows", description: "Secure, efficient and professional installation." },
  { name: "Siding & Exterior", icon: Wrench, image: sidingImg, href: "/services/siding", description: "Weather-resistant exterior upgrades and repairs." },
  { name: "Decks & Fences", icon: Fence, image: decksImg, href: "/services/decks-fences", description: "Outdoor spaces built for Calgary living." },
  { name: "Cleaning Services", icon: Sparkles, image: cleaningImg, href: "/services/cleaning", description: "Professional residential and commercial cleaning." },
  { name: "Snow Removal", icon: Snowflake, image: snowRemovalImg, href: "/services/snow-removal", description: "Clear driveways, walkways and entrances all winter." },
];

const whyChooseUs = [
  { title: "Local Calgary Company", description: "Based right here in Calgary, we understand the local climate and building codes." },
  { title: "Fast & Clear Estimates", description: "Get transparent pricing with no hidden fees. We respond within 24-48 hours." },
  { title: "Quality Workmanship", description: "Our experienced team delivers professional results on every project." },
  { title: "Residential & Commercial", description: "We serve both homeowners and small businesses throughout Calgary." },
];

const processSteps = [
  { step: "01", title: "Request an Estimate", description: "Fill out our simple form or give us a call. Tell us about your project." },
  { step: "02", title: "We Review or Visit", description: "We'll review your request and schedule a site visit if needed." },
  { step: "03", title: "Receive Your Quote", description: "Get a clear, detailed quote with no obligations or hidden costs." },
];

const testimonials = [
  { name: "Sarah M.", location: "Calgary, AB", text: "RCW Integrated Solutions did an amazing job on our basement renovation. Professional, on time, and the quality exceeded our expectations.", rating: 5 },
  { name: "David L.", location: "Airdrie, AB", text: "We hired them for interior painting and drywall repair. The team was respectful, clean, and delivered excellent results.", rating: 5 },
  { name: "Jennifer K.", location: "Calgary, AB", text: "Great experience from estimate to completion. They built us a beautiful deck that we enjoy every summer.", rating: 5 },
];

export default function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (!isPlaying || isHovered || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPlaying, isHovered]);

  const currentSlide = heroSlides[activeSlide];

  return (
    <Layout>
      <Helmet>
        <title>RCW Integrated Solutions | Property Services in Calgary</title>
        <meta name="description" content="Integrated maintenance, renovation, restoration, cleaning and snow removal for Calgary homes and small businesses. Request a free estimate." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="RCW Integrated Solutions | Calgary Property Services" />
        <meta property="og:description" content="One local team for maintenance, renovation, restoration, cleaning and snow removal." />
        <meta property="og:url" content="/" />
      </Helmet>
      <section
        className="relative min-h-[650px] overflow-hidden sm:min-h-[620px] lg:min-h-[700px]"
        aria-roledescription="carousel"
        aria-label="RCW Integrated Solutions services highlights"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsHovered(true)}
        onBlurCapture={() => setIsHovered(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") goToSlide(activeSlide - 1);
          if (event.key === "ArrowRight") goToSlide(activeSlide + 1);
        }}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(distance) > 50) goToSlide(activeSlide + (distance < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        <div className="absolute inset-0" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.image}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              width={index === 2 ? 1536 : undefined}
              height={index === 2 ? 1024 : undefined}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${index === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/35" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>

        <div className="container-custom relative z-10 flex min-h-[650px] items-center pb-36 pt-16 sm:min-h-[620px] lg:min-h-[700px]">
          <div key={activeSlide} className="max-w-3xl animate-fade-in" aria-live="polite">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-xs font-medium text-background backdrop-blur-sm sm:text-sm">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {currentSlide.eyebrow}
            </div>
            <h1 className="text-balance font-heading text-[1.75rem] font-bold leading-[1.15] text-background min-[380px]:text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl">
              {currentSlide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg md:text-xl">
              {currentSlide.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Button variant="hero" size="xl" className="w-full px-6 sm:w-auto" asChild>
                <Link to="/contact">Get a Free Estimate<ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full px-6 sm:w-auto" asChild>
                <a href="tel:+14031234567"><Phone className="h-5 w-5" />Call Now</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="container-custom absolute inset-x-0 bottom-24 z-20 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(index)}
                className="flex h-11 w-9 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={index === activeSlide ? "true" : undefined}
              >
                <span className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-9 bg-primary" : "w-2.5 bg-background/50 group-hover:bg-background/80"}`} />
              </button>
            ))}
            <span className="ml-1 hidden text-xs font-medium text-background/70 min-[360px]:inline">0{activeSlide + 1} / 0{heroSlides.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setIsPlaying((playing) => !playing)} className="hidden h-11 w-11 items-center justify-center rounded-full border border-background/30 bg-foreground/30 text-background backdrop-blur-sm transition-colors hover:bg-foreground/50 sm:flex" aria-label={isPlaying ? "Pause slider" : "Play slider"}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button type="button" onClick={() => goToSlide(activeSlide - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-background/30 bg-foreground/30 text-background backdrop-blur-sm transition-colors hover:bg-foreground/50" aria-label="Previous slide"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" onClick={() => goToSlide(activeSlide + 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-background/30 bg-foreground/30 text-background backdrop-blur-sm transition-colors hover:bg-foreground/50" aria-label="Next slide"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mt-4 text-body">From minor repairs to complete renovations, cleaning and winter maintenance, we offer reliable solutions for your property.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link key={service.name} to={service.href} className="card-elevated group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img src={service.image} alt={`${service.name} in Calgary`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn more<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-9 text-center"><Button variant="outline" size="lg" className="w-full sm:w-auto" asChild><Link to="/services">View All Services</Link></Button></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Why Choose RCW Integrated Solutions?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">We're committed to delivering exceptional quality and service on every project.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"><CheckCircle className="h-7 w-7 text-primary" /></div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Simple 3-Step Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">Getting started is easy. Here's how we work with you.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">{step.step}</div>
                {index < processSteps.length - 1 && <div className="absolute left-[60%] top-10 hidden h-0.5 w-[80%] bg-border md:block" />}
                <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Our Recent Projects</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">Take a look at some of our completed work across Calgary.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentProjects.map((project) => (
              <div key={project.title} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-0 p-5 text-background transition-transform duration-300 sm:translate-y-full sm:group-hover:translate-y-0">
                  <h3 className="font-heading text-lg font-semibold text-background">{project.title}</h3>
                  <p className="text-sm text-background/80">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center"><Button variant="outline" size="lg" className="w-full sm:w-auto" asChild><Link to="/projects">View All Projects</Link></Button></div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body">We take pride in delivering quality work and excellent customer service.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card-elevated p-6">
                <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} className="h-5 w-5 fill-warning text-warning" />)}</div>
                <p className="text-body">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4 border-t border-border pt-4"><p className="font-semibold text-foreground">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.location}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="overflow-hidden rounded-2xl bg-foreground">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-12">
                <h2 className="font-heading text-2xl font-bold text-background sm:text-3xl md:text-4xl">Get Your Free Estimate Today</h2>
                <p className="mt-4 text-background/70">Tell us about your project and we'll provide a detailed, no-obligation quote within 24-48 hours.</p>
                <ul className="mt-6 space-y-3">
                  {["Free, no-obligation estimates", "Response within 24-48 hours", "Transparent, upfront pricing"].map((item) => <li key={item} className="flex items-center gap-3 text-background/80"><CheckCircle className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}
                </ul>
              </div>
              <div className="bg-background p-4 sm:p-6 lg:p-12"><EstimateForm compact /></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

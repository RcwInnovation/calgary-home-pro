import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Briefcase, CheckCircle, Clock, Shield, Target, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import clientLogos from "@/assets/clients-logos.png";

const principles = [
  { icon: Clock, title: "Clear Planning", description: "Scopes and schedules tailored to each property." },
  { icon: Users, title: "Open Communication", description: "Straightforward updates at every stage." },
  { icon: Shield, title: "Consistent Standards", description: "Careful, safe and professional work." },
];

const serviceGroups = ["Cleaning & seasonal maintenance", "Restoration & repairs", "Interior & exterior finishes", "Complete renovations"];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About RCW Integrated Solutions | Calgary</title>
        <meta name="description" content="Meet RCW Integrated Solutions, a Calgary property services company focused on clear planning, communication and consistent workmanship." />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About RCW Integrated Solutions" />
        <meta property="og:description" content="Integrated cleaning, maintenance, restoration and renovation services in Calgary." />
        <meta property="og:url" content="/about" />
      </Helmet>

      <section className="gradient-primary py-14 md:py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">About RCW Integrated Solutions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">One Calgary team for cleaning, maintenance, restoration and renovation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Integrated Care for Your Property</h2>
              <p className="mt-5 leading-relaxed text-body">RCW Integrated Solutions serves homes and small businesses across Calgary and surrounding areas. We bring multiple property services together to simplify coordination and maintain consistent quality.</p>
              <p className="mt-4 leading-relaxed text-body">Every project starts with a clear scope, practical scheduling and respect for your space.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {principles.map((principle) => (
                <div key={principle.title} className="card-elevated flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10"><principle.icon className="h-5 w-5 text-primary" /></div>
                  <div><h3 className="text-base font-semibold">{principle.title}</h3><p className="mt-1 text-sm text-body">{principle.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-3 flex items-center gap-2 text-primary"><Briefcase className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wider">Our Approach</span></div>
              <h2 className="font-heading text-3xl font-bold">One Point of Contact</h2>
              <p className="mt-4 text-body">Our hands-on team coordinates each scope with clean job sites, efficient sequencing and durable results in mind.</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {serviceGroups.map((service) => <div key={service} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 shrink-0 text-primary" /><span className="text-sm text-body">{service}</span></div>)}
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2 text-primary"><Users className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wider">Leadership</span></div>
              <h2 className="font-heading text-3xl font-bold">Accountable, Hands-On Management</h2>
              <p className="mt-4 text-body">RCW Integrated Solutions is owned and operated by <strong className="text-foreground">Ms. Tania Lopez</strong>. Her background in accounting and operations supports organized projects, clear client relationships and consistent oversight.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <Target className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mt-4 font-heading text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-lg text-body">Create safe, comfortable and well-maintained spaces through reliable service, flexible scheduling and consistent workmanship.</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-center font-heading text-2xl font-bold">Our Clients</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">Residential and small commercial clients across Calgary and surrounding areas.</p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-card sm:p-8">
              <img src={clientLogos} alt="Clients including Cité des Rocheuses, Boston Pizza, The Metropolitan, Aragon Massage, Subaru and Capitol Chevrolet" className="mx-auto h-auto max-w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Let&apos;s Simplify Your Next Project</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">Tell us what your property needs and receive a free estimate.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild><Link to="/contact">Get a Free Estimate</Link></Button>
            <Button variant="outline" size="lg" asChild><Link to="/services">Explore Services</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

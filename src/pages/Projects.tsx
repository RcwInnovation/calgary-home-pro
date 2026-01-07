import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Kitchen Renovation",
    category: "Renovations",
    location: "Calgary NW",
  },
  {
    id: 2,
    title: "Basement Development",
    category: "Renovations",
    location: "Airdrie",
  },
  {
    id: 3,
    title: "Exterior Painting",
    category: "Painting",
    location: "Calgary SW",
  },
  {
    id: 4,
    title: "Deck Construction",
    category: "Decks & Fences",
    location: "Cochrane",
  },
  {
    id: 5,
    title: "Bathroom Remodel",
    category: "Renovations",
    location: "Calgary SE",
  },
  {
    id: 6,
    title: "Driveway Replacement",
    category: "Concrete",
    location: "Calgary NE",
  },
  {
    id: 7,
    title: "Interior Painting",
    category: "Painting",
    location: "Okotoks",
  },
  {
    id: 8,
    title: "Fence Installation",
    category: "Decks & Fences",
    location: "Calgary NW",
  },
  {
    id: 9,
    title: "Flooring Installation",
    category: "Flooring",
    location: "Chestermere",
  },
];

export default function Projects() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Take a look at some of our completed work across Calgary and surrounding areas.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="card-elevated group overflow-hidden">
                <div className="aspect-[4/3] bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    Project Image
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-body">{project.location}</p>
                </div>
              </div>
            ))}
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
            Contact us today for a free estimate. Your project could be our next success story.
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

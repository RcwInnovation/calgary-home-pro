import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "preparing-home-for-renovation",
    title: "Cómo Preparar tu Hogar para una Renovación",
    excerpt: "Consejos prácticos para preparar tu casa antes de comenzar cualquier proyecto de renovación, desde proteger muebles hasta planificar el cronograma.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&auto=format&fit=crop",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Renovaciones"
  },
  {
    slug: "trends-interior-painting-2024",
    title: "Tendencias en Pintura Interior para 2024",
    excerpt: "Descubre los colores y técnicas de pintura más populares este año para transformar tus espacios con estilo moderno.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop",
    date: "2024-01-10",
    readTime: "4 min",
    category: "Pintura"
  },
  {
    slug: "deck-maintenance-tips",
    title: "Mantenimiento de Decks: Guía Completa",
    excerpt: "Todo lo que necesitas saber para mantener tu deck en perfectas condiciones durante todo el año, incluyendo sellado y reparaciones.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&auto=format&fit=crop",
    date: "2024-01-05",
    readTime: "6 min",
    category: "Decks"
  },
  {
    slug: "choosing-right-flooring",
    title: "Cómo Elegir el Piso Perfecto para tu Hogar",
    excerpt: "Comparamos los diferentes tipos de pisos disponibles: madera, vinilo, laminado y más, para ayudarte a tomar la mejor decisión.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    date: "2023-12-28",
    readTime: "7 min",
    category: "Pisos"
  },
  {
    slug: "water-damage-restoration",
    title: "Restauración por Daños de Agua: Lo que Debes Saber",
    excerpt: "Aprende sobre el proceso de restauración después de inundaciones o filtraciones, y cómo prevenir daños mayores en tu propiedad.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    date: "2023-12-20",
    readTime: "5 min",
    category: "Restauración"
  },
  {
    slug: "drywall-repair-basics",
    title: "Reparación de Drywall: Conceptos Básicos",
    excerpt: "Guía paso a paso para entender cómo se reparan paredes de drywall, desde pequeños agujeros hasta daños más extensos.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
    date: "2023-12-15",
    readTime: "4 min",
    category: "Drywall"
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container-custom">
          <nav className="mb-4 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-primary-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Blog</span>
          </nav>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Nuestro Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Consejos, tendencias y guías para el mantenimiento y renovación de tu hogar
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} de lectura</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Leer más
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            ¿Te Gustó Nuestro Contenido?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Contáctanos para cualquier proyecto de renovación o mantenimiento que tengas en mente.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Obtener Presupuesto Gratis
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

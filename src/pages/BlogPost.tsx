import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  "preparing-home-for-renovation": {
    title: "Cómo Preparar tu Hogar para una Renovación",
    excerpt: "Consejos prácticos para preparar tu casa antes de comenzar cualquier proyecto de renovación.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&auto=format&fit=crop",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Renovaciones",
    content: [
      "Preparar tu hogar para una renovación es un paso crucial que muchos propietarios subestiman. Una buena preparación puede hacer la diferencia entre un proyecto exitoso y uno lleno de contratiempos.",
      "El primer paso es crear un plan detallado. Esto incluye definir exactamente qué áreas se van a renovar, establecer un presupuesto realista y determinar un cronograma tentativo. Comunicar estos detalles a tu contratista es esencial para alinear expectativas.",
      "Proteger tus pertenencias es fundamental. Cubre los muebles con plástico o telas protectoras, retira objetos de valor y considera almacenar temporalmente artículos importantes. Las renovaciones generan polvo y escombros que pueden dañar tus posesiones.",
      "Prepárate para las interrupciones. Dependiendo del alcance de la renovación, podrías quedarte sin cocina, baño o incluso electricidad durante ciertos períodos. Planifica alternativas como comer fuera o quedarte temporalmente en otro lugar.",
      "Finalmente, mantén una comunicación abierta con tu equipo de renovación. Los mejores resultados se logran cuando hay diálogo constante entre propietarios y contratistas."
    ]
  },
  "trends-interior-painting-2024": {
    title: "Tendencias en Pintura Interior para 2024",
    excerpt: "Descubre los colores y técnicas de pintura más populares este año.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&auto=format&fit=crop",
    date: "2024-01-10",
    readTime: "4 min",
    category: "Pintura",
    content: [
      "El 2024 trae consigo una paleta de colores emocionante que refleja nuestro deseo de crear espacios acogedores y personalizados. Los tonos terrosos y naturales dominan las tendencias este año.",
      "Los verdes suaves, inspirados en la naturaleza, continúan siendo populares. Desde el verde salvia hasta el verde oliva, estos tonos aportan tranquilidad y conexión con el exterior.",
      "Los tonos cálidos neutros están reemplazando a los grises fríos que dominaron la última década. Beiges cálidos, cremas y tonos arcilla crean ambientes más acogedores y atemporales.",
      "Las paredes de acento siguen siendo tendencia, pero con un giro: los murales y técnicas de textura están ganando popularidad. Considera agregar profundidad con técnicas de pintura especiales.",
      "El acabado mate sigue siendo el preferido para interiores, ya que oculta imperfecciones y crea una apariencia elegante y moderna."
    ]
  },
  "deck-maintenance-tips": {
    title: "Mantenimiento de Decks: Guía Completa",
    excerpt: "Todo lo que necesitas saber para mantener tu deck en perfectas condiciones.",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1200&auto=format&fit=crop",
    date: "2024-01-05",
    readTime: "6 min",
    category: "Decks",
    content: [
      "Un deck bien mantenido puede durar décadas y aumentar significativamente el valor de tu propiedad. Sin embargo, requiere atención regular para mantenerse en óptimas condiciones.",
      "La limpieza regular es fundamental. Barre las hojas y escombros frecuentemente, ya que la humedad atrapada puede causar pudrición. Una limpieza profunda con solución especializada debe realizarse al menos una vez al año.",
      "Inspecciona regularmente en busca de daños. Busca tablas sueltas, clavos que sobresalen, signos de pudrición o infestación de insectos. Abordar estos problemas temprano previene reparaciones costosas.",
      "El sellado es crucial para proteger la madera de los elementos. La mayoría de los decks necesitan ser sellados cada 2-3 años, aunque esto varía según el clima y la exposición al sol.",
      "Considera aplicar un protector UV si tu deck recibe mucho sol directo. Esto previene el desvanecimiento y el agrietamiento prematuro de la madera."
    ]
  },
  "choosing-right-flooring": {
    title: "Cómo Elegir el Piso Perfecto para tu Hogar",
    excerpt: "Comparamos los diferentes tipos de pisos disponibles para ayudarte a decidir.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop",
    date: "2023-12-28",
    readTime: "7 min",
    category: "Pisos",
    content: [
      "Elegir el piso adecuado para tu hogar es una decisión importante que afecta tanto la estética como la funcionalidad de tus espacios. Cada tipo de piso tiene sus ventajas y consideraciones.",
      "La madera dura sigue siendo la opción premium. Es duradera, aumenta el valor de la propiedad y puede lijarse y refinarse múltiples veces. Sin embargo, es sensible a la humedad y requiere más mantenimiento.",
      "El piso de vinilo de lujo (LVP) ha revolucionado la industria. Ofrece la apariencia de madera o piedra a una fracción del costo, es resistente al agua y fácil de instalar. Es ideal para familias con niños o mascotas.",
      "El laminado ofrece un equilibrio entre precio y apariencia. Es duradero y fácil de limpiar, aunque no tan resistente al agua como el vinilo.",
      "Considera factores como el tráfico en el área, la exposición a humedad, tu presupuesto y el estilo deseado. Cada habitación puede beneficiarse de un tipo diferente de piso."
    ]
  },
  "water-damage-restoration": {
    title: "Restauración por Daños de Agua: Lo que Debes Saber",
    excerpt: "El proceso de restauración después de inundaciones o filtraciones.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop",
    date: "2023-12-20",
    readTime: "5 min",
    category: "Restauración",
    content: [
      "Los daños por agua pueden ser devastadores para cualquier propiedad. Actuar rápidamente es crucial para minimizar los daños y prevenir problemas secundarios como el moho.",
      "Las primeras 24-48 horas son críticas. Mientras esperas ayuda profesional, documenta los daños con fotos, detén la fuente de agua si es posible y comienza a secar el área.",
      "El proceso de restauración profesional incluye extracción de agua, secado industrial, deshumidificación y tratamiento antimicrobiano. Dependiendo de la severidad, puede tomar días o semanas.",
      "El moho puede comenzar a crecer en solo 24-48 horas después de la exposición al agua. Por eso es esencial el secado rápido y completo de todas las áreas afectadas.",
      "Siempre trabaja con tu compañía de seguros. Documenta todo y guarda recibos de gastos relacionados con la emergencia. Un contratista de restauración experimentado puede ayudarte con el proceso de reclamación."
    ]
  },
  "drywall-repair-basics": {
    title: "Reparación de Drywall: Conceptos Básicos",
    excerpt: "Guía para entender cómo se reparan paredes de drywall.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop",
    date: "2023-12-15",
    readTime: "4 min",
    category: "Drywall",
    content: [
      "El drywall es uno de los materiales más comunes en construcción residencial, y las reparaciones son frecuentemente necesarias debido a golpes, humedad o desgaste normal.",
      "Los pequeños agujeros, como los de clavos o tornillos, son los más fáciles de reparar. Se rellenan con compuesto para juntas, se lijan suavemente y se pintan.",
      "Los agujeros medianos requieren una técnica diferente. Se utilizan parches de malla autoadhesiva o parches de drywall para cubrir el área antes de aplicar el compuesto.",
      "Los daños grandes o estructurales pueden requerir cortar y reemplazar secciones enteras de drywall. Este trabajo es más complejo y a menudo requiere habilidades profesionales.",
      "El acabado es crucial para resultados invisibles. Múltiples capas finas de compuesto, lijado cuidadoso entre capas, y una técnica de emplumado para mezclar con la pared existente son esenciales."
    ]
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container-custom py-24 text-center">
          <h1 className="font-heading text-3xl font-bold">Artículo no encontrado</h1>
          <p className="mt-4 text-muted-foreground">El artículo que buscas no existe.</p>
          <Link 
            to="/blog" 
            className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Blog
          </Link>
        </div>
      </Layout>
    );
  }

  const postSlugs = Object.keys(blogPosts);
  const currentIndex = postSlugs.indexOf(slug || "");
  const prevPost = currentIndex > 0 ? postSlugs[currentIndex - 1] : null;
  const nextPost = currentIndex < postSlugs.length - 1 ? postSlugs[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[40vh] min-h-[300px] md:h-[50vh]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </section>

      {/* Content */}
      <article className="container-custom relative z-10 -mt-24 pb-16">
        <div className="mx-auto max-w-3xl">
          {/* Header Card */}
          <div className="rounded-xl bg-card p-6 shadow-lg md:p-10">
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>

            <h1 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de lectura</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl bg-muted p-6 text-center md:p-10">
            <h3 className="font-heading text-xl font-bold md:text-2xl">
              ¿Necesitas Ayuda con tu Proyecto?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Nuestro equipo está listo para ayudarte con cualquier proyecto de renovación o mantenimiento.
            </p>
            <Button asChild className="mt-4" size="lg">
              <Link to="/contact">Obtener Presupuesto Gratis</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            {prevPost ? (
              <Link 
                to={`/blog/${prevPost}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Artículo Anterior</span>
              </Link>
            ) : <div />}
            
            <Link 
              to="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              Ver Todos los Artículos
            </Link>
            
            {nextPost ? (
              <Link 
                to={`/blog/${nextPost}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <span className="hidden sm:inline">Siguiente Artículo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

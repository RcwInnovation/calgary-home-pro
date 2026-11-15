import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const serviceImages: Record<string, string> = {
  restoration: restorationImg,
  painting: paintingImg,
  concrete: concreteImg,
  drywall: drywallImg,
  flooring: flooringImg,
  renovations: renovationsImg,
  demolition: demolitionImg,
  carpentry: carpentryImg,
  "doors-windows": doorsWindowsImg,
  siding: sidingImg,
  "decks-fences": decksImg,
  cleaning: cleaningImg,
  "snow-removal": snowRemovalImg,
};

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  detail: string;
  includes: string[];
  bestFor: string[];
  faqs: { question: string; answer: string }[];
}

const serviceAreas = ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"];
const areaAnswer = "We serve Calgary and nearby communities, including Airdrie, Cochrane, Okotoks and Chestermere. Contact us to confirm availability for your address.";

const servicesData: Record<string, ServiceData> = {
  restoration: {
    title: "Restoration Services",
    metaTitle: "Restoration Services in Calgary",
    metaDescription: "Property restoration in Calgary for water, fire and smoke damage. Clear repair scopes, practical timelines and free estimates from RCW Integrated Solutions.",
    summary: "Assessment and repair for water, fire and property damage in Calgary homes and small businesses.",
    detail: "We assess the affected areas, explain the recommended scope and coordinate repairs through final finishing. Your estimate separates urgent work from optional improvements.",
    includes: ["Water-damage cleanup and repair", "Fire and smoke-damage repair", "Drywall, flooring and finish repairs", "Structural repair coordination", "Damage documentation for estimates", "Final cleanup and finishing"],
    bestFor: ["Homes after leaks or flooding", "Properties with smoke damage", "Rental-unit restoration", "Small-business damage repairs"],
    faqs: [
      { question: "What should I do before property restoration begins?", answer: "If it is safe, stop the source of damage, take photos and keep people away from affected areas. Do not disturb suspected mould, asbestos or heavy smoke residue; tell us what happened when you call." },
      { question: "How much do restoration services cost in Calgary?", answer: "Cost depends on the cause, affected materials, access and drying or repair scope. Request a free estimate so we can assess the damage and provide an itemized scope before work begins." },
      { question: "Can you provide restoration documents for an insurance claim?", answer: "Yes. We can provide a detailed scope and estimate for you to share with your insurer. Your insurer remains responsible for coverage and claim decisions." },
      { question: "How long does water or fire damage restoration take?", answer: "Minor repairs may take a few days, while drying, remediation and multi-room reconstruction can take longer. We confirm the sequence and expected timeline after the assessment." },
      { question: "Which areas do you serve for restoration services?", answer: areaAnswer },
    ],
  },
  painting: {
    title: "Painting (Interior & Exterior)",
    metaTitle: "Interior & Exterior Painting Services in Calgary",
    metaDescription: "Interior and exterior painting in Calgary for homes and small businesses. Careful preparation, clean finishes and free painting estimates.",
    summary: "Interior and exterior painting with careful preparation, clean edges and finishes selected for your space.",
    detail: "We protect nearby surfaces, prepare walls or exterior materials and apply the agreed finish. The scope can include minor repairs, trim, cabinets, decks and fences.",
    includes: ["Interior walls and ceilings", "Exterior painting", "Cabinet and trim painting", "Surface preparation and minor repairs", "Colour and product guidance", "Deck and fence staining"],
    bestFor: ["Room and whole-home refreshes", "Move-in or tenant turnover", "Office and retail updates", "Exterior weather protection"],
    faqs: [
      { question: "How much does professional painting cost in Calgary?", answer: "Pricing depends on surface area, preparation, repairs, paint selection and access. We provide a free, written estimate after reviewing your rooms or exterior." },
      { question: "How long does an interior or exterior painting project take?", answer: "A single room may take one to two days; larger homes and exteriors require more time. Preparation, drying time and weather affect the schedule, which we outline with your estimate." },
      { question: "Are paint and preparation included in the painting estimate?", answer: "Your written estimate identifies preparation, materials and paint included in the scope. Tell us your preferred colours or products before we finalize it." },
      { question: "Can you paint a house exterior during Calgary winters?", answer: "Interior painting is available year-round. Exterior painting depends on the product's temperature and moisture requirements, so we schedule it when conditions support proper curing." },
      { question: "Do you offer painting services outside Calgary?", answer: areaAnswer },
    ],
  },
  concrete: {
    title: "Concrete Services",
    metaTitle: "Concrete Services in Calgary",
    metaDescription: "Concrete driveways, patios, walkways, steps and repairs in Calgary. Request a clear scope and free estimate from RCW Integrated Solutions.",
    summary: "Concrete installation and repair for driveways, patios, walkways, steps and garage floors.",
    detail: "We review grading, base preparation, reinforcement, drainage and finishing before defining the scope. Removal and disposal can be included when existing concrete must be replaced.",
    includes: ["Driveway installation and replacement", "Patios and walkways", "Concrete steps and stairs", "Crack and surface repairs", "Garage floors", "Decorative finish options"],
    bestFor: ["Cracked driveway replacement", "New backyard patios", "Safer steps and walkways", "Small commercial concrete work"],
    faqs: [
      { question: "When is the best season for concrete work in Calgary?", answer: "Concrete work is generally scheduled when temperatures and ground conditions support proper placement and curing. Weather protection may extend the season, depending on the product and project." },
      { question: "How long before I can use new concrete?", answer: "Light foot traffic and vehicle traffic require different curing times. We provide project-specific guidance based on the mix, weather and intended use before you drive or place loads on the surface." },
      { question: "Do you remove and dispose of old concrete?", answer: "Yes, demolition and disposal can be included in a replacement estimate. We confirm access, hauling and any recycling options when defining the scope." },
      { question: "What affects the cost of a concrete driveway or patio?", answer: "Size, thickness, demolition, base condition, reinforcement, access and finish all affect price. A site review helps us produce an accurate, itemized estimate." },
      { question: "Where do you provide concrete services?", answer: areaAnswer },
    ],
  },
  drywall: {
    title: "Drywall & Taping",
    metaTitle: "Drywall & Taping Services in Calgary",
    metaDescription: "Drywall installation, taping, repairs and texture matching in Calgary. Smooth finishes for basements, renovations and water-damage repairs.",
    summary: "Drywall installation, taping and repairs with smooth, paint-ready finishes for Calgary properties.",
    detail: "From a single damaged panel to a basement finish, we handle board installation, joints, sanding and texture blending. Priming and painting can be added to complete the work.",
    includes: ["New drywall installation", "Taping, mudding and sanding", "Ceiling drywall work", "Hole and crack repairs", "Texture matching", "Water-damaged drywall replacement"],
    bestFor: ["Basement development", "Renovations and additions", "Water or impact damage", "Commercial wall repairs"],
    faqs: [
      { question: "Can you match my existing drywall texture?", answer: "We can blend many common smooth, orange-peel, knockdown and stipple finishes. We review the existing surface first because age and paint sheen can affect the final match." },
      { question: "How long does drywall installation and taping take?", answer: "Small repairs may be completed in one or two visits. Larger installations require multiple coats and drying time, so basements and renovations usually take several days or more." },
      { question: "Can you paint after drywall repairs?", answer: "Yes. Priming and painting can be included so the repaired area is ready for its final finish rather than left as unfinished compound." },
      { question: "How is a drywall repair estimate calculated?", answer: "We consider the damaged area, access, texture, number of visits and whether painting is required. Photos can help with the initial review; complex damage may need a site visit." },
      { question: "Do you provide drywall services near Calgary?", answer: areaAnswer },
    ],
  },
  flooring: {
    title: "Flooring Installation",
    metaTitle: "Flooring Installation Services in Calgary",
    metaDescription: "Hardwood, laminate, vinyl plank, tile and carpet installation in Calgary. Subfloor preparation, removal and free flooring estimates.",
    summary: "Hardwood, laminate, vinyl plank, tile and carpet installation with proper surface preparation.",
    detail: "We review the subfloor, moisture risks, transitions and removal needs before installation. Your estimate can include old-floor removal, preparation, materials and finishing trims.",
    includes: ["Hardwood installation", "Laminate and vinyl plank", "Ceramic and porcelain tile", "Carpet installation", "Subfloor preparation and repairs", "Old-floor removal and disposal"],
    bestFor: ["Home and condo updates", "Basement finishing", "Rental-property turnover", "Small commercial interiors"],
    faqs: [
      { question: "What flooring is best for a Calgary basement?", answer: "The right choice depends on moisture, subfloor condition, comfort and budget. Vinyl plank is often considered for moisture-prone spaces, but we assess your basement before recommending a product." },
      { question: "Do you remove old flooring before installation?", answer: "Yes. Removal and disposal can be included, along with subfloor preparation and transition pieces, so the estimate reflects the complete installation scope." },
      { question: "How soon can I walk on new flooring?", answer: "Many floating floors can be used shortly after installation, while tile, adhesives and site-finished hardwood need more curing time. We provide instructions for your specific material." },
      { question: "How much does flooring installation cost in Calgary?", answer: "Price depends on square footage, material, removal, subfloor repairs, stairs and transitions. Request a free estimate with approximate room sizes for a more accurate review." },
      { question: "Which communities do you serve for flooring installation?", answer: areaAnswer },
    ],
  },
  renovations: {
    title: "Renovations & Remodeling",
    metaTitle: "Renovations & Remodeling Services in Calgary",
    metaDescription: "Kitchen, bathroom, basement and whole-home renovations in Calgary. Coordinated scopes, clear estimates and one point of contact.",
    summary: "Coordinated kitchen, bathroom, basement and whole-home renovations for Calgary properties.",
    detail: "We define the scope, sequence the trades and keep the project organized from preparation through finishing. Permit and inspection needs are reviewed for the work involved.",
    includes: ["Kitchen renovations", "Bathroom remodelling", "Basement development", "Whole-home updates", "Room reconfiguration", "Accessibility modifications"],
    bestFor: ["Outdated kitchens and bathrooms", "Growing families", "Investment-property upgrades", "Accessibility improvements"],
    faqs: [
      { question: "Do renovations in Calgary require permits?", answer: "Permit needs depend on structural, plumbing, electrical and other regulated work. We review the proposed scope and coordinate required applications or inspections when included in the project." },
      { question: "How long does a kitchen or bathroom renovation take?", answer: "A focused update may take a few weeks, while layout changes, custom materials and trade coordination take longer. We provide a project sequence before work starts." },
      { question: "Can I stay at home during a renovation?", answer: "Often, but it depends on which rooms, utilities and access routes are affected. We discuss dust control, working areas and temporary disruptions during planning." },
      { question: "How do you estimate a renovation budget?", answer: "We break the project into demolition, materials, labour, trade work and finishing. A clear scope helps you compare options and identify allowances before approving the work." },
      { question: "Do you manage renovations outside Calgary?", answer: areaAnswer },
    ],
  },
  demolition: {
    title: "Light Demolition",
    metaTitle: "Light Demolition Services in Calgary",
    metaDescription: "Interior light demolition in Calgary for walls, cabinets, flooring and fixtures. Site protection, debris removal and free estimates.",
    summary: "Controlled interior demolition and debris removal to prepare Calgary spaces for renovation.",
    detail: "We isolate work areas, remove agreed fixtures and finishes, and leave the site ready for the next trade. Structural or hazardous-material concerns are identified before removal.",
    includes: ["Non-structural wall removal", "Fixture and cabinet removal", "Flooring and ceiling removal", "Site protection", "Debris hauling and disposal", "Renovation preparation"],
    bestFor: ["Pre-renovation preparation", "Floor-plan updates", "Old fixture removal", "Commercial interior refreshes"],
    faqs: [
      { question: "Can you remove a load-bearing wall?", answer: "Load-bearing walls require structural review and may require engineering and permits. We identify potential structural concerns before work and coordinate the appropriate next steps rather than removing them blindly." },
      { question: "Is debris removal included with light demolition?", answer: "Yes, debris loading and disposal can be included in your estimate. We also clarify site protection, access and any material-separation requirements." },
      { question: "What happens if asbestos or mould is discovered?", answer: "Work should pause in the affected area. Specialized testing or remediation may be required before demolition continues, and we can help coordinate that next step." },
      { question: "How long does interior demolition take?", answer: "A small fixture or flooring removal may take a day, while multi-room demolition takes longer. Access, disposal and unknown conditions affect the final schedule." },
      { question: "Where do you offer light demolition services?", answer: areaAnswer },
    ],
  },
  carpentry: {
    title: "Finish Carpentry",
    metaTitle: "Finish Carpentry Services in Calgary",
    metaDescription: "Finish carpentry in Calgary for trim, crown moulding, built-ins, wall panelling and custom storage. Request a free estimate.",
    summary: "Detailed trim, moulding, built-ins and custom woodwork that complete your interior.",
    detail: "We measure, plan proportions and finish each joint with care. Projects can match existing profiles or introduce a new style, using materials suited to the design and budget.",
    includes: ["Crown moulding", "Baseboards and trim", "Wainscoting and wall panels", "Built-in shelving", "Door casing", "Custom closet systems"],
    bestFor: ["Renovation finishing", "Custom storage", "Architectural detail", "Home office and media walls"],
    faqs: [
      { question: "Can you match existing trim and moulding?", answer: "We first check the profile, dimensions and material. Many standard profiles can be sourced; older or custom designs may require a close alternative or custom milling." },
      { question: "Do you build custom shelves and storage?", answer: "Yes. We plan built-ins around your measurements, storage needs, finish and budget, then confirm the design details before construction." },
      { question: "What materials are available for finish carpentry?", answer: "Options can include MDF, pine, oak, maple and other materials. The best choice depends on paint or stain, durability, movement and budget." },
      { question: "How much do built-ins or finish carpentry cost?", answer: "Cost depends on dimensions, material, design complexity, finish and installation conditions. We provide a scope and estimate after reviewing your measurements and inspiration." },
      { question: "Do you provide finish carpentry near Calgary?", answer: areaAnswer },
    ],
  },
  "doors-windows": {
    title: "Doors & Windows Installation",
    metaTitle: "Doors & Windows Installation in Calgary",
    metaDescription: "Door and window installation in Calgary for entry, interior, patio and replacement projects. Weather sealing and free estimates.",
    summary: "Door and window replacement with careful fitting, sealing, hardware and clean finishing.",
    detail: "We check measurements, opening condition and product requirements before installation. The scope can include removal, disposal, weatherstripping, casing and final adjustments.",
    includes: ["Entry door installation", "Interior door installation", "Window replacement", "Patio and sliding doors", "Hardware installation", "Weatherstripping and sealing"],
    bestFor: ["Drafty or damaged windows", "Entry-door upgrades", "Interior renovations", "Patio access improvements"],
    faqs: [
      { question: "How long does door or window replacement take?", answer: "Many standard replacements are completed within hours per unit, but repairs, custom sizes and finishing extend the schedule. We confirm timing after checking the openings." },
      { question: "Do you remove old doors and windows?", answer: "Yes, removal and disposal can be included in the installation estimate, along with cleanup and basic finishing identified in the scope." },
      { question: "Can windows and doors be installed during winter?", answer: "Yes, many replacements can be scheduled year-round. We plan each opening to limit heat loss and follow product requirements for sealants and cold-weather installation." },
      { question: "How do I choose energy-efficient windows for Calgary?", answer: "Compare the product's energy ratings, glazing, frame, orientation and installation requirements. We help review suitable options without assuming one package fits every opening." },
      { question: "Which areas do you serve for door and window installation?", answer: areaAnswer },
    ],
  },
  siding: {
    title: "Siding & Exterior Work",
    metaTitle: "Siding & Exterior Services in Calgary",
    metaDescription: "Siding installation and repair in Calgary, including vinyl, fibre cement, fascia, soffit, trim and weatherproofing. Free estimates.",
    summary: "Siding, fascia, soffit and exterior repairs designed for Calgary weather and curb appeal.",
    detail: "We inspect the exterior, identify damaged sections and review the wall system before recommending repair or replacement. Materials and details are selected for the existing building.",
    includes: ["Vinyl siding installation", "Fibre-cement siding", "Fascia and soffit", "Siding repair and replacement", "Exterior trim", "Caulking and weatherproofing"],
    bestFor: ["Storm and impact damage", "Exterior modernization", "Maintenance upgrades", "Improving curb appeal"],
    faqs: [
      { question: "What siding works well in Calgary's climate?", answer: "Vinyl and fibre cement are common options, but product quality, wall construction, exposure and installation details matter. We compare suitable materials for your property and budget." },
      { question: "Can you replace only damaged siding sections?", answer: "Often, yes. We check the wall condition and whether a suitable colour and profile match is available before recommending a localized repair or broader replacement." },
      { question: "When is the best season for siding work?", answer: "Many exterior projects are scheduled in milder weather, though repairs may be possible outside that period. Product requirements and safe working conditions guide the schedule." },
      { question: "What affects a siding replacement estimate?", answer: "Wall area, stories, removal, repairs, insulation, trim, material and access all affect pricing. We review these items before presenting the scope." },
      { question: "Do you offer siding services outside Calgary?", answer: areaAnswer },
    ],
  },
  "decks-fences": {
    title: "Decks & Fences",
    metaTitle: "Deck & Fence Services in Calgary",
    metaDescription: "Custom decks and fences in Calgary, including wood and composite construction, repairs, railings and stairs. Request a free estimate.",
    summary: "Custom deck and fence construction, repairs and refinishing for Calgary outdoor spaces.",
    detail: "We plan layout, materials, stairs, railings and privacy around how you use the space. Permit requirements and existing structures are reviewed before construction.",
    includes: ["Custom deck construction", "Wood and composite options", "Privacy and decorative fencing", "Deck repairs and refinishing", "Railings and stairs", "Pergolas and outdoor structures"],
    bestFor: ["Outdoor entertaining", "Backyard privacy", "Aging deck or fence replacement", "Property improvements"],
    faqs: [
      { question: "Should I choose a wood or composite deck?", answer: "Wood offers a natural look and different upfront cost; composite can reduce some maintenance. We compare appearance, lifespan expectations, care and budget for your design." },
      { question: "Does a new deck or fence need a permit in Calgary?", answer: "Requirements depend on height, size, location and design. We review the project and confirm current City of Calgary requirements before construction when permit coordination is included." },
      { question: "Can you repair an existing deck instead of replacing it?", answer: "Yes, if the structure is suitable for repair. We inspect framing, footings, boards, stairs and railings before recommending targeted repairs or replacement." },
      { question: "How long does deck or fence construction take?", answer: "Small repairs may take a day or two; new builds commonly require several days or more. Design, permits, weather, material availability and site access affect timing." },
      { question: "Where do you build decks and fences?", answer: areaAnswer },
    ],
  },
  cleaning: {
    title: "Cleaning Services",
    metaTitle: "Residential & Commercial Cleaning Services in Calgary",
    metaDescription: "House, deep, move-out, post-construction and small-office cleaning in Calgary. Flexible scopes and free cleaning estimates.",
    summary: "Residential and small commercial cleaning for routine upkeep, moves, deep cleans and post-construction spaces.",
    detail: "We build a checklist around your rooms, priorities and frequency. One-time and recurring visits can cover kitchens, bathrooms, floors, surfaces and renovation dust.",
    includes: ["Recurring house cleaning", "Deep cleaning", "Move-in and move-out cleaning", "Post-construction cleanup", "Small-office cleaning", "Window and surface cleaning"],
    bestFor: ["Busy households", "Tenant turnover", "Post-renovation cleanup", "Small commercial spaces"],
    faqs: [
      { question: "Do you bring cleaning supplies and equipment?", answer: "Yes, supplies and equipment can be included in the agreed service. Tell us about allergies, delicate surfaces or preferred products when building your checklist." },
      { question: "Can I book weekly, biweekly or one-time cleaning?", answer: "Yes. We offer one-time and recurring options, including weekly, biweekly and monthly visits, subject to scheduling availability and your property's needs." },
      { question: "What does post-construction cleaning include?", answer: "The checklist can include dust removal, floors, fixtures, cabinets, interior windows and surface detailing. We first review the site condition and any remaining trade work." },
      { question: "How is a cleaning estimate calculated?", answer: "We consider property size, condition, service type, frequency, access and your priority checklist. Recurring and one-time services are scoped separately." },
      { question: "Which areas do you serve for cleaning services?", answer: areaAnswer },
    ],
  },
  "snow-removal": {
    title: "Snow Removal",
    metaTitle: "Snow Removal Services in Calgary",
    metaDescription: "Snow removal in Calgary for driveways, walkways, entrances and small commercial properties. One-time and seasonal options with ice control.",
    summary: "Snow clearing for driveways, walkways, steps, entrances and small commercial properties.",
    detail: "Choose one-time clearing or ask about recurring and seasonal service. We confirm priority areas, access, service expectations and optional ice control before work begins.",
    includes: ["Driveway snow clearing", "Walkway and sidewalk shovelling", "Entrance and step clearing", "Small commercial areas", "One-time and seasonal options", "Ice-control options"],
    bestFor: ["Homeowners and seniors", "Landlords and property managers", "Small-business entrances", "Recurring winter maintenance"],
    faqs: [
      { question: "Do you offer seasonal snow removal contracts in Calgary?", answer: "Yes, one-time, recurring and seasonal options are available. We confirm the service trigger, visit expectations, priority areas and pricing before recurring service starts." },
      { question: "Which parts of my property can you clear?", answer: "We can clear driveways, walkways, sidewalks, steps, entrances and small commercial areas. Your estimate identifies exactly where snow should be cleared and placed." },
      { question: "Can snow removal include ice control?", answer: "Yes, ice-control options can be added based on the surface and site conditions. Tell us about recurring icy areas so they are included in the service plan." },
      { question: "How much does snow removal cost in Calgary?", answer: "Pricing depends on property size, areas cleared, snowfall, access, service frequency and ice control. We provide separate options for one-time and recurring service." },
      { question: "Do you provide snow removal outside Calgary?", answer: areaAnswer },
    ],
  },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !servicesData[slug]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[slug];
  const canonical = `/services/${slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle,
    description: service.metaDescription,
    serviceType: service.title,
    provider: { "@type": "Organization", name: "RCW Integrated Solutions" },
    areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
    url: canonical,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: canonical },
    ],
  };

  return (
    <Layout>
      <Helmet>
        <title>{service.metaTitle} | RCW Integrated Solutions</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${service.metaTitle} | RCW Integrated Solutions`} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={serviceImages[slug]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/45" />
        </div>
        <div className="container-custom relative z-10 py-14 sm:py-16 md:py-24">
          <nav className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-background/70" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-background">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-background">Services</Link>
            <span>/</span>
            <span className="text-background">{service.title}</span>
          </nav>
          <h1 className="max-w-3xl text-balance font-heading text-3xl font-bold text-background sm:text-4xl md:text-5xl">
            {service.metaTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">
            {service.summary}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a href="#service-estimate">Get a Free Estimate<ArrowRight /></a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#service-faq">Read Service FAQs</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="container-custom px-0 md:px-0 lg:px-0">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] xl:gap-12">
            <div className="min-w-0">
              <p className="max-w-3xl text-base leading-relaxed text-body sm:text-lg">{service.detail}</p>

              <div className="mt-10">
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">{service.title} in Calgary: What&apos;s Included</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-lg bg-section-alt p-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-body sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">{service.title} for Homes & Small Businesses</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.bestFor.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">{item}</span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">Our {service.title} Process</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { step: "1", title: "Tell Us What You Need", desc: "Call or send the short form." },
                    { step: "2", title: "Review the Scope", desc: "Photos or a site visit if needed." },
                    { step: "3", title: "Receive Your Quote", desc: "Clear pricing and next steps." },
                  ].map((item) => (
                    <div key={item.step} className="rounded-xl border border-border p-4 sm:text-center">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground sm:mx-auto">{item.step}</div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-body">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="service-faq" className="mt-12 scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">{service.title} FAQ in Calgary</h2>
                <p className="mt-2 text-sm text-body">Quick answers about cost, timing, preparation and service areas.</p>
                <Accordion type="single" collapsible className="mt-4 rounded-xl border border-border px-4">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger className="py-4 text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                      <AccordionContent className="leading-relaxed text-body">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <aside id="service-estimate" className="min-w-0 scroll-mt-24 rounded-2xl border border-border bg-card p-4 shadow-card sm:p-6 lg:sticky lg:top-24">
              <h2 className="font-heading text-xl font-bold">Get a {service.title} Estimate</h2>
              <p className="mt-2 text-sm text-body">Three short steps. Free and no obligation.</p>
              <div className="mt-5">
                <EstimateForm preselectedService={service.title} compact />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}

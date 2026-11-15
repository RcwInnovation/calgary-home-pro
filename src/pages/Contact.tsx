import { Layout } from "@/components/layout/Layout";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="gradient-primary py-12 sm:py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Get in touch for a free estimate or to discuss your project with our team.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8 sm:pt-12 md:pt-16">
        <div className="container-custom">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">Get in Touch</h2>
              <p className="mt-4 text-body">
                Have a question or ready to start your project? Reach out using any of the methods below, or fill out the short form and we&apos;ll get back to you within 24-48 hours.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a href="tel:+14031234567" className="card-elevated group flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                  <div className="min-w-0"><h3 className="font-semibold">Phone</h3><p className="mt-1 break-words text-body group-hover:text-primary">(403) 123-4567</p></div>
                </a>
                <a href="mailto:info@ninajean.ca" className="card-elevated group flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                  <div className="min-w-0"><h3 className="font-semibold">Email</h3><p className="mt-1 break-words text-body group-hover:text-primary">info@ninajean.ca</p></div>
                </a>
                <div className="flex items-start gap-4 rounded-xl bg-section-alt p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div><h3 className="font-semibold">Service Area</h3><p className="mt-1 text-body">Calgary, Alberta &amp; Surrounding Communities</p></div>
                </div>
                <div className="flex items-start gap-4 rounded-xl bg-section-alt p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"><Clock className="h-6 w-6 text-primary" /></div>
                  <div><h3 className="font-semibold">Business Hours</h3><div className="mt-1 space-y-1 text-sm text-body"><p>Monday - Friday: 7:00 AM - 6:00 PM</p><p>Saturday: 8:00 AM - 4:00 PM</p><p>Sunday: Closed</p></div></div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-foreground p-6 text-background">
                <h3 className="font-heading text-xl font-semibold text-background">Prefer to talk it through?</h3>
                <p className="mt-2 text-sm text-background/70">Call us and tell us what you need. We&apos;ll help you choose the right next step.</p>
                <a href="tel:+14031234567" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">Call now<ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>

            <div id="estimate-form" className="order-1 min-w-0 scroll-mt-24 rounded-2xl border border-border bg-card p-4 shadow-card sm:p-6 md:p-8 lg:order-2">
              <h2 className="font-heading text-2xl font-bold">Get Your Free Estimate</h2>
              <p className="mt-2 text-sm text-body">Three short steps. No obligation. Tell us what you need and we&apos;ll prepare a detailed quote.</p>
              <div className="mt-6"><EstimateForm /></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  "Restoration Services",
  "Painting (Interior & Exterior)",
  "Concrete Services",
  "Drywall & Taping",
  "Flooring Installation",
  "Renovations & Remodeling",
  "Light Demolition",
  "Finish Carpentry",
  "Doors & Windows Installation",
  "Siding & Exterior Work",
  "Decks & Fences",
  "Cleaning Services",
  "Snow Removal",
  "Other",
];

interface EstimateFormProps {
  preselectedService?: string;
  compact?: boolean;
}

interface EstimateFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  postalCode: string;
  service: string;
  propertyType: string;
  urgency: string;
  description: string;
  budget: string;
  contactMethod: string;
}

type FormErrors = Partial<Record<keyof EstimateFormData | "consent", string>>;

const initialData: EstimateFormData = {
  fullName: "",
  phone: "",
  email: "",
  city: "Calgary",
  postalCode: "",
  service: "",
  propertyType: "",
  urgency: "",
  description: "",
  budget: "",
  contactMethod: "",
};

const stepLabels = ["Contact", "Project", "Details"];

export function EstimateForm({ preselectedService, compact = false }: EstimateFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<EstimateFormData>({
    ...initialData,
    service: preselectedService || "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((current) => ({ ...current, service: preselectedService }));
    }
  }, [preselectedService]);

  const updateField = (field: keyof EstimateFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validateStep = (stepToValidate: number) => {
    const nextErrors: FormErrors = {};

    if (stepToValidate === 1) {
      if (formData.fullName.trim().length < 2) nextErrors.fullName = "Please enter your full name.";
      if (formData.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a phone number with at least 10 digits.";
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = "Enter a valid email address.";
    }

    if (stepToValidate === 2) {
      if (!formData.service) nextErrors.service = "Select the service you need.";
      if (!formData.propertyType) nextErrors.propertyType = "Select your property type.";
      if (!formData.urgency) nextErrors.urgency = "Select your preferred timeline.";
      if (!formData.city.trim()) nextErrors.city = "Enter your city.";
      if (!formData.postalCode.trim()) nextErrors.postalCode = "Enter your postal code.";
    }

    if (stepToValidate === 3) {
      if (formData.description.trim().length < 10) nextErrors.description = "Add a few details so we can understand your project.";
      if (!formData.contactMethod) nextErrors.contactMethod = "Choose how you would like us to contact you.";
      if (!consent) nextErrors.consent = "Please agree to be contacted about your estimate.";
    }

    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      window.setTimeout(() => {
        formRef.current?.querySelector<HTMLElement>(`[data-field="${firstError}"]`)?.focus();
      }, 0);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((current) => Math.min(current + 1, 3));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (step < 3) {
      handleNext();
      return;
    }
    if (!validateStep(3)) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ ...initialData, service: preselectedService || "" });
    setConsent(false);
    setErrors({});
    setStep(1);
    setSubmitted(false);
  };

  const errorMessage = (field: keyof FormErrors) =>
    errors[field] ? <p id={`${field}-error`} role="alert" className="text-sm text-destructive">{errors[field]}</p> : null;

  if (submitted) {
    return (
      <div className="rounded-xl bg-secondary p-6 text-center sm:p-8" role="status">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">Thank you, {formData.fullName.split(" ")[0]}!</h3>
        <p className="mt-2 text-muted-foreground">
          Your estimate request has been received. We&apos;ll get back to you within 24–48 hours using your preferred contact method.
        </p>
        <Button variant="outline" className="mt-6 h-12" onClick={resetForm}>Request another estimate</Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="scroll-mt-24 space-y-5">
      <div aria-label={`Step ${step} of 3: ${stepLabels[step - 1]}`}>
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-semibold text-foreground">{stepLabels[step - 1]}</span>
          <span className="text-muted-foreground">Step {step} of 3</span>
        </div>
        <div className="mt-2 flex gap-2" aria-hidden="true">
          {stepLabels.map((label, index) => (
            <span key={label} className={`h-1.5 flex-1 rounded-full ${index < step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="animate-fade-in space-y-4">
          <div>
            <h3 className="font-heading text-lg font-semibold">How can we reach you?</h3>
            <p className="mt-1 text-sm text-body">We&apos;ll only use these details to discuss your estimate.</p>
          </div>
          <div className={compact ? "space-y-4" : "grid gap-4 md:grid-cols-2"}>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="fullName">Full name *</Label>
              <Input id="fullName" data-field="fullName" autoComplete="name" placeholder="John Smith" className="h-12 text-base" value={formData.fullName} onChange={(event) => updateField("fullName", event.target.value)} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
              {errorMessage("fullName")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number *</Label>
              <Input id="phone" data-field="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(403) 123-4567" className="h-12 text-base" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
              {errorMessage("phone")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address *</Label>
              <Input id="email" data-field="email" type="email" inputMode="email" autoComplete="email" placeholder="john@example.com" className="h-12 text-base" value={formData.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              {errorMessage("email")}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in space-y-4">
          <div>
            <h3 className="font-heading text-lg font-semibold">Tell us about your project</h3>
            <p className="mt-1 text-sm text-body">A few quick details help us prepare the right estimate.</p>
          </div>
          <div className={compact ? "space-y-4" : "grid gap-4 md:grid-cols-2"}>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="service">Service needed *</Label>
              <Select value={formData.service} onValueChange={(value) => updateField("service", value)}>
                <SelectTrigger id="service" data-field="service" className="h-12 text-base" aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>{services.map((service) => <SelectItem key={service} value={service} className="min-h-11">{service}</SelectItem>)}</SelectContent>
              </Select>
              {errorMessage("service")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property type *</Label>
              <Select value={formData.propertyType} onValueChange={(value) => updateField("propertyType", value)}>
                <SelectTrigger id="propertyType" data-field="propertyType" className="h-12 text-base" aria-invalid={!!errors.propertyType} aria-describedby={errors.propertyType ? "propertyType-error" : undefined}><SelectValue placeholder="Select property type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="house" className="min-h-11">House</SelectItem>
                  <SelectItem value="condo" className="min-h-11">Condo</SelectItem>
                  <SelectItem value="commercial" className="min-h-11">Commercial</SelectItem>
                  <SelectItem value="other" className="min-h-11">Other</SelectItem>
                </SelectContent>
              </Select>
              {errorMessage("propertyType")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency">Preferred timeline *</Label>
              <Select value={formData.urgency} onValueChange={(value) => updateField("urgency", value)}>
                <SelectTrigger id="urgency" data-field="urgency" className="h-12 text-base" aria-invalid={!!errors.urgency} aria-describedby={errors.urgency ? "urgency-error" : undefined}><SelectValue placeholder="When do you need this?" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap" className="min-h-11">As soon as possible</SelectItem>
                  <SelectItem value="1-2-weeks" className="min-h-11">Within 1–2 weeks</SelectItem>
                  <SelectItem value="1-month" className="min-h-11">Within 1 month</SelectItem>
                  <SelectItem value="seasonal" className="min-h-11">Seasonal / recurring service</SelectItem>
                  <SelectItem value="flexible" className="min-h-11">I&apos;m flexible</SelectItem>
                </SelectContent>
              </Select>
              {errorMessage("urgency")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input id="city" data-field="city" autoComplete="address-level2" className="h-12 text-base" value={formData.city} onChange={(event) => updateField("city", event.target.value)} aria-invalid={!!errors.city} aria-describedby={errors.city ? "city-error" : undefined} />
              {errorMessage("city")}
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal code *</Label>
              <Input id="postalCode" data-field="postalCode" autoComplete="postal-code" placeholder="T2P 1A1" className="h-12 text-base uppercase" value={formData.postalCode} onChange={(event) => updateField("postalCode", event.target.value)} aria-invalid={!!errors.postalCode} aria-describedby={errors.postalCode ? "postalCode-error" : undefined} />
              {errorMessage("postalCode")}
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="budget">Estimated budget <span className="font-normal text-muted-foreground">(optional)</span></Label>
              <Input id="budget" inputMode="text" placeholder="e.g., $5,000–$10,000" className="h-12 text-base" value={formData.budget} onChange={(event) => updateField("budget", event.target.value)} />
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in space-y-4">
          <div>
            <h3 className="font-heading text-lg font-semibold">Final details</h3>
            <p className="mt-1 text-sm text-body">Share anything that will help us understand the work.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Project description *</Label>
            <Textarea id="description" data-field="description" placeholder="What would you like done? Include approximate sizes, current conditions, or any specific concerns." className="min-h-[130px] text-base" value={formData.description} onChange={(event) => updateField("description", event.target.value)} aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined} />
            <div className="flex items-center justify-between gap-3">
              {errorMessage("description")}
              <span className="ml-auto text-xs text-muted-foreground">{formData.description.length} characters</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactMethod">Preferred contact method *</Label>
            <Select value={formData.contactMethod} onValueChange={(value) => updateField("contactMethod", value)}>
              <SelectTrigger id="contactMethod" data-field="contactMethod" className="h-12 text-base" aria-invalid={!!errors.contactMethod} aria-describedby={errors.contactMethod ? "contactMethod-error" : undefined}><SelectValue placeholder="How should we contact you?" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="call" className="min-h-11">Phone call</SelectItem>
                <SelectItem value="text" className="min-h-11">Text message</SelectItem>
                <SelectItem value="email" className="min-h-11">Email</SelectItem>
              </SelectContent>
            </Select>
            {errorMessage("contactMethod")}
          </div>
          <div className="rounded-xl bg-section-alt p-4">
            <div className="flex items-start gap-3">
              <Checkbox id="consent" data-field="consent" checked={consent} onCheckedChange={(checked) => { setConsent(checked === true); if (checked) setErrors((current) => ({ ...current, consent: undefined })); }} className="mt-0.5 h-5 w-5" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-error" : undefined} />
              <Label htmlFor="consent" className="text-sm font-normal leading-relaxed text-muted-foreground">I agree to be contacted by Ninajean Maintenance &amp; Renovation about this estimate request.</Label>
            </div>
            <div className="mt-2">{errorMessage("consent")}</div>
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-1">
        {step > 1 && <Button type="button" variant="outline" size="lg" className="h-12 flex-1 px-4 sm:flex-none" onClick={() => { setErrors({}); setStep((current) => current - 1); }}><ArrowLeft className="h-4 w-4" />Back</Button>}
        {step < 3 ? (
          <Button type="button" size="lg" className="h-12 flex-1 px-5" onClick={handleNext}>Continue<ArrowRight className="h-4 w-4" /></Button>
        ) : (
          <Button type="submit" size="lg" className="h-12 flex-1 px-5">Get Your Free Estimate<ArrowRight className="h-4 w-4" /></Button>
        )}
      </div>
      <p className="text-center text-xs text-muted-foreground">Free, no-obligation estimate · Response within 24–48 hours</p>
    </form>
  );
}

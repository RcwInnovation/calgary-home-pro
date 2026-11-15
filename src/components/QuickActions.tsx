import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Download, Mail, Phone, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function QuickActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installHelpOpen, setInstallHelpOpen] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    const handleInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    setIsInstalled(window.matchMedia("(display-mode: standalone)").matches);
    window.addEventListener("beforeinstallprompt", handleInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleInstall = async () => {
    if (!installPrompt) {
      setInstallHelpOpen(true);
      return;
    }

    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6">
        {isOpen && (
          <div
            id="quick-contact-actions"
            className="card-elevated absolute bottom-[4.5rem] left-0 w-[min(18rem,calc(100vw-2rem))] animate-slide-up p-3"
          >
            <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              How can we help?
            </p>
            <div className="space-y-2">
              <Button className="h-12 w-full justify-start" asChild>
                <Link to="/contact">
                  <ArrowRight className="h-5 w-5" />
                  Get a Free Estimate
                </Link>
              </Button>
              <Button variant="outline" className="h-12 w-full justify-start" asChild>
                <a href="tel:+14031234567">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" className="h-12 w-full justify-start" asChild>
                <a href="mailto:info@ninajean.ca?subject=Free%20Estimate%20Request">
                  <Mail className="h-5 w-5" />
                  Send an Email
                </a>
              </Button>
              {!isInstalled && (
                <Button variant="secondary" className="h-12 w-full justify-start" onClick={handleInstall}>
                  <Download className="h-5 w-5" />
                  Install App
                </Button>
              )}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-expanded={isOpen}
          aria-controls="quick-contact-actions"
          aria-label={isOpen ? "Close quick contact options" : "Open quick contact options"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          {isOpen ? "Close" : "Contact"}
        </button>
      </div>

      <Dialog open={installHelpOpen} onOpenChange={setInstallHelpOpen}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle>Install the Ninajean app</DialogTitle>
            <DialogDescription>
              Add this website to your home screen for quick access. No app store download is needed.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm text-body">
            <div className="rounded-xl bg-section-alt p-4">
              <p className="font-semibold text-foreground">iPhone or iPad</p>
              <p className="mt-1">Tap Share in Safari, then choose “Add to Home Screen”.</p>
            </div>
            <div className="rounded-xl bg-section-alt p-4">
              <p className="font-semibold text-foreground">Android or computer</p>
              <p className="mt-1">Open the browser menu, then choose “Install app” or “Add to Home Screen”.</p>
            </div>
          </div>
          <Button className="h-12 w-full" onClick={() => setInstallHelpOpen(false)}>Got it</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

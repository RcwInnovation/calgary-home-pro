import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const knowledgeBase = {
  services: [
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
  ],
  areas: ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"],
  contact: {
    phone: "(403) 123-4567",
    email: "info@ninajean.ca",
    hours: "Mon - Sat: 7:00 AM - 6:00 PM",
  },
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  // Greetings
  if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey") ||
    lowerMessage.includes("hola")
  ) {
    return "Hello! Welcome to Ninajean Maintenance & Renovation. How can I help you today? I can answer questions about our services, service areas, or help you get a free estimate.";
  }

  // Services
  if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("what do you do") ||
    lowerMessage.includes("offer")
  ) {
    return `We offer a wide range of professional maintenance and renovation services in Calgary:\n\n${knowledgeBase.services.map((s) => `• ${s}`).join("\n")}\n\nWould you like more details about any specific service?`;
  }

  // Painting
  if (lowerMessage.includes("paint")) {
    return "Our professional painting services include interior and exterior painting for homes and commercial properties. We handle surface preparation, priming, and use high-quality paints for lasting results. Visit our Painting page or request a free estimate!";
  }

  // Concrete
  if (lowerMessage.includes("concrete") || lowerMessage.includes("driveway")) {
    return "We provide concrete services including driveways, patios, walkways, foundations, and repair work. Our team ensures proper preparation and finishing for durable results. Contact us for a free estimate!";
  }

  // Renovation
  if (
    lowerMessage.includes("renovate") ||
    lowerMessage.includes("renovation") ||
    lowerMessage.includes("remodel")
  ) {
    return "We specialize in kitchen, bathroom, basement, and whole-home renovations. From planning to completion, we handle every aspect of your remodeling project. Get a free estimate to discuss your vision!";
  }

  // Flooring
  if (lowerMessage.includes("floor")) {
    return "Our flooring services include hardwood, laminate, tile, vinyl, and carpet installation and repair. We ensure proper subfloor preparation and precise installation. Request a free estimate today!";
  }

  // Drywall
  if (lowerMessage.includes("drywall") || lowerMessage.includes("taping")) {
    return "We offer expert drywall installation, repair, taping, and finishing services. Whether it's new construction or repairs, we deliver smooth, professional results.";
  }

  // Deck or Fence
  if (
    lowerMessage.includes("deck") ||
    lowerMessage.includes("fence") ||
    lowerMessage.includes("outdoor")
  ) {
    return "We build custom decks, fences, and outdoor living spaces. From design to construction, we create beautiful and durable outdoor areas for your property.";
  }

  // Areas
  if (
    lowerMessage.includes("area") ||
    lowerMessage.includes("where") ||
    lowerMessage.includes("location") ||
    lowerMessage.includes("city") ||
    lowerMessage.includes("serve")
  ) {
    return `We proudly serve Calgary and surrounding communities:\n\n${knowledgeBase.areas.map((a) => `• ${a}`).join("\n")}\n\nContact us to confirm service availability in your area!`;
  }

  // Contact
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("call") ||
    lowerMessage.includes("email")
  ) {
    return `You can reach us at:\n\n📞 Phone: ${knowledgeBase.contact.phone}\n📧 Email: ${knowledgeBase.contact.email}\n🕐 Hours: ${knowledgeBase.contact.hours}\n\nOr use our online form to request a free estimate!`;
  }

  // Estimate / Quote
  if (
    lowerMessage.includes("estimate") ||
    lowerMessage.includes("quote") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("how much")
  ) {
    return "We offer free, no-obligation estimates! Fill out our estimate form on the Contact page or any service page, and we'll respond within 24-48 hours with a detailed quote. You can also call us at (403) 123-4567.";
  }

  // Hours
  if (lowerMessage.includes("hour") || lowerMessage.includes("open")) {
    return `Our business hours are ${knowledgeBase.contact.hours}. Feel free to call us or submit an estimate request anytime!`;
  }

  // Thank you
  if (lowerMessage.includes("thank")) {
    return "You're welcome! If you have any other questions, feel free to ask. We're here to help with your maintenance and renovation needs!";
  }

  // Default response
  return "Thank you for your message! I can help you with information about our services, service areas, estimates, and contact details. What would you like to know more about?";
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 Welcome to Ninajean Maintenance & Renovation. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(input);
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[450px] w-[350px] flex-col overflow-hidden rounded-2xl bg-background shadow-2xl sm:h-[500px] sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">
                Ninajean Assistant
              </h3>
              <p className="text-xs text-primary-foreground/70">
                We typically reply instantly
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

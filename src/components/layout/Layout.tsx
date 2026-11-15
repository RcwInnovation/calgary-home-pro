import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBot } from "@/components/chat/ChatBot";
import { QuickActions } from "@/components/QuickActions";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <QuickActions />
      <ChatBot />
    </div>
  );
}

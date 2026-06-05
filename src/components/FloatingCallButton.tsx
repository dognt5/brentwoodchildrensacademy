import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:713-466-9407"
      aria-label="Call us at 713-466-9407"
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
    >
      <Phone className="w-6 h-6" strokeWidth={2.5} />
    </a>
  );
};

export default FloatingCallButton;

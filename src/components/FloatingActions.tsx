import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "923338581087";
const WHATSAPP_TEXT =
  "Hello Dawud Niaz Engineers & Contractors, I would like to discuss a project.";

/** WhatsApp chat button (all pages) plus a back-to-top button that appears after scrolling. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
        className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-card text-gold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-primary-foreground ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="whatsapp-float pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="relative h-8 w-8 fill-current">
          <path d="M16.04 3C8.9 3 3.1 8.78 3.1 15.9c0 2.27.6 4.49 1.74 6.45L3 29l6.83-1.79a13 13 0 0 0 6.2 1.57h.01c7.13 0 12.94-5.79 12.94-12.91 0-3.45-1.35-6.69-3.79-9.12A12.85 12.85 0 0 0 16.04 3Zm0 23.57h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.05 1.06 1.08-3.95-.25-.41a10.67 10.67 0 0 1-1.64-5.65c0-5.9 4.81-10.7 10.72-10.7 2.86 0 5.55 1.12 7.57 3.14a10.63 10.63 0 0 1 3.13 7.57c0 5.9-4.81 10.66-10.71 10.66Zm5.88-8.01c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" />
        </svg>
        <span className="whatsapp-tooltip pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-card px-3 py-2 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import CompanyPageShell from "@/components/CompanyPageShell";
import {
  BUSINESS,
  MAPS_EMBED_URL,
  MAPS_QUERY,
  SITE_NAME,
  breadcrumbLd,
  businessLd,
  pageHead,
} from "@/lib/seo";
import { services, servicePath } from "@/content/services";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Us | Construction Company in Lahore | Dawud Niaz",
      description:
        "Contact Dawud Niaz Associates Engineers and Contractors in Lahore by phone, WhatsApp or email to discuss architectural drawings, estimation, BOQ or construction work.",
      path: "/contact",
      jsonLd: [
        businessLd(services.map((s) => ({ name: s.name, path: servicePath(s.slug) }))),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

const whatsapp = `https://wa.me/${BUSINESS.phone.replace("+", "")}?text=${encodeURIComponent(
  "Hello Dawud Niaz Associates Engineers and Contractors, I would like to discuss a project.",
)}`;
const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;

function ContactPage() {
  const items = [
    {
      Icon: MapPin,
      label: "Office",
      text: `${BUSINESS.street}, ${BUSINESS.city}, Pakistan`,
      href: directions,
    },
    { Icon: Phone, label: "Phone", text: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}` },
    { Icon: MessageCircle, label: "WhatsApp", text: "Message us on WhatsApp", href: whatsapp },
    { Icon: Mail, label: "Email", text: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  ];
  return (
    <CompanyPageShell
      eyebrow="Contact"
      title="Talk to our team in Lahore"
      intro="Tell us about your plot, drawings or building project. We will review the details and get back to you."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <ul className="space-y-4">
            {items.map(({ Icon, label, text, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-start gap-4 border border-border bg-card p-5 transition-colors hover:border-gold"
                >
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-1 block font-semibold">{text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="mt-8 inline-block bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground"
          >
            Send a project enquiry
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            The enquiry form opens your email app with your message ready to send.
          </p>
        </div>
        <div>
          <div className="overflow-hidden border border-border">
            <iframe
              src={MAPS_EMBED_URL}
              title={`${SITE_NAME} on Google Maps`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-96 w-full"
            />
          </div>
          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-gold hover:underline"
          >
            Get directions
          </a>
        </div>
      </div>
    </CompanyPageShell>
  );
}

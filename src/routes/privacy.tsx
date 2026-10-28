import { createFileRoute } from "@tanstack/react-router";
import CompanyPageShell from "@/components/CompanyPageShell";
import { BUSINESS, breadcrumbLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Dawud Niaz Associates Engineers and Contractors",
      description:
        "How Dawud Niaz Associates Engineers and Contractors handles information when you visit this website or contact us.",
      path: "/privacy",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]),
      ],
    }),
  component: Page,
});

const sections: { heading: string; body: string }[] = [
  {
    heading: "Information you send us",
    body: "When you use the enquiry form, your name, phone number and message are placed into an email in your own email app, and nothing is sent until you press send there. This website does not store form submissions on its own server. If you call, email or message us on WhatsApp, we receive the details you choose to share.",
  },
  {
    heading: "How we use it",
    body: "We use the details you send only to reply to your enquiry and to discuss or deliver the services you ask about. We do not sell your information.",
  },
  {
    heading: "Third-party services",
    body: "This website loads fonts from Google Fonts and an embedded map from Google Maps, and it links to WhatsApp, Facebook and Google. Those services may collect technical data such as your IP address under their own privacy policies. If website analytics is switched on, it is used to understand which pages are visited.",
  },
  {
    heading: "Theme preference",
    body: "The website saves your light or dark mode choice in your browser so that it is remembered on your next visit.",
  },
  {
    heading: "Your choices",
    body: "You can ask us to correct or delete the enquiry details we hold by contacting us at the email address below.",
  },
];

function Page() {
  return (
    <CompanyPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How this website handles your information."
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <p className="text-sm text-muted-foreground">Last updated: 28 October 2026</p>
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl">{s.heading}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{s.body}</p>
          </section>
        ))}
        <p className="leading-7 text-muted-foreground">
          Questions? Email{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-gold hover:underline">
            {BUSINESS.email}
          </a>{" "}
          or call {BUSINESS.phoneDisplay}.
        </p>
      </div>
    </CompanyPageShell>
  );
}

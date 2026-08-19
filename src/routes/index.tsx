import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Problems, Services } from "@/components/site/sections-a";
import { Business, Process } from "@/components/site/business";
import { Course, Income } from "@/components/site/course";
import { ContactForm, Faq, FinalCta } from "@/components/site/faq-contact";
import { Footer, MobileBar } from "@/components/site/footer";

const TITLE = "FARKHADIVICH AI — AI video, neyrofotosessiya va AI kurs";
const DESCRIPTION =
  "FARKHADIVICH AI — bizneslar va ijodkorlar uchun realistik AI videolar, reklama roliklari, neyrofotosessiya, AI multfilm va AI kontent kursi. G‘oyangizni kelajak vizualiga aylantiramiz.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "FARKHADIVICH AI, AI video xizmatlari, AI video Uzbekistan, AI reklama video, neyrofotosessiya, AI multfilm, AI video kurs, AI orqali daromad, AI kreativ xizmatlar, AI video yaratish, personal brand kontent",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "FARKHADIVICH AI",
          description: DESCRIPTION,
          slogan: "G‘oyangizni kelajak vizualiga aylantiramiz.",
          areaServed: "UZ",
          telephone: ["+998937607727", "+998949967760"],
          sameAs: ["https://t.me/farkhadivichai"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <AiVideoExplainer />
        <NeuroPhoto />
        <Portfolio />
        <CaseStudy />
        <Business />
        <Course />
        <Income />
        <SocialProof />
        <Process />
        <Faq />
        <FinalCta />
        <ContactForm />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}

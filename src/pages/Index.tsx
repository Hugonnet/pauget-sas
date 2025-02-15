
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { HeroSlider } from "@/components/HeroSlider";
import { CompanyPresentation } from "@/components/CompanyPresentation";
import { KeyFiguresSection } from "@/components/KeyFiguresSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  console.log("Index page rendered");
  console.log("Helmet being rendered with title");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pauget & Fils | Plâtrerie, Peinture, Isolation à Port (01)</title>
        <meta 
          name="description" 
          content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation à Port. Plus de 25 ans d'expertise, certifiée RGE. Devis gratuit pour vos travaux."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="plâtrerie, peinture, isolation, Port, Ain, rénovation, artisan" />
        <meta property="og:title" content="Pauget & Fils | Artisans Plâtriers Peintres depuis 1997" />
        <meta property="og:description" content="Entreprise familiale spécialisée en plâtrerie, peinture et isolation. Plus de 25 ans d'expertise à votre service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.platrerie-peinture-pauget.fr" />
        <meta property="og:image" content="/lovable-uploads/hero-bg-accueil.webp" />
        <meta property="og:image:alt" content="Pauget & Fils - Artisans plâtriers peintres à Port" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Port" />
        <meta name="geo.position" content="46.16690444946289;5.568050861358643" />
        <meta name="ICBM" content="46.16690444946289, 5.568050861358643" />
        <link rel="canonical" href="https://www.platrerie-peinture-pauget.fr" />
      </Helmet>

      <HeroSlider />
      <CompanyPresentation />
      <KeyFiguresSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 bg-white rounded-lg p-8 shadow-sm">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://www.lespinat-pauget-facades.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-lg text-primary hover:text-primary-hover transition-colors duration-200"
            >
              <span>Retrouvez également nos enduits de façades</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
          <img
            src="/lovable-uploads/lespinat-pauget-logo-transparent.png"
            alt="Lespinat Pauget Facades"
            className="w-[200px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};
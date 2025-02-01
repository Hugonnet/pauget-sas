import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#f9ebde" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white rounded-lg p-8 shadow-sm">
          <img
            src="/lovable-uploads/273e7d36-d8ba-4735-8839-37edf8f5d9cd.png"
            alt="Lespinat Pauget Facades"
            className="w-[300px] object-contain"
          />
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
        </div>
      </div>
    </section>
  );
};
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Pauget et Fils</h3>
            <div className="space-y-2">
              <a
                href="tel:+33474962814"
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
              >
                <Phone size={20} />
                <span>04 74 96 28 14</span>
              </a>
              <a
                href="mailto:contact@paugetetfils.fr"
                className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
              >
                <Mail size={20} />
                <span>contact@paugetetfils.fr</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>
                  ZA Le Grand Champ,
                  <br />
                  01290 Crottet
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/platrerie"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Plâtrerie
                </Link>
              </li>
              <li>
                <Link
                  to="/peintures"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Peintures
                </Link>
              </li>
              <li>
                <Link
                  to="/isolation"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Isolation
                </Link>
              </li>
              <li>
                <Link
                  to="/etancheite"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Étanchéité à l'air
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/partenaires"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Nos partenaires
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Pauget et Fils. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
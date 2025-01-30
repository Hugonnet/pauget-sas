import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonne 1 - Logo et informations */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/lovable-uploads/459a21ce-f9b4-4ef3-8530-2f918b95fae8.png"
              alt="Pauget et Fils"
              className="h-[19.44px] w-auto mb-4"
            />
            <p className="text-gray-600 text-sm">
              © 2025 Pauget et Fils
              <br />
              Tous droits réservés.
            </p>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h3 className="font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/platrerie" className="text-gray-600 hover:text-primary">
                  Plâtrerie
                </Link>
              </li>
              <li>
                <Link to="/peintures" className="text-gray-600 hover:text-primary">
                  Peintures
                </Link>
              </li>
              <li>
                <Link to="/isolation" className="text-gray-600 hover:text-primary">
                  Isolation
                </Link>
              </li>
              <li>
                <Link to="/etancheite" className="text-gray-600 hover:text-primary">
                  Étanchéité
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Informations */}
          <div>
            <h3 className="font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partenaires" className="text-gray-600 hover:text-primary">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contactez-nous</h3>
            <address className="text-gray-600 not-italic">
              <p>123 rue des Artisans</p>
              <p>69000 Lyon</p>
              <p>Tél : 04 72 00 00 00</p>
              <p>Email : contact@paugetetfils.fr</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
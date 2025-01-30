import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <img
            src="/lovable-uploads/459a21ce-f9b4-4ef3-8530-2f918b95fae8.png"
            alt="Pauget et Fils"
            className="h-24 w-auto mb-6"
          />
          <p className="text-gray-600 text-center">
            © {new Date().getFullYear()} Pauget et Fils. Tous droits réservés.
          </p>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Accueil
                </Link>
              </li>
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
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

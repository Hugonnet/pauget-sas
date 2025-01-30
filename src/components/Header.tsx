import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Plâtrerie", path: "/platrerie" },
    {
      name: "Peintures",
      path: "/peintures",
      subItems: [
        { name: "Peintures intérieures", path: "/peintures/interieures" },
        { name: "Peintures extérieures", path: "/peintures/exterieures" },
      ],
    },
    {
      name: "Isolation",
      path: "/isolation",
      subItems: [
        { name: "Isolation intérieure", path: "/isolation/interieure" },
        { name: "Isolation extérieure", path: "/isolation/exterieure" },
      ],
    },
    { name: "Étanchéité à l'air", path: "/etancheite" },
    { name: "Nos réalisations", path: "/realisations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full z-50 shadow-sm" style={{ background: 'linear-gradient(to top, #F9EBDF, #998475)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/459a21ce-f9b4-4ef3-8530-2f918b95fae8.png"
                alt="Pauget et Fils"
                className="h-32 w-auto"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-secondary-foreground hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`text-lg font-medium hover:text-primary transition-colors duration-200 ${
                      location.pathname === item.path ? "text-primary" : "text-secondary-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-60 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="pt-2">
                        <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/459a21ce-f9b4-4ef3-8530-2f918b95fae8.png"
                alt="Pauget et Fils"
                className="h-24 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-secondary-foreground hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-secondary-foreground"
                  }`}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

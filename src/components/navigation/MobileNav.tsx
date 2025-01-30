import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { MenuItem } from "./types";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuItems: MenuItem[];
}

const MobileNav = ({ isOpen, setIsOpen, menuItems }: MobileNavProps) => {
  const location = useLocation();

  return (
    <div
      className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/45177932-0c62-496a-8f4d-dde994c690ba.png"
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
              {!item.disabled ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition-colors duration-200 
                    ${location.pathname === item.path ? "text-white bg-primary" : "text-secondary-foreground hover:text-white"}`}
                >
                  {item.name}
                </Link>
              ) : (
                <span className="block text-lg font-medium text-gray-400 cursor-not-allowed">
                  {item.name}
                </span>
              )}
              {item.subItems && !item.disabled && (
                <div className="pl-4 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-sm transition-colors duration-200
                        ${location.pathname === subItem.path ? "text-white bg-primary" : "text-gray-600 hover:text-white"}`}
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
  );
};

export default MobileNav;
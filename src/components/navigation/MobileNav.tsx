
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
      className={`lg:hidden fixed inset-0 bg-[#F9EBDF] z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8 border-b border-primary/20 pb-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img
              src="/lovable-uploads/45177932-0c62-496a-8f4d-dde994c690ba.png"
              alt="Pauget et Fils"
              className="h-24 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            <X size={32} className="text-primary" />
          </button>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.name} className="space-y-1">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 
                  ${location.pathname === item.path 
                    ? "bg-primary text-white" 
                    : "text-gray-800 hover:bg-primary/10"}`}
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="pl-6 space-y-1 mt-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-base transition-colors duration-200
                        ${location.pathname === subItem.path 
                          ? "bg-primary/80 text-white" 
                          : "text-gray-600 hover:bg-primary/5"}`}
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

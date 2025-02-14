import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";
import { MenuItem } from "./navigation/types";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user
  } = useAuth();
  const location = useLocation();
  const menuItems: MenuItem[] = [{
    name: "Accueil",
    path: "/"
  }, {
    name: "Plâtrerie",
    path: "/platrerie"
  }, {
    name: "Peintures",
    path: "#",
    subItems: [{
      name: "Peintures intérieures",
      path: "/peintures/interieures"
    }, {
      name: "Peintures extérieures",
      path: "/peintures/exterieures"
    }]
  }, {
    name: "Isolation",
    path: "#",
    subItems: [{
      name: "Isolation intérieure",
      path: "/isolation/interieure"
    }, {
      name: "Isolation extérieure",
      path: "/isolation/exterieure"
    }]
  }, {
    name: "Étanchéité à l'air",
    path: "/etancheite"
  }, {
    name: "Nos réalisations",
    path: "/realisations"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <header className="w-full z-50 shadow-sm" style={{
    background: 'linear-gradient(to bottom, #998475, #F9EBDF)'
  }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/45177932-0c62-496a-8f4d-dde994c690ba.png" alt="Pauget et Fils" className="h-32 w-auto" />
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md text-secondary-foreground transition-colors duration-200 text-[#0a0500] bg-transparent">
              <Menu size={24} className="bg-transparent" />
            </button>
          </div>

          <DesktopNav menuItems={menuItems} />
        </div>
      </div>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />
    </header>;
};
export default Header;
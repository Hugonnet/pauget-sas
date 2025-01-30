import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "./types";

interface DesktopNavProps {
  menuItems: MenuItem[];
}

const DesktopNav = ({ menuItems }: DesktopNavProps) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex">
      <ul className="flex space-x-8">
        {menuItems.map((item) => (
          <li key={item.name} className="relative group">
            <Link
              to={item.path}
              className={`text-lg font-medium transition-colors duration-200 
                ${location.pathname === item.path ? "text-white" : "text-secondary-foreground hover:text-white"}`}
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
                        className={`block px-4 py-3 text-sm hover:text-white hover:bg-primary transition-colors duration-200
                          ${location.pathname === subItem.path ? "text-white bg-primary" : "text-gray-700"}`}
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
  );
};

export default DesktopNav;
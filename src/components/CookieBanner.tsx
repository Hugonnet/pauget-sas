import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookieConsent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={refuseCookies}
              className="whitespace-nowrap"
            >
              Refuser
            </Button>
            <Button
              onClick={acceptCookies}
              className="whitespace-nowrap bg-primary hover:bg-primary-hover text-white"
            >
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
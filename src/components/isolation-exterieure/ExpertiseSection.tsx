
export const ExpertiseSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/qualibat-rge.webp" 
              alt="Certification Qualibat RGE"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Forte de plus de 30 ans d'expérience, notre entreprise est certifiée RGE Qualibat, garantissant notre expertise dans l'isolation thermique par l'extérieur.
            </p>
            <ul className="space-y-4">
              {[
                "Matériaux de haute qualité",
                "Équipe qualifiée et expérimentée",
                "Respect des normes environnementales",
                "Garantie décennale"
              ].map((point, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

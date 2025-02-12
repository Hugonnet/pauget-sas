
export const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services d'Isolation Extérieure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Diagnostic Thermique",
              description: "Analyse complète de votre habitation pour identifier les déperditions de chaleur."
            },
            {
              title: "Installation ITE",
              description: "Pose professionnelle de systèmes d'isolation thermique par l'extérieur."
            },
            {
              title: "Finition Façade",
              description: "Large choix de finitions esthétiques pour votre façade isolée."
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

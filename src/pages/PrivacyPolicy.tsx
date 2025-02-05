import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Politique de Confidentialité - Pauget & Fils</title>
        <meta 
          name="description" 
          content="Politique de confidentialité de Pauget & Fils. Découvrez comment nous protégeons vos données personnelles."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose max-w-none">
          <h2>1. Collecte des informations</h2>
          <p>
            Nous recueillons des informations lorsque vous naviguez sur notre site, notamment :
          </p>
          <ul>
            <li>Les informations que vous nous fournissez volontairement (nom, adresse e-mail, numéro de téléphone)</li>
            <li>Les informations de navigation via les cookies</li>
            <li>Les informations techniques (adresse IP, type de navigateur)</li>
          </ul>

          <h2>2. Utilisation des informations</h2>
          <p>
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul>
            <li>Personnaliser votre expérience</li>
            <li>Améliorer notre site web</li>
            <li>Traiter vos demandes de devis</li>
            <li>Vous contacter concernant nos services</li>
          </ul>

          <h2>3. Protection des informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. Ces cookies sont nécessaires au bon fonctionnement du site et à l'analyse de son utilisation.
          </p>

          <h2>5. Divulgation à des tiers</h2>
          <p>
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers.
          </p>

          <h2>6. Consentement</h2>
          <p>
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet immédiatement après leur publication sur cette page.
          </p>

          <h2>8. Nous contacter</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
          </p>
          <ul>
            <li>Par téléphone : 04 74 96 28 14</li>
            <li>Par email : contact@paugetetfils.fr</li>
            <li>Par courrier : ZA Le Grand Champ, 01290 Crottet</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

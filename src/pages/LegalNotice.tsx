const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="prose max-w-none">
          <h2>1. Informations légales</h2>
          <p>
            Pauget et Fils<br />
            ZA Le Grand Champ<br />
            01290 Crottet<br />
            Tél : 04 74 96 28 14<br />
            Email : contact@paugetetfils.fr
          </p>

          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication du site est Pauget et Fils.
          </p>

          <h2>3. Hébergement</h2>
          <p>
            Ce site est hébergé par [Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]<br />
            [Contact de l'hébergeur]
          </p>

          <h2>4. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>

          <h2>5. Données personnelles</h2>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, consultez notre politique de confidentialité.
          </p>

          <h2>7. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens hypertextes vers d'autres sites. Nous ne sommes pas responsables du contenu de ces sites externes.
          </p>

          <h2>8. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
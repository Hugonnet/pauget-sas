import { Card, CardContent } from "@/components/ui/card";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Mentions Légales</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
              <p className="text-accent">
                Pauget et Fils<br />
                ZA Le Grand Champ<br />
                01290 Crottet<br />
                Tél : 04 74 96 28 14<br />
                Email : contact@paugetetfils.fr
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">2. Directeur de la publication</h2>
              <p className="text-accent">
                Le directeur de la publication du site est Pauget et Fils.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">3. Hébergement</h2>
              <p className="text-accent">
                Ce site est hébergé par [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                [Contact de l'hébergeur]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-accent">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">5. Données personnelles</h2>
              <p className="text-accent">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">6. Cookies</h2>
              <p className="text-accent">
                Notre site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations, consultez notre politique de confidentialité.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">7. Liens hypertextes</h2>
              <p className="text-accent">
                Le site peut contenir des liens hypertextes vers d'autres sites. Nous ne sommes pas responsables du contenu de ces sites externes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card-hover transition-colors">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">8. Droit applicable</h2>
              <p className="text-accent">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
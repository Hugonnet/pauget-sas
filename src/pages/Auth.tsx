
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password);
        toast({
          title: "Inscription réussie",
          description: "Veuillez vérifier votre email pour confirmer votre compte.",
        });
      } else {
        await signIn(email, password);
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{isSignUp ? "Inscription" : "Connexion"} | Pauget et Fils</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-[#F9EBDF]">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {isSignUp ? "Créer un compte" : "Se connecter"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Adresse email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Adresse email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {isSignUp ? "S'inscrire" : "Se connecter"}
              </button>
            </div>

            <div className="text-sm text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-medium text-primary hover:text-primary-hover"
              >
                {isSignUp
                  ? "Déjà un compte ? Se connecter"
                  : "Pas de compte ? S'inscrire"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;


import { MapPin, Bell, Camera, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CitéFix</h3>
                <p className="text-sm text-gray-400">Votre ville, notre priorité</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              CitéFix connecte les citoyens et les autorités locales pour créer des villes 
              plus durables et vivables. Ensemble, transformons notre environnement urbain.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Camera className="h-4 w-4" />
                <span>Signaler</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Bell className="h-4 w-4" />
                <span>Suivre</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="h-4 w-4" />
                <span>Gagner</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Signaler un problème</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carte interactive</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mon profil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Historique</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guide d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nous contacter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4">Restez informé</h4>
            <p className="text-gray-300 text-sm mb-4">
              Recevez les dernières mises à jour sur les résolutions dans votre quartier.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Votre email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CitéFix. Tous droits réservés. Développé avec ❤️ pour les villes du Bénin.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Français</a>
            <a href="#" className="hover:text-white transition-colors">English</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

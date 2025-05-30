
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CitéFix
              </h1>
              <p className="text-xs text-gray-600">Votre ville, notre priorité</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Signaler</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Carte</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Connexion
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              S'inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Signaler</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Carte</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Connexion
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                  S'inscrire
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

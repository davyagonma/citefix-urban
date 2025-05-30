
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Award, Target, Heart, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const APropos = () => {
  const values = [
    {
      icon: Heart,
      title: "Engagement citoyen",
      description: "Nous croyons en la force de l'engagement citoyen pour transformer nos villes"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Utiliser la technologie pour créer des solutions durables et efficaces"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Faciliter la collaboration entre citoyens, autorités et techniciens"
    },
    {
      icon: Target,
      title: "Impact mesurable",
      description: "Chaque signalement compte et contribue à l'amélioration de notre environnement"
    }
  ];

  const team = [
    {
      name: "Dr. Amina Kouassi",
      role: "Fondatrice & CEO",
      description: "Experte en urbanisme durable avec 15 ans d'expérience en Afrique de l'Ouest"
    },
    {
      name: "Jean-Baptiste Adou",
      role: "Directeur Technique",
      description: "Ingénieur logiciel passionné par les solutions tech for good"
    },
    {
      name: "Fatou Diallo",
      role: "Responsable Partenariats",
      description: "Spécialiste en relations publiques et développement communautaire"
    }
  ];

  const stats = [
    { number: "12", label: "Villes partenaires", description: "À travers le Bénin" },
    { number: "15k+", label: "Citoyens actifs", description: "Utilisateurs engagés" },
    { number: "3,247", label: "Problèmes résolus", description: "Depuis notre lancement" },
    { number: "89%", label: "Taux de satisfaction", description: "Des utilisateurs" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Plateforme citoyenne certifiée</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            À propos de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              CitéFix
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            CitéFix est née d'une vision simple : permettre à chaque citoyen de devenir 
            un acteur du changement dans sa ville. Nous connectons les communautés aux 
            autorités locales pour créer des environnements urbains plus durables et vivables.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transformer la façon dont les villes du Bénin gèrent les problèmes urbains 
                en donnant aux citoyens les outils pour signaler, suivre et participer 
                activement à la résolution des défis de leur environnement.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous croyons que chaque citoyen mérite de vivre dans une ville propre, 
                sûre et fonctionnelle. Notre plateforme facilite cette vision en créant 
                un pont transparent entre les besoins des communautés et l'action des autorités.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Rejoindre le mouvement
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
                <MapPin className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Votre ville, notre priorité</h3>
                <p className="text-gray-600">
                  Ensemble, construisons des villes plus intelligentes et plus durables
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne pour des villes meilleures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre impact</h2>
            <p className="text-xl text-gray-600">
              Des chiffres qui témoignent de notre engagement pour le changement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="py-8 px-6">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés par l'innovation urbaine et l'engagement citoyen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-12">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre ville ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers de citoyens engagés et commencez dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Créer un compte
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Signaler un problème
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;

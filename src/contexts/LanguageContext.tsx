
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en' | 'fon';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions
const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    report: "Signaler",
    map: "Carte",
    about: "À propos",
    login: "Connexion",
    signup: "S'inscrire",
    profile: "Profil",
    myReports: "Mes Signalements",
    payment: "Paiement",
    admin: "Administration",
    
    // Header
    tagline: "Votre ville, notre priorité",
    
    // Footer
    navigation: "Navigation",
    support: "Support",
    stayInformed: "Restez informé",
    emailPlaceholder: "Votre email",
    subscribe: "S'abonner",
    helpCenter: "Centre d'aide",
    userGuide: "Guide d'utilisation",
    contactUs: "Nous contacter",
    terms: "Conditions d'utilisation",
    privacy: "Politique de confidentialité",
    emailUpdates: "Recevez les dernières mises à jour sur les résolutions dans votre quartier.",
    copyright: "© 2024 CitéFix. Tous droits réservés. Développé avec ❤️ pour les villes du Bénin.",
    
    // About page
    aboutTitle: "À propos de CitéFix",
    aboutDescription: "CitéFix est née d'une vision simple : permettre à chaque citoyen de devenir un acteur du changement dans sa ville. Nous connectons les communautés aux autorités locales pour créer des environnements urbains plus durables et vivables.",
    ourMission: "Notre mission",
    missionText1: "Transformer la façon dont les villes du Bénin gèrent les problèmes urbains en donnant aux citoyens les outils pour signaler, suivre et participer activement à la résolution des défis de leur environnement.",
    missionText2: "Nous croyons que chaque citoyen mérite de vivre dans une ville propre, sûre et fonctionnelle. Notre plateforme facilite cette vision en créant un pont transparent entre les besoins des communautés et l'action des autorités.",
    joinMovement: "Rejoindre le mouvement",
    yourCityOurPriority: "Votre ville, notre priorité",
    buildSmartCities: "Ensemble, construisons des villes plus intelligentes et plus durables",
    ourValues: "Nos valeurs",
    valuesDescription: "Les principes qui guident notre action quotidienne pour des villes meilleures",
    ourImpact: "Notre impact",
    impactDescription: "Des chiffres qui témoignent de notre engagement pour le changement",
    ourTeam: "Notre équipe",
    teamDescription: "Des experts passionnés par l'innovation urbaine et l'engagement citoyen",
    readyToTransform: "Prêt à transformer votre ville ?",
    transformDescription: "Rejoignez des milliers de citoyens engagés et commencez dès aujourd'hui",
    createAccount: "Créer un compte",
    reportProblem: "Signaler un problème",
    
    // Values
    citizenEngagement: "Engagement citoyen",
    citizenEngagementDesc: "Nous croyons en la force de l'engagement citoyen pour transformer nos villes",
    innovation: "Innovation",
    innovationDesc: "Utiliser la technologie pour créer des solutions durables et efficaces",
    collaboration: "Collaboration",
    collaborationDesc: "Faciliter la collaboration entre citoyens, autorités et techniciens",
    measurableImpact: "Impact mesurable",
    measurableImpactDesc: "Chaque signalement compte et contribue à l'amélioration de notre environnement",
    
    // Stats
    partnerCities: "Villes partenaires",
    acrossBenin: "À travers le Bénin",
    activeCitizens: "Citoyens actifs",
    engagedUsers: "Utilisateurs engagés",
    problemsSolved: "Problèmes résolus",
    sinceLaunch: "Depuis notre lancement",
    satisfactionRate: "Taux de satisfaction",
    ofUsers: "Des utilisateurs",
    
    // Languages
    french: "Français",
    english: "English",
    fon: "Fɔngbè"
  },
  
  en: {
    // Navigation
    home: "Home",
    report: "Report",
    map: "Map",
    about: "About",
    login: "Login",
    signup: "Sign Up",
    profile: "Profile",
    myReports: "My Reports",
    payment: "Payment",
    admin: "Administration",
    
    // Header
    tagline: "Your city, our priority",
    
    // Footer
    navigation: "Navigation",
    support: "Support",
    stayInformed: "Stay Informed",
    emailPlaceholder: "Your email",
    subscribe: "Subscribe",
    helpCenter: "Help Center",
    userGuide: "User Guide",
    contactUs: "Contact Us",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    emailUpdates: "Get the latest updates on resolutions in your neighborhood.",
    copyright: "© 2024 CitéFix. All rights reserved. Built with ❤️ for Benin cities.",
    
    // About page
    aboutTitle: "About CitéFix",
    aboutDescription: "CitéFix was born from a simple vision: empowering every citizen to become an agent of change in their city. We connect communities to local authorities to create more sustainable and livable urban environments.",
    ourMission: "Our Mission",
    missionText1: "Transform how Benin cities handle urban issues by giving citizens the tools to report, track, and actively participate in solving environmental challenges.",
    missionText2: "We believe every citizen deserves to live in a clean, safe, and functional city. Our platform facilitates this vision by creating a transparent bridge between community needs and government action.",
    joinMovement: "Join the Movement",
    yourCityOurPriority: "Your city, our priority",
    buildSmartCities: "Together, let's build smarter and more sustainable cities",
    ourValues: "Our Values",
    valuesDescription: "The principles that guide our daily action for better cities",
    ourImpact: "Our Impact",
    impactDescription: "Numbers that testify to our commitment to change",
    ourTeam: "Our Team",
    teamDescription: "Experts passionate about urban innovation and citizen engagement",
    readyToTransform: "Ready to transform your city?",
    transformDescription: "Join thousands of engaged citizens and start today",
    createAccount: "Create Account",
    reportProblem: "Report a Problem",
    
    // Values
    citizenEngagement: "Citizen Engagement",
    citizenEngagementDesc: "We believe in the power of citizen engagement to transform our cities",
    innovation: "Innovation",
    innovationDesc: "Using technology to create sustainable and efficient solutions",
    collaboration: "Collaboration",
    collaborationDesc: "Facilitating collaboration between citizens, authorities and technicians",
    measurableImpact: "Measurable Impact",
    measurableImpactDesc: "Every report counts and contributes to improving our environment",
    
    // Stats
    partnerCities: "Partner Cities",
    acrossBenin: "Across Benin",
    activeCitizens: "Active Citizens",
    engagedUsers: "Engaged Users",
    problemsSolved: "Problems Solved",
    sinceLaunch: "Since our launch",
    satisfactionRate: "Satisfaction Rate",
    ofUsers: "Of users",
    
    // Languages
    french: "Français",
    english: "English", 
    fon: "Fɔngbè"
  },
  
  fon: {
    // Navigation
    home: "Axa",
    report: "Xlɛ nujija",
    map: "Nulɔxɔ",
    about: "Mɛ ɖo",
    login: "Yi me",
    signup: "Xlɛ ɖo axa",
    profile: "Nukɔn towe",
    myReports: "Nye nujija lɛ",
    payment: "Kpesa nana",
    admin: "Ɖoɖo",
    
    // Header
    tagline: "Mí dù, mí ɖɔɖoɖo",
    
    // Footer
    navigation: "Mɔzɔzɔ",
    support: "Alɔxɔ",
    stayInformed: "Nɔ nukũn me",
    emailPlaceholder: "Wò imail",
    subscribe: "Ɖo axa",
    helpCenter: "Alɔxɔ xɔme",
    userGuide: "Azanɖena we bɛ",
    contactUs: "Ka mí nú",
    terms: "Xoxo lɛ",
    privacy: "Nukɔn ɖaxi",
    emailUpdates: "Xɔ nukũn xoxoxo lɛ ɖo wò kpɔdopɔ me.",
    copyright: "© 2024 CitéFix. Dùkɔ lɛ katã nyí. Wɔ nɛ kple ❤️ na Benin dù lɛ.",
    
    // About page
    aboutTitle: "CitéFix ɖo",
    aboutDescription: "CitéFix wa ɖo nukũn ɖeka me: nɛ ame sia ame nado agbe na yeƒe dù ƒe tɔtrɔ. Míeka aɖaŋu na nutome kple dumegãwo be woawɔ dù siwo nyo wu.",
    ourMission: "Míaƒe Dɔwɔwɔ",
    missionText1: "Tɔtrɔ alesi Benin dù lɛ wɔa dɔ kple dù me nyawo me to ame lɛ na nukpakpa, kpɔkpɔ kple kpekpeɖeŋu me.",
    missionText2: "Míexɔse be ame sia ame dze na anɔ dù dzɔdzɔe, dedie kple esi wɔa dɔ nyuie me. Míaƒe ɖoɖo naa nukũn sia to go ƒoƒo anyi ɖe nutome ƒe nuhiahĩawo kple dumegãwo ƒe dɔwɔwɔ dome.",
    joinMovement: "Kpe ɖe dɔwɔwɔ ŋu",
    yourCityOurPriority: "Wò dù, míaƒe do ŋgɔ",
    buildSmartCities: "Mina míatu dù nyanyuiwo ɖo anyi",
    ourValues: "Míaƒe Nuxɔse lɛ",
    valuesDescription: "Nu siwo fia mɔ na míaƒe gbeɖegbe dɔwɔwɔ na dù nyuiwo",
    ourImpact: "Míaƒe Ŋusẽ",
    impactDescription: "Xexlẽme siwo ɖe míaƒe ɖoɖo fia na tɔtrɔ",
    ourTeam: "Míaƒe Ameha",
    teamDescription: "Amewo siwo lɔ̃ dù yeye wɔwɔ kple ame lɛ ƒe kpekpeɖeŋu",
    readyToTransform: "Èɖo be natɔtrɔ wò dù?",
    transformDescription: "Kpe ɖe ame akpe siwo ɖo wo ɖokuiwo na dɔwɔwɔ ŋu eye nàdze egɔme egbea",
    createAccount: "Ɖo axa",
    reportProblem: "Xlɛ nyawo nujija",
    
    // Values
    citizenEngagement: "Dukɔmetɔwo ƒe Kpekpeɖeŋu",
    citizenEngagementDesc: "Míexɔse dukɔmetɔwo ƒe kpekpeɖeŋu ƒe ŋusẽ be wòatɔtrɔ míaƒe dù lɛ",
    innovation: "Nu Yeye Wɔwɔ",
    innovationDesc: "Mɔnukpakpa zazã na nu siwo anɔ anyi didi eye wowɔa dɔ nyuie",
    collaboration: "Dɔwɔwɔ ɖekae",
    collaborationDesc: "Kpekpeɖeŋu na dukɔmetɔwo, dumeɖulawo kple aɖaŋutɔwo dome",
    measurableImpact: "Ŋusẽ si Woate Ŋu Adzidze",
    measurableImpactDesc: "Nujija ɖekaɖeka xɔa asi eye wòkpena ɖe míaƒe nutome nyonyoɖo ŋu",
    
    // Stats
    partnerCities: "Dù Kpeɖeŋutɔwo",
    acrossBenin: "Le Benin me katã",
    activeCitizens: "Dukɔmetɔ siwo Le Dɔwɔm",
    engagedUsers: "Ezãla siwo Ku Ɖe Eme",
    problemsSolved: "Nyawo siwo Woɖo",
    sinceLaunch: "Tso míaƒe dze egɔme me",
    satisfactionRate: "Dziɖuɖu Xexlẽme",
    ofUsers: "Ezãlawo ƒe",
    
    // Languages
    french: "Fransegbe",
    english: "Eŋlishgbe",
    fon: "Fɔngbè"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('citefix-language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('citefix-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

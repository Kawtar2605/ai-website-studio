import { SiteModel } from "@/lib/models/site-model";

const site: SiteModel = {
  name: "Thailand",
  pages: [
    {
      id: "home",
      label: "Accueil",
      sections: [
        {
          type: "hero",
          title: "Bienvenue chez Thailand",
          content: "Restaurant thaïlandais moderne et authentique"
        },
        {
          type: "cta",
          title: "Réserver une table",
          content: "Contactez-nous dès maintenant"
        }
      ]
    },
    {
      id: "menu",
      label: "Menu",
      sections: [
        {
          type: "list",
          title: "Nos spécialités",
          items: [
            "Pad Thaï",
            "Curry vert",
            "Soupe Tom Yum",
            "Spécialités maison"
          ]
        }
      ]
    },
    {
      id: "contact",
      label: "Contact",
      sections: [
        {
          type: "text",
          title: "Contact & réservation",
          content: "Appelez-nous ou écrivez-nous pour réserver."
        }
      ]
    }
  ]
};

export default site;

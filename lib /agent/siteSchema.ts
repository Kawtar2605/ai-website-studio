export type LayoutType = "centered" | "split";

export type Section =
  | {
      type: "hero";
      layout: LayoutType;
      heading: string;
      subheading: string;
      buttonText: string;
      imageUrl?: string;
    }
  | {
      type: "features";
      layout: LayoutType;
      items: { title: string; description: string }[];
    }
  | {
      type: "cta";
      layout: LayoutType;
      heading: string;
      buttonText: string;
    };

export type Theme = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  style: "modern" | "luxury" | "minimal" | "asian";
};

export type Page = {
  slug: string;
  sections: Section[];
};

export type Site = {
  theme: Theme;
  pages: Page[];
};
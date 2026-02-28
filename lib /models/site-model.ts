export type PageRole =
  | "landing"
  | "content"
  | "conversion"
  | "information";

export interface NavigationItem {
  label: string;
  slug: string;
}

export interface PageModel {
  slug: string;
  title: string;
  role: PageRole;
  sections: string[];
}

export interface SiteModel {
  projectName: string;
  domain: string;
  navigation: NavigationItem[];
  pages: PageModel[];
  reasoning: {
    targetUser: string;
    navigationLogic: string;
  };
}

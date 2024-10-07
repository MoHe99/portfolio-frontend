import { ContentElements } from "./dynamic.types";

type Layouts = "standard" | "landing";

export type TPage = {
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  layout: Layouts;
  footer: boolean;
  content: ContentElements[];
};

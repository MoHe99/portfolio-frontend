export type TParagraph = {
  _id: string;
  title: string;
  showTitle: boolean;
  text: Text[];
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _type: "paragraph";
};

type Text = {
  style: string;
  _key: string;
  markDefs: string[];
  children: TextChildren[];
  _type: string;
};

type TextChildren = {
  _type: string;
  marks: string[];
  text: string;
  _key: string;
};

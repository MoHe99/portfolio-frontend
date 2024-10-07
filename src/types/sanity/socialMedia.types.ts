export type TSocialMedia = {
  _id: string;
  title: string;
  svgIcon: string;
  link: {
    _type: "link";
    blank: boolean;
    type: string;
    url: string;
  };
};

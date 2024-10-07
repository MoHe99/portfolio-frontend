import { Component } from "solid-js";
import Heading from "../../components/sanity-elements/Heading";
import Paragraph from "../../components/sanity-elements/Paragraph";
import { THeading } from "./heading.type";
import { TParagraph } from "./paragraph.type";
import { TPage } from "./page.type";
import StandardPage from "../../layouts/StandardPage";
import LandingPage from "../../layouts/LandingPage";

export type ContentElements = THeading | TParagraph;

type ComponentMap = {
  heading: Component<THeading>;
  paragraph: Component<TParagraph>;
};

export const componentMap: ComponentMap = {
  heading: Heading,
  paragraph: Paragraph,
};

type PageMap = {
  standard: Component<TPage>;
  landing: Component<TPage>;
};

export const pageMap: PageMap = {
  standard: StandardPage,
  landing: LandingPage,
};

import { Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  componentMap,
  ContentElements,
} from "../../types/sanity/dynamic.types";

const ElementLoader: Component<ContentElements> = (props) => {
  return <Dynamic component={componentMap[props._type]} {...props} />;
};

export default ElementLoader;

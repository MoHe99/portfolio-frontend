import { Component } from "solid-js";
import ThemeSwitch from "./ThemeSwitch";
import Navigation from "./Navigation";

type Props = {
  class?: string;
};

const Header: Component<Props> = (props) => {
  return (
    <header
      class={`flex justify-center relative bg-neutral-100 dark:bg-neutral-900 ${
        props.class || ""
      }`}
    >
      <Navigation />
      <ThemeSwitch class="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </header>
  );
};

export default Header;

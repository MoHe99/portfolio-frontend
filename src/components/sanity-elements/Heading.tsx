import { Component, Match, Switch } from "solid-js";
import { THeading } from "../../types/sanity/heading.type";

const Heading: Component<THeading> = (props) => {
  return (
    <Switch>
      <Match when={props.type === "h1"}>
        <h1 class="text-5xl font-extrabold">{props.title}</h1>
      </Match>
      <Match when={props.type === "h2"}>
        <h2 class="whitespace-nowrap text-4xl font-bold">{props.title}</h2>
      </Match>
      <Match when={props.type === "h2"}>
        <h3 class="whitespace-nowrap text-3xl font-bold">{props.title}</h3>
      </Match>
      <Match when={props.type === "h4"}>
        <h4 class="whitespace-nowrap text-2xl font-bold">{props.title}</h4>
      </Match>
      <Match when={props.type === "h5"}>
        <h5 class="whitespace-nowrap text-xl font-bold">{props.title}</h5>
      </Match>
      <Match when={props.type === "h6"}>
        <h6 class="whitespace-nowrap text-lg font-bold">{props.title}</h6>
      </Match>
    </Switch>
  );
};

export default Heading;

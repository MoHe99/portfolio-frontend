import { Component, For, Match, Show, Switch } from "solid-js";
import { PortableText } from "@portabletext/solid";
import { type TParagraph } from "../../types/sanity/paragraph.type";

const Paragraph: Component<TParagraph> = (props) => {
  return (
    <article>
      <Show when={props.showTitle}>
        <Switch>
          <Match when={props.type === "h1"}>
            <h1 class="text-5xl font-extrabold">{props.title}</h1>
          </Match>
          <Match when={props.type === "h2"}>
            <h2 class="text-4xl font-bold">{props.title}</h2>
          </Match>
          <Match when={props.type === "h2"}>
            <h3 class="text-3xl font-bold">{props.title}</h3>
          </Match>
          <Match when={props.type === "h4"}>
            <h4 class="text-2xl font-bold">{props.title}</h4>
          </Match>
          <Match when={props.type === "h5"}>
            <h5 class="text-xl font-bold">{props.title}</h5>
          </Match>
          <Match when={props.type === "h6"}>
            <h6 class="text-lg font-bold">{props.title}</h6>
          </Match>
        </Switch>
      </Show>
      <For each={props.text}>{(text) => <PortableText value={text} />}</For>
    </article>
  );
};

export default Paragraph;

import { Show, For, Component } from "solid-js";
import { TPage } from "../types/sanity/page.type";
import { Dynamic } from "solid-js/web";
import { componentMap } from "../types/sanity/dynamic.types";

const StandardPage: Component<TPage> = (props) => {
  return (
    <div class="p-5 min-h-[calc(100vh-56px)]">
      <Show when={props.content} fallback={<p>No content available.</p>}>
        <For each={props.content}>
          {(item) => <Dynamic component={componentMap[item._type]} {...item} />}
        </For>
      </Show>
    </div>
  );
};

export default StandardPage;

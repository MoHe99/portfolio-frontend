import { For, ParentComponent, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { componentMap } from "../types/sanity/dynamic.types";
import { TPage } from "../types/sanity/page.type";

const LandingPage: ParentComponent<TPage> = (props) => {
  return (
    <div class="flex items-center h-[calc(100vh-56px)] p-5">
      <div class="flex flex-col md:flex-row justify-center w-full gap-10 mb-[56px]">
        <section>
          <Show when={props.content} fallback={<p>No content available.</p>}>
            <For each={props.content}>
              {(item) => (
                <Show when={item._type === "heading"}>
                  <Dynamic component={componentMap[item._type]} {...item} />
                </Show>
              )}
            </For>
          </Show>
        </section>
        <section>
          <Show when={props.content} fallback={<p>No content available.</p>}>
            <For each={props.content}>
              {(item) => (
                <Show when={item._type === "paragraph"}>
                  <Dynamic component={componentMap[item._type]} {...item} />
                </Show>
              )}
            </For>
          </Show>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

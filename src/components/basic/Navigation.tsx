import { NavigationMenu } from "@kobalte/core/navigation-menu";
import {
  Component,
  createSignal,
  createEffect,
  onCleanup,
  For,
  Show,
} from "solid-js";
import Bars from "../icons/Bars";
import Close from "../icons/Close";
import pages from "../../services/sanity/pages.services";

type Props = {
  class?: string;
};

const Navigation: Component<Props> = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

  createEffect(() => {
    const body = document.body;

    if (isMobileMenuOpen()) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    onCleanup(() => {
      body.classList.remove("overflow-hidden");
    });
  });

  return (
    <Show when={pages()}>
      <button
        class="md:hidden md:invisible p-4 ml-0 mr-auto hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:bg-neutral-200 dark:focus:bg-neutral-700 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen()}
      >
        <Bars />
      </button>

      {/* Mobile Menu */}
      <div
        class={`z-10 fixed inset-0 bg-neutral-100 dark:bg-neutral-900 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen()
            ? "translate-y-0 visible"
            : "-translate-y-full invisible"
        } md:hidden`}
        tabindex="-1"
        onFocusOut={(e) => {
          const currentTarget = e.currentTarget as Node;
          const relatedTarget = e.relatedTarget as Node | null;

          if (!currentTarget.contains(relatedTarget)) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <NavigationMenu
          class="flex flex-col items-center justify-center h-full space-y-8 md:invisible"
          orientation="vertical"
        >
          <button
            class="p-4 mr-auto ml-0 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:bg-neutral-200 dark:focus:bg-neutral-700 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            aria-expanded={isMobileMenuOpen()}
          >
            <Close />
          </button>
          <For each={pages()}>
            {(page) => (
              <Show when={!page.footer}>
                <NavigationMenu.Trigger
                  class="text-2xl py-4 px-6 text-neutral-800 dark:text-neutral-100 data-[highlighted=true]:bg-neutral-200 dark:data-[highlighted=true]:bg-neutral-700 ease-in-out duration-300"
                  href={page.slug.current}
                  as="a"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {page.title}
                </NavigationMenu.Trigger>
              </Show>
            )}
          </For>
        </NavigationMenu>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu
        class={`hidden md:flex justify-center invisible md:visible ${
          props.class || ""
        }`}
        orientation="horizontal"
      >
        <For each={pages()}>
          {(page) => (
            <Show when={!page.footer}>
              <NavigationMenu.Trigger
                class="block py-4 px-6 text-neutral-800 dark:text-neutral-100 data-[highlighted=true]:bg-neutral-200 dark:data-[highlighted=true]:bg-neutral-700 ease-in-out duration-300"
                href={page.slug.current}
                as="a"
              >
                {page.title}
              </NavigationMenu.Trigger>
            </Show>
          )}
        </For>
      </NavigationMenu>
    </Show>
  );
};

export default Navigation;

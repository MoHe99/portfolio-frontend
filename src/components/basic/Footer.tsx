import { NavigationMenu } from "@kobalte/core/navigation-menu";
import pages from "../../services/sanity/pages.services";
import { For, Show } from "solid-js";
import socialMedia from "../../services/sanity/socialMedia.service";
import SvgIconComponent from "./SvgIcon";

const Footer = () => {
  return (
    <footer class="bg-neutral-100 dark:bg-neutral-900">
      <div class="p-5 md:w-8/12 mx-auto md:grid md:grid-cols-2 flex flex-col gap-4">
        <section class="flex flex-col gap-4">
          <h3 class="text-3xl font-bold">Legal & Privacy:</h3>
          <NavigationMenu orientation="vertical">
            <For each={pages()}>
              {(page) => (
                <Show when={page.footer}>
                  <NavigationMenu.Trigger
                    class="relative text-neutral-800 dark:text-neutral-100 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-neutral-800 dark:before:bg-neutral-100 before:origin-center before:h-[1px] before:w-0 data-[highlighted=true]:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-neutral-800 dark:after:bg-neutral-100 after:origin-center after:top-5 before:top-5 after:h-[1px] after:w-0 data-[highlighted=true]:after:w-[50%] after:bottom-0 after:right-[50%]"
                    href={page.slug.current}
                    as="a"
                  >
                    {page.title}
                  </NavigationMenu.Trigger>
                </Show>
              )}
            </For>
          </NavigationMenu>
        </section>
        <section class="flex md:justify-end">
          <div class="flex flex-col gap-4">
            <h3 class="text-3xl font-bold">Follow me:</h3>
            <NavigationMenu class="flex" orientation="horizontal">
              <For each={socialMedia()}>
                {(item) => (
                  <NavigationMenu.Trigger
                    class="inline-block p-1 text-neutral-800 transition-all dark:text-neutral-100 data-[highlighted=true]:scale-150 ease-in-out duration-300"
                    href={item.link.url}
                    as="a"
                  >
                    <SvgIconComponent svgIcon={item.svgIcon} />
                  </NavigationMenu.Trigger>
                )}
              </For>
            </NavigationMenu>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;

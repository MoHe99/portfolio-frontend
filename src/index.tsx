import { Dynamic, For, render } from "solid-js/web";
import App from "./App";
import { Router, Route } from "@solidjs/router";
import "./index.css";
import pages from "./services/sanity/pages.services";
import { pageMap } from "./types/sanity/dynamic.types";
import { Component } from "solid-js";

const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <For each={pages()}>
        {(page) => {
          const PageComponent: Component = () => (
            <Dynamic component={pageMap[page.layout]} {...page} />
          );
          return <Route path={page.slug.current} component={PageComponent} />;
        }}
      </For>
    </Router>
  ),
  root!
);

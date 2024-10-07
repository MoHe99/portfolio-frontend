import { Match, ParentComponent, Switch } from "solid-js";
import Footer from "./components/basic/Footer";
import Header from "./components/basic/Header";
import pages from "./services/sanity/pages.services";
import LoadingSpinner from "./components/basic/LoadingSpinner";

const App: ParentComponent = (props) => {
  return (
    <Switch>
      <Match when={pages()}>
        <div class="min-h-screen flex flex-col">
          <Header />
          <main class="w-full md:w-8/12 md:mx-auto flex-grow">
            {props.children}
          </main>
          <Footer />
        </div>
      </Match>
      <Match when={pages.loading}>
        <LoadingSpinner />
      </Match>
      <Match when={pages.error}>
        <div>Error</div>
      </Match>
    </Switch>
  );
};

export default App;

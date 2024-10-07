import client from "../../configs/sanity.config";
import { createResource } from "solid-js";
import { TPage } from "../../types/sanity/page.type";

const POSTS_QUERY = `*[_type == "page"] | order((slug.current == "/") desc, title asc){_id,title,slug,layout,footer,content}`;

const fetchPages = async () => {
  return await client.fetch(POSTS_QUERY);
};

const [pages] = createResource<TPage[]>(fetchPages);

export default pages;

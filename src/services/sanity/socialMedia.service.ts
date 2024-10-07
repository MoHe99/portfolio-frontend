import client from "../../configs/sanity.config";
import { createResource } from "solid-js";
import { TSocialMedia } from "../../types/sanity/socialMedia.types";

const POSTS_QUERY = `*[
    _type == "socialMedia"
  ]|order(title asc)[0...12]{_id, title, svgIcon, link}`;

const fetchSocialMedia = async () => {
  return await client.fetch<TSocialMedia[]>(POSTS_QUERY);
};

const [socialMedia] = createResource(fetchSocialMedia);

export default socialMedia;

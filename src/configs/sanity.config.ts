import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: false,
};

const client = createClient(config);
export default client;

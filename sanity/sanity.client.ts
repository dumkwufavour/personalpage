// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: 'p2ax25j4',
  dataset: 'production',
  apiVersion: "2023-08-20",
  useCdn: false,
};

const client = createClient(config);

export default client;
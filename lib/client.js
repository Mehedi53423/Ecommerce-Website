import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "t5no7ktx",
  dataset: "production",
  apiVersion: "2022-07-13",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

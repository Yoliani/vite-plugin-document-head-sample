import { Metadata } from "vite-plugin-react-metadata-ssr/types";

export async function generateMetadata() {
  let defaultMetadata = {
    title: "Vite + React + Love <3",
    description: "TestMetadata",
  } as Metadata;
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    defaultMetadata = {
      ...defaultMetadata,
      title: data.results[0]?.name || "characters",
      openGraph: {
        images: [
          {
            url: data.results[0]?.image,
            width: 1200,
            height: 630,
            alt: data.results[0]?.name || "characters",
          },
        ],
        title: data.results[0]?.name || "characters",
        description: "TestMetadata",
        siteName: "Vite + React + Love <3",
        url: data.results[0]?.url,
      },
      twitter: {
        card: "summary_large_image",
        title: data.results[0]?.name || "characters",
        description: "TestMetadata",
        site: "Vite + React + Love <3",
        images: [
          {
            url: data.results[0]?.image,
            width: 1200,
            height: 630,
            alt: data.results[0]?.name || "characters",
          },
        ],
      },
      icons: [
        {
          rel: "icon",
          url: data.results[0]?.image,
        },
      ],
    }
  } catch (error) {
    console.error(error);
  }
  return defaultMetadata;
}

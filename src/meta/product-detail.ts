export async function generateMetadata(url?: string) {
  const defaultMetadata = {
    title: `Product Detail`,
    description: url ? url :   "Product Detail",
  };
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    defaultMetadata.title = data.results[1]?.name || "characters";
    defaultMetadata.description = data.results[1]?.name || "characters";
  } catch (error) {
    console.error(error);
  }
  return defaultMetadata;
}

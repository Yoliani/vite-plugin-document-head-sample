export async function generateMetadata(url?: string) {
  const defaultMetadata = {
    title: `Vite + React + Love <3 `,
    description: url ? url :   "TestMetadata",
  };
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    defaultMetadata.title = data.results[0]?.name || "characters";
  } catch (error) {
    console.error(error);
  }
  return defaultMetadata;
}

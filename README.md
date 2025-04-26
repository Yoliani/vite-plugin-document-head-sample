# vite-plugin-react-metadata-sample

A Vite plugin and sample project for managing and injecting metadata (such as `<title>`, `<meta>`, etc.) into your React application routes. This library simplifies dynamic metadata management for SEO, social sharing, and accessibility in React SPAs powered by Vite.

---

## Table of Contents
- [vite-plugin-react-metadata-sample](#vite-plugin-react-metadata-sample)
  - [Table of Contents](#table-of-contents)
  - [What I'm Working On](#what-im-working-on)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [API Reference](#api-reference)
    - [`generateMetadata()`](#generatemetadata)
  - [Client Part Status](#client-part-status)
  - [License](#license)

---

## What I'm Working On

| Feature                         | Status    | Notes                                         |
|---------------------------------|-----------|-----------------------------------------------|
| Better client-side              | Ongoing   | Improve metadata updates on client navigation |
| More like Next.js implementation|  Ongoing   | Closer API and DX to Next.js metadata         |

---

## Features
- 📦 **Vite Plugin**: Seamlessly integrates with Vite's plugin system.
- ⚛️ **React Metadata Management**: Define route-based metadata in a type-safe, modular way.
- 🔄 **Dynamic Metadata**: Supports async metadata generation (e.g., fetch from API).
- 🛣️ **Route-to-File Mapping**: Map routes to metadata definition files.
- 📝 **Sample Implementation**: Example code for integrating with your React app.

---

## Installation

```bash
npm install vite-plugin-react-metadata
```

Add the plugin to your `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginReactMetadata from "vite-plugin-react-metadata/plugin";

export default defineConfig({
  plugins: [
    react(),
    vitePluginReactMetadata({
      routeToFileMap: {
        "/": "src/meta/index.ts",
        "/home": "src/meta/index.ts",
      },
    }),
  ],
});
```

---

## Usage

Define metadata for your routes in the mapped files, e.g., `src/meta/index.ts`:

```ts
export async function generateMetadata() {
  const defaultMetadata = {
    title: "Vite + React + Love <3",
    description: "TestMetadata",
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
```

The plugin will inject the returned metadata into the `<head>` of your HTML on navigation.

---

## Configuration

- **routeToFileMap**: An object mapping route paths to the file where their metadata is defined.
  - Example:
    ```ts
    routeToFileMap: {
      "/": "src/meta/index.ts",
      "/home": "src/meta/index.ts",
    }
    ```

---

## API Reference

### `generateMetadata()`
- Should export an async function that returns an object with metadata fields (e.g., `title`, `description`).
- The result will be injected into the document `<head>`.

---

## Client Part Status

🚧 **The client-side integration (automatic metadata update on navigation, React hooks, etc.) is still in progress.**

- The current sample demonstrates server-side and static injection only.
- Future updates will include a React hook and client-side HMR for metadata.

---

## License

MIT

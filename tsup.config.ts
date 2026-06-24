import { defineConfig } from "tsup";

// Build the kit as ESM + type declarations, copying the stylesheet to dist.
export default defineConfig({
  entry: ["src/index.ts", "src/shadcn.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "lucide-react", "leaflet"],
  loader: { ".css": "copy" },
  onSuccess: "cp src/styles.css dist/styles.css && cp src/styles.css dist/shadcn.css && mkdir -p dist/theme && cp src/theme/*.css dist/theme/",
});

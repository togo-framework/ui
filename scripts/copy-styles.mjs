// Copy the kit's stylesheets into dist after tsup builds. Plain Node so the build runs the
// same on Windows, macOS and Linux (the old shell one-liner used cp / mkdir -p).
import { cpSync, mkdirSync, readdirSync } from "node:fs";

cpSync("src/styles.css", "dist/styles.css");
cpSync("src/styles.css", "dist/shadcn.css");
mkdirSync("dist/theme", { recursive: true });
for (const f of readdirSync("src/theme").filter((f) => f.endsWith(".css"))) cpSync(`src/theme/${f}`, `dist/theme/${f}`);

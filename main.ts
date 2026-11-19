// Entry: copy the baked news image of 19 November 2026 to /output/entry.png.
import * as fs from "node:fs";
import * as path from "node:path";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(path.join(import.meta.dirname, "entry.jpg"), path.join(outDir, "entry.png"));

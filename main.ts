// Entry: copy the baked news image of 19 November 2026 to /output/entry.png.
import * as fs from "node:fs";
import * as path from "node:path";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const src = path.join(import.meta.dirname, "entry.jpg");
if (!fs.existsSync(src)) {
  throw new Error(`missing bundled image: ${src}`);
}
fs.copyFileSync(src, path.join(outDir, "entry.png"));
console.log("entry.png written:", fs.statSync(path.join(outDir, "entry.png")).size, "bytes");

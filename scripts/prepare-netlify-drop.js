import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const assetsDir = path.join(publicDir, "assets");

if (!fs.existsSync(publicDir)) {
  console.error(".output/public directory not found. Run vite build first.");
  process.exit(1);
}

// Find main JS and CSS asset files
const files = fs.readdirSync(assetsDir);
const mainCss = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || "";
const mainJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || files.find((f) => f.endsWith(".js")) || "";

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ascentez · Heavy Lifting and Transportation</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&family=Archivo:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif&display=swap" />
    ${mainCss ? `<link rel="stylesheet" href="/assets/${mainCss}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${mainJs ? `<script type="module" src="/assets/${mainJs}"></script>` : ""}
  </body>
</html>
`;

// Write index.html to .output/public
fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent);

// Write _redirects for Netlify SPA routing fallback
fs.writeFileSync(path.join(publicDir, "_redirects"), "/*  /index.html  200\n");

console.log("Successfully prepared .output/public for Netlify Drag & Drop!");

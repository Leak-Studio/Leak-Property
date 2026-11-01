import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";

const root = resolve(process.argv[2] || "dist");
const port = Number(process.argv[3] || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    const probe = url.pathname === "/__verify-scroll.js";
    let file = probe
      ? resolve("scripts/verify-scroll.js")
      : resolve(root, "." + decodeURIComponent(url.pathname));
    if (!probe && file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    let body = await readFile(file);
    if (extname(file) === ".html" && url.searchParams.has("native")) {
      body = Buffer.from(
        body
          .toString()
          .replace(
            /<script src="\/vendor\/(?:gsap|ScrollTrigger|SplitText|lenis)\.min\.js" defer><\/script>/g,
            "",
          ),
      );
    }
    if (extname(file) === ".html" && url.searchParams.has("verify")) {
      body = Buffer.from(
        body
          .toString()
          .replace(
            "</body>",
            '<script src="/__verify-scroll.js" defer></script></body>',
          ),
      );
    }
    response.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(body);
  } catch (error) {
    response.writeHead(error.code === "ENOENT" ? 404 : 500).end();
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`);
  console.log("Add ?verify to a page to show the scroll checks.");
});

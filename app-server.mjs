import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import nitroHandler from "./.output/server/index.mjs";

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.resolve(".output/public");

const mimeTypes = {
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];
  const filePath = path.join(PUBLIC_DIR, urlPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    });
    return fs.createReadStream(filePath).pipe(res);
  }

  if (typeof nitroHandler.nodeHandler === "function") {
    nitroHandler.nodeHandler(req, res);
  } else if (typeof nitroHandler === "function") {
    nitroHandler(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<!DOCTYPE html><html><body><h1>FARKHADIVICH AI</h1></body></html>");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on 0.0.0.0:${PORT}`);
});

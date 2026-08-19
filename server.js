import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = process.env.PORT || 8080;
const searchDirs = [".output/public", "dist", "public", "."];

function findFile(urlPath) {
  const cleanPath = urlPath.split("?")[0];
  for (const dir of searchDirs) {
    const p = path.resolve(dir, cleanPath === "/" ? "index.html" : cleanPath.slice(1));
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  }
  for (const dir of searchDirs) {
    const p = path.resolve(dir, "index.html");
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

http.createServer((req, res) => {
  const file = findFile(req.url);
  if (file) {
    const ext = path.extname(file);
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<!DOCTYPE html><html><body><h1>Farkhadivich AI</h1><script>location.reload()</script></body></html>");
  }
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Farkhadivich AI server running on 0.0.0.0:${PORT}`);
});

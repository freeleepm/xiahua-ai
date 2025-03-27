import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.150.0/http/file_server.ts";

serve((req) => {
  const url = new URL(req.url);
  
  return serveDir(req, {
    fsRoot: "./dist",
    urlRoot: "",
    showDirListing: false,
    enableCors: true
  });
}, { port: 8000 });

console.log("服务器运行在 http://localhost:8000/");
import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.178.0/http/file_server.ts";

// 导入你的静态资源
import indexHtml from "./dist/index.html" assert { type: "text" };
// 其他资源同理导入

serve((req) => {
  const url = new URL(req.url);
  const path = url.pathname;
  
  // 路由处理
  if (path === "/" || path === "/index.html") {
    return new Response(indexHtml, {
      headers: { "content-type": "text/html" },
    });
  }
  
  // 处理其他静态资源...
  
  // 默认返回404
  return new Response("Not Found", { status: 404 });
}, { 
  port: 8000,
  // 添加主机配置，使其在任何网络接口上可访问
  hostname: "0.0.0.0"
});

console.log("服务器运行在 http://localhost:8000/");
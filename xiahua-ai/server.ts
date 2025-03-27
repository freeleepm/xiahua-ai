// 文件: server.ts
import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

// 创建静态资源映射
const staticFiles = {
  "/": "/index.html",
  "/index.html": "/index.html",
  // 添加其他关键静态资源的映射
};

serve(async (req) => {
  const url = new URL(req.url);
  let path = url.pathname;
  
  // 处理根路径
  if (path === "/") path = "/index.html";
  
  // 对于单页应用，所有非静态资源请求都返回index.html
  if (!path.includes(".")) {
    path = "/index.html";
  }
  
  // 返回静态资源
  try {
    // 尝试从GitHub Pages等CDN获取静态资源
    // 替换为您的实际静态资源托管地址
    const res = await fetch(`https://您的GitHub用户名.github.io/xiahua-ai${path}`);
    
    if (res.ok) {
      return new Response(res.body, {
        headers: res.headers,
      });
    }
  } catch (e) {
    console.error(e);
  }
  
  // 找不到资源时返回index.html（对SPA很重要）
  if (!path.endsWith(".js") && !path.endsWith(".css") && !path.endsWith(".png") && !path.endsWith(".jpg")) {
    try {
      const indexRes = await fetch(`https://您的GitHub用户名.github.io/xiahua-ai/index.html`);
      if (indexRes.ok) {
        return new Response(indexRes.body, {
          headers: { "Content-Type": "text/html" },
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  return new Response("Not Found", { status: 404 });
});

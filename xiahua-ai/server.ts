import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.178.0/http/file_server.ts";

serve((req) => {
  return serveDir(req, {
    fsRoot: "./dist",  // 使用相对路径，指向xiahua-ai目录下的dist文件夹
    urlRoot: "",
    showDirListing: false,
    enableCors: true,
    // 添加默认文档支持
    showIndex: true,
    // 处理找不到文件的情况，返回index.html以支持SPA路由
    serveUnknownAsIndex: true
  });
}, { 
  port: 8000,
  // 添加主机配置，使其在任何网络接口上可访问
  hostname: "0.0.0.0"
});

console.log("服务器运行在 http://localhost:8000/");
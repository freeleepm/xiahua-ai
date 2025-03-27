<template>
  <div class="min-h-[80vh] flex flex-col justify-center items-center py-16">
    <div class="container-custom text-center">
      <div class="text-9xl font-bold text-primary-500 mb-6">404</div>
      <h1 class="text-4xl font-bold mb-4">页面未找到</h1>
      <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        抱歉，您访问的页面不存在或已被移动。
      </p>
      <router-link to="/" class="btn btn-primary">
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 添加结构化数据
onMounted(() => {
  // 注入BreadcrumbList结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://xiahua-ai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "页面未找到"
      }
    ]
  };
  
  let script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
});
</script> 
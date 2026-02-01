<template>
  <div class="min-h-[80vh] flex flex-col justify-center items-center py-16">
    <div class="container-custom text-center">
      <div class="text-9xl font-bold text-primary-500 mb-6">404</div>
      <h1 class="text-4xl font-bold mb-4">{{ t('notFound.title') }}</h1>
      <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        {{ t('notFound.description') }}
      </p>
      <router-link to="/" class="btn btn-primary">
        {{ t('notFound.backHome') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
        "name": t('nav.home'),
        "item": "https://xiahua-ai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('notFound.title')
      }
    ]
  };
  
  let script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
});
</script> 
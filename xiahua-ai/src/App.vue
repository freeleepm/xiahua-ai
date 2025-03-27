<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

const route = useRoute()

// 监听路由变化，更新元数据
watch(
  () => route.meta,
  (meta) => {
    if (meta.title) {
      document.title = meta.title
    }
    
    // 更新描述元标签
    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (meta.description) {
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', meta.description)
      } else {
        descriptionMeta = document.createElement('meta')
        descriptionMeta.setAttribute('name', 'description')
        descriptionMeta.setAttribute('content', meta.description)
        document.head.appendChild(descriptionMeta)
      }
    }
    
    // 更新Open Graph标题
    let ogTitleMeta = document.querySelector('meta[property="og:title"]')
    if (meta.title) {
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', meta.title)
      }
    }
    
    // 更新Open Graph描述
    let ogDescriptionMeta = document.querySelector('meta[property="og:description"]')
    if (meta.description) {
      if (ogDescriptionMeta) {
        ogDescriptionMeta.setAttribute('content', meta.description)
      }
    }
    
    // 更新规范链接
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://xiahua-ai.com${route.path}`)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="app-container min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

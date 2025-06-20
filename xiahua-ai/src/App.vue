<script setup>
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { watch, ref, nextTick } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

const { locale } = useI18n()
const key = ref(0)

// 监听语言变化，重新渲染路由组件
watch(locale, async () => {
  // 增加key值触发RouterView重新渲染
  key.value++
})
</script>

<template>
  <div class="app">
    <TheHeader />
    <main>
      <RouterView :key="key" />
    </main>
    <TheFooter />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* 通用容器样式 */
.container-custom {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* 通用部分样式 */
.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

/* 通用标题样式 */
h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

h4 {
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
}

.btn-outline:hover {
  background-color: #3b82f6;
  color: white;
}

.btn-white {
  background-color: white;
  color: #3b82f6;
}

.btn-white:hover {
  background-color: #f9fafb;
}

/* 卡片样式 */
.card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
}
</style>

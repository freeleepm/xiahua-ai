<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <img src="@/assets/xiaohua-ai-top-logo.svg" alt="小华同学AI" class="h-10" />
        </router-link>

        <!-- 导航菜单 - 桌面端 -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" 
            class="nav-link" 
            :class="{ 'nav-link-active': $route.path === item.path }">
            {{ t(item.i18nKey) }}
          </router-link>
          <LanguageSwitcher class="ml-4" />
        </nav>

        <!-- 触发移动端菜单按钮 -->
        <div class="md:hidden flex items-center">
          <LanguageSwitcher class="mr-2" />
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700 p-2">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t py-4 shadow-md">
      <div class="container-custom">
        <nav class="flex flex-col space-y-4">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" 
            class="nav-link block py-2" 
            :class="{ 'nav-link-active': $route.path === item.path }"
            @click="isMobileMenuOpen = false">
            {{ t(item.i18nKey) }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'

const { t } = useI18n()
const isMobileMenuOpen = ref(false)

const navItems = [
  { i18nKey: 'nav.home', path: '/' },
  { i18nKey: 'nav.products', path: '/products' },
  { i18nKey: 'nav.projects', path: '/projects' },
  { i18nKey: 'nav.about', path: '/about' }
]
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-500 transition-colors font-medium;
}

.nav-link-active {
  @apply text-primary-500 font-semibold;
}
</style> 
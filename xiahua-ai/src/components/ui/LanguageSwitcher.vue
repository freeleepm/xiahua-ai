<template>
  <div class="relative" ref="switcherRef">
    <button 
      @click="toggleDropdown" 
      class="flex items-center gap-1 text-sm font-medium hover:text-primary-500 transition-colors"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span>{{ t(`common.language`) }}</span>
      <svg 
        class="w-4 h-4 transition-transform" 
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div 
      v-if="isOpen" 
      class="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 py-1"
    >
      <button 
        v-for="lang in languages" 
        :key="lang.code"
        @click="switchLanguage(lang.code)"
        class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        :class="{ 'text-primary-500 font-medium': currentLocale === lang.code }"
      >
        {{ t(`common.${lang.name}`) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const isOpen = ref(false)
const switcherRef = ref(null)

const languages = [
  { name: 'chinese', code: 'zh-CN' },
  { name: 'english', code: 'en' }
]

const currentLocale = computed(() => locale.value)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = (event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

const switchLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
  isOpen.value = false
}

// 添加全局点击事件监听器
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
</script> 
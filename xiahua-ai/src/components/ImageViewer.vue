<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90" @click.self="close">
        <!-- 关闭按钮 -->
        <button @click="close" class="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- 左箭头 -->
        <button 
          @click="prevImage" 
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <!-- 右箭头 -->
        <button 
          @click="nextImage" 
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- 图片展示 -->
        <div class="relative w-full h-full flex items-center justify-center">
          <transition name="fade" mode="out-in">
            <img 
              :key="currentIndex" 
              :src="images[currentIndex]" 
              :alt="`图片 ${currentIndex + 1}`" 
              class="max-w-[90%] max-h-[90vh] object-contain"
            />
          </transition>
        </div>
        
        <!-- 图片指示器 -->
        <div class="absolute bottom-8 left-0 right-0 flex justify-center">
          <div class="bg-black/40 rounded-full px-4 py-2 backdrop-blur-sm">
            <div class="flex space-x-2">
              <button 
                v-for="(_, index) in images" 
                :key="index" 
                @click="currentIndex = index"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="currentIndex === index ? 'bg-white scale-110' : 'bg-gray-400 hover:bg-gray-300'"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.initialIndex)

// 监听isOpen变化，重置索引
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    currentIndex.value = props.initialIndex
  }
})

// 监听initialIndex变化
watch(() => props.initialIndex, (newValue) => {
  currentIndex.value = newValue
})

// 下一张图片
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// 上一张图片
const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

// 关闭查看器
const close = () => {
  emit('close')
}

// 键盘快捷键
const handleKeyDown = (e) => {
  if (!props.isOpen) return
  
  if (e.key === 'ArrowRight') {
    nextImage()
  } else if (e.key === 'ArrowLeft') {
    prevImage()
  } else if (e.key === 'Escape') {
    close()
  }
}

// 挂载和卸载键盘事件监听器
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 
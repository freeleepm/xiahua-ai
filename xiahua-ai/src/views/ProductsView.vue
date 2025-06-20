<template>
  <div>
    <!-- 页面标题区域 - 增加科技感背景和动态元素 -->
    <section class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 py-20 md:py-24">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-20"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-30"></div>
      
      <!-- 装饰性光晕 -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <div class="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
          <span class="flex items-center">
            <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            {{ t('products.hero.badge') }}
          </span>
        </div>
        
        <!-- 优化标题效果，保持国际化支持 -->
        <div class="mb-6">
          <h1 class="text-white flex items-center flex-wrap">
            <span v-if="locale === 'zh-CN'" class="title-first-part mr-3">我们的</span>
            <span v-else class="title-first-part mr-3">Our</span>
            <span class="relative inline-block title-highlight">
              <!-- 背景效果 -->
              <span class="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-lg transform rotate-0 border border-white/20 title-bg-animate"></span>
              
              <!-- 微妙的装饰光点 -->
              <span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full opacity-70 animate-pulse"></span>
              <span class="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-60" style="animation: pulse 2s infinite; animation-delay: 0.5s"></span>
              
              <!-- 文字内容 -->
              <span class="relative inline-block px-5 py-1.5 text-white font-bold">
                {{ locale === 'zh-CN' ? '产品' : 'Products' }}
              </span>
              
              <!-- 底部装饰线 -->
              <span class="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-300 to-primary-200 rounded-full title-underline-animate"></span>
            </span>
          </h1>
        </div>
        
        <p class="text-white text-opacity-90 text-xl max-w-2xl">{{ t('products.hero.description') }}</p>
      </div>
    </section>

    <!-- 产品筛选 - 增强视觉吸引力 -->
    <section class="py-8 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 relative overflow-hidden">
      <!-- 装饰背景元素 -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-40"></div>
      <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-50 rounded-full opacity-30"></div>
      
      <div class="container-custom relative z-10">
        <!-- 分类标题区域优化 -->
        <div class="relative text-center mb-6">
          <div class="inline-block bg-gradient-to-r from-primary-600/10 via-primary-500/20 to-primary-600/10 rounded-xl px-6 py-2 backdrop-blur-sm">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-200/20 rounded-full blur-3xl"></div>
            <div class="flex items-center justify-center">
              <div class="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 animate-pulse"></div>
              <span class="text-primary-700 font-semibold tracking-wide">{{ t('products.filter.title') }}</span>
              <div class="w-1.5 h-1.5 rounded-full bg-primary-500 ml-2 animate-pulse" style="animation-delay: 0.5s"></div>
            </div>
          </div>
          <!-- 底部装饰线 -->
          <div class="h-px w-36 mx-auto mt-3 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
        </div>
        
        <div class="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-4 py-2 rounded-full text-sm transition-all duration-300 hover:shadow-md relative overflow-hidden group"
            :class="activeCategory === category.id ? 
              'bg-primary-500 text-white shadow-md shadow-primary-200/50 transform scale-105' : 
              'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'"
          >
            <!-- 选中项的背景效果 -->
            <span v-if="activeCategory === category.id" class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-50"></span>
            <!-- 选中项的闪光效果 -->
            <span v-if="activeCategory === category.id" class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 transform"></span>
            
            <span class="relative z-10">{{ t(`products.filter.categories.${category.id}`) }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 产品列表 - 增强卡片设计 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-50"></div>
      
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in filteredProducts" :key="product.id" class="group relative">
            <!-- 卡片主体 -->
            <div class="relative flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 cursor-pointer" @click="navigateToProduct(product.id)">
              <div class="h-52 bg-gray-100 overflow-hidden relative">
                <!-- 产品图片 -->
                <img :src="product.image" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <!-- 状态标签 -->
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm">
                  {{ getCategoryName(product.categoryId) }}
                </div>
              </div>
              
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {{ product.title }}
                </h3>
                
                <p class="text-gray-600 mb-6 flex-grow">
                  {{ product.description }}
                </p>
                
                <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div class="flex items-center">
                    <span v-if="product.isFree" class="flex items-center text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-full text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ t('products.productCard.free') }}
                    </span>
                    <span v-else class="flex items-center text-primary-600 font-medium bg-primary-50 px-3 py-1.5 rounded-full text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ t('products.productCard.paid') }}
                    </span>
                  </div>
                  
                  <button 
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 text-primary-600 font-medium text-sm transition-all duration-200 hover:shadow-md"
                    @click.stop="navigateToProduct(product.id)"
                  >
                    {{ t('products.productCard.details') }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- 悬浮效果遮罩 -->
            <div class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/10 rounded-xl transition-colors duration-300"></div>
          </div>
        </div>

        <!-- 无结果提示 - 优化样式 -->
        <div v-if="filteredProducts.length === 0" class="card text-center py-16 my-8 backdrop-blur-sm bg-white/80 border border-gray-200">
          <div class="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-700 mb-2">{{ t('products.noResults.title') }}</h3>
          <p class="text-gray-500 mb-6">{{ t('products.noResults.description') }}</p>
          <button @click="activeCategory = 'all'" class="btn btn-outline mx-auto">
            {{ t('products.noResults.viewAll') }}
          </button>
        </div>
      </div>
    </section>

    <!-- 产品合作 - 增加科技感和视觉吸引力 -->
    <section class="section bg-gradient-tech relative overflow-hidden">
      <!-- 科技感背景元素 -->
      <div class="absolute inset-0 dot-grid opacity-10"></div>
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      
      <!-- 装饰光晕 -->
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div class="container-custom relative z-10 py-12">
        <div class="card-glass relative overflow-hidden bg-white/10 backdrop-blur-md p-8 md:p-12 text-center border border-white/20 rounded-2xl shadow-lg">
          <div class="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium">
            <span class="flex items-center">
              <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
              {{ t('products.customService.badge') }}
            </span>
          </div>
          
          <h2 class="mb-6 text-white">{{ t('products.customService.title') }}</h2>
          
          <p class="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto">
            {{ t('products.customService.description') }}
          </p>
          
          <router-link to="/about" class="btn bg-white text-primary-600 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
            {{ t('products.customService.contactBtn') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()

// 检查翻译键是否存在
const hasTranslation = (key) => {
  const message = t(key)
  // 如果返回的是键名本身，说明没有对应的翻译
  return message !== key && message !== ''
}

// 分类数据
const categories = [
  { id: 'all' },
  { id: 'ai' },
  { id: 'data' },
  { id: 'assist' },
  { id: 'other' }
]

// 产品数据 - 添加更多详细信息
const products = [
  {
    id: 'watermark',
    categoryId: 'assist',
    isFree: true
  },
  {
    id: 'idPhoto',
    categoryId: 'assist',
    isFree: true
  },
  {
    id: 'fayan',
    categoryId: 'assist',
    isFree: true
  },
  {
    id: 'mcpHub',
    categoryId: 'ai',
    isFree: true
  },
  {
    id: 'aiWriting',
    categoryId: 'ai',
    isFree: false
  },
  {
    id: 'legalEye',
    categoryId: 'ai',
    isFree: false
  },
  {
    id: 'dataAnalysis',
    categoryId: 'data',
    isFree: false
  },
  {
    id: 'voiceAssistant',
    categoryId: 'assist',
    isFree: true
  },
  {
    id: 'codeAssistant',
    categoryId: 'ai',
    isFree: true
  },
  {
    id: 'dataViz',
    categoryId: 'data',
    isFree: false
  },
  {
    id: 'creativeInspiration',
    categoryId: 'other',
    isFree: true
  }
].map(product => {
  // 动态添加产品标题和描述，基于国际化文本
  return {
    ...product,
    title: hasTranslation(`products.productItems.${product.id}.title`) ? 
      t(`products.productItems.${product.id}.title`) : 
      product.id,
    description: hasTranslation(`products.productItems.${product.id}.description`) ? 
      t(`products.productItems.${product.id}.description`) : 
      '',
    image: getProductImage(product.id)
  }
})

// 获取产品图片
function getProductImage(productId) {
  switch(productId) {
    case 'watermark':
      return 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'idPhoto':
      return 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'fayan':
      return 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'mcpHub':
      return 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600'
    case 'aiWriting':
      return 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600'
    case 'legalEye':
      return 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    case 'dataAnalysis':
      return 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'voiceAssistant':
      return 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'codeAssistant':
      return 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'dataViz':
      return 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080'
    case 'creativeInspiration':
      return 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1080'
    default:
      return 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080'
  }
}

// 当前活跃分类
const activeCategory = ref('all')

// 过滤产品
const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return products
  }
  return products.filter(product => product.categoryId === activeCategory.value)
})

// 获取分类名称
const getCategoryName = (categoryId) => {
  return categoryId ? t(`products.filter.categories.${categoryId}`) : t('products.filter.categories.other')
}

// 监听语言变化，重新生成结构化数据
watch(locale, () => {
  updateStructuredData()
})

// 添加结构化数据
const updateStructuredData = () => {
  // 移除之前的结构化数据脚本
  const oldScripts = document.querySelectorAll('script[data-structured-data]')
  oldScripts.forEach(script => script.remove())
  
  // 商品集合结构化数据
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "description": product.description,
        "image": product.image,
        "url": `https://xiahua-ai.com/products/${product.id}`,
        "category": getCategoryName(product.categoryId),
        "offers": {
          "@type": "Offer",
          "price": product.isFree ? "0" : "联系获取",
          "priceCurrency": "CNY",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };
  
  // 面包屑导航结构化数据
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
        "name": t('nav.products'),
        "item": "https://xiahua-ai.com/products"
      }
    ]
  };
  
  // 注入结构化数据
  let productListScript = document.createElement('script');
  productListScript.type = 'application/ld+json';
  productListScript.textContent = JSON.stringify(productListSchema);
  productListScript.setAttribute('data-structured-data', 'product-list');
  document.head.appendChild(productListScript);
  
  let breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  breadcrumbScript.setAttribute('data-structured-data', 'breadcrumb');
  document.head.appendChild(breadcrumbScript);
}

// 初始化结构化数据
onMounted(() => {
  updateStructuredData();
});

// 添加产品点击处理函数
const handleProductClick = (productId) => {
  // 在这里可以添加产品点击后的处理逻辑
  console.log(`Product ${productId} clicked`);
}

// 使用编程式导航跳转到产品详情页
const navigateToProduct = (productId) => {
  console.log(`Navigating to product: ${productId}`);
  router.push(`/products/${productId}`);
}
</script>

<style>
/* 确保全局样式匹配首页 */
.bg-gradient-tech {
  background: linear-gradient(135deg, #3a66db 0%, #2e51bb 100%);
}

/* 卡片基础样式 */
.card {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1);
}

/* 隐藏滚动条但保持功能 */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 新增标题样式 */
.title-first-part {
  font-size: 2.75rem;
  line-height: 3rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-highlight {
  font-size: 2.75rem;
  line-height: 3rem;
  transition: all 0.3s ease;
}

.title-highlight:hover {
  transform: translateY(-2px);
}

.title-highlight .absolute.bottom-0 {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.title-highlight:hover .absolute.bottom-0 {
  opacity: 1;
  height: 2px;
  transform: translateY(-1px);
}

/* 标题动画效果 */
.title-bg-animate {
  animation: subtle-float 6s ease-in-out infinite;
}

.title-underline-animate {
  animation: glow-line 3s ease-in-out infinite;
}

@keyframes subtle-float {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-2px) rotate(0.5deg);
  }
}

@keyframes glow-line {
  0%, 100% {
    opacity: 0.7;
    width: 100%;
  }
  50% {
    opacity: 1;
    width: 95%;
    margin-left: 2.5%;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style> 
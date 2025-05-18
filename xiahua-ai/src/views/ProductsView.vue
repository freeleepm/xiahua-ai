<template>
  <div>
    <!-- 页面标题区域 - 增加科技感背景和动态元素 -->
    <section class="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 py-16 md:py-20">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-20"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-30"></div>
      
      <!-- 装饰性光晕 -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <div class="inline-block px-3 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
          <span class="flex items-center">
            <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            探索AI技术落地应用
          </span>
        </div>
        <h1 class="text-white mb-4">我们的<span class="relative inline-block">
          <span class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>产品
        </span></h1>
        <p class="text-white text-opacity-90 text-xl max-w-2xl">探索小华同学AI团队开发的创新产品，体验科技带来的智能生活方式</p>
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
              <span class="text-primary-700 font-semibold tracking-wide">分类浏览</span>
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
            
            <span class="relative z-10">{{ category.name }}</span>
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
            <div class="relative flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100">
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
                
                <p class="text-gray-600 mb-6 flex-grow">{{ product.description }}</p>
                
                <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div class="flex items-center">
                    <span v-if="product.isFree" class="flex items-center text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-full text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      免费使用
                    </span>
                    <span v-else class="flex items-center text-primary-600 font-medium bg-primary-50 px-3 py-1.5 rounded-full text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      付费产品
                    </span>
                  </div>
                  
                  <router-link 
                    :to="`/products/${product.id}`" 
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 text-primary-600 font-medium text-sm transition-all duration-200 hover:shadow-md"
                  >
                    了解详情
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </router-link>
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
          <h3 class="text-xl font-bold text-gray-700 mb-2">暂无产品</h3>
          <p class="text-gray-500 mb-6">该分类下暂时没有产品，请尝试其他分类。</p>
          <button @click="activeCategory = 'all'" class="btn btn-outline mx-auto">
            查看全部产品
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
              个性化服务
            </span>
          </div>
          
          <h2 class="mb-6 text-white">需要<span class="relative inline-block">
            <span class="absolute inset-x-0 bottom-0 h-3 bg-white/20 -z-10 transform skew-x-3"></span>定制开发</span>？
          </h2>
          
          <p class="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto">
            除了现有产品外，我们还提供AI应用定制开发服务，根据您的需求打造专属解决方案。
          </p>
          
          <router-link to="/about" class="btn bg-white text-primary-600 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
            联系我们
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
import { ref, computed, onMounted } from 'vue'

// 分类数据
const categories = [
  { id: 'all', name: '全部' },
  { id: 'ai', name: 'AI工具' },
  { id: 'data', name: '数据分析' },
  { id: 'assist', name: '智能助手' },
  { id: 'other', name: '其他' }
]

// 产品数据 - 添加更多详细信息
const products = [
  {
    id: 'ai-writing',
    title: 'AI写作助手',
    description: '基于大型语言模型的智能写作工具，提升您的文字创作效率，支持多种文体和风格定制。',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1080',
    categoryId: 'ai',
    isFree: false
  },
  {
    id: 'data-analysis',
    title: '智能数据分析平台',
    description: '利用AI处理和分析海量数据，发现隐藏的商业洞见，助力企业做出更明智的决策。',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080',
    categoryId: 'data',
    isFree: false
  },
  {
    id: 'voice-assistant',
    title: '智能语音助手',
    description: '自然交互的语音助手，为您提供全方位的智能服务，打造无缝的人机交互体验。',
    image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080',
    categoryId: 'assist',
    isFree: true
  },
  {
    id: 'code-assistant',
    title: '代码辅助工具',
    description: '智能代码补全与优化工具，提高开发效率，减少错误，适合各种编程语言。',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1080',
    categoryId: 'ai',
    isFree: true
  },
  {
    id: 'data-viz',
    title: '数据可视化工具',
    description: '直观展示复杂数据关系，定制各类图表与仪表盘，让数据更易理解。',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080',
    categoryId: 'data',
    isFree: false
  },
  {
    id: 'creative-inspiration',
    title: '创意灵感生成器',
    description: '突破创意瓶颈，获取新鲜灵感，适用于设计师、作家、营销人员等创意工作者。',
    image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1080',
    categoryId: 'other',
    isFree: true
  }
]

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
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.name : '未分类'
}

// 添加结构化数据
onMounted(() => {
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
        "name": "首页",
        "item": "https://xiahua-ai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "产品",
        "item": "https://xiahua-ai.com/products"
      }
    ]
  };
  
  // 注入结构化数据
  let productListScript = document.createElement('script');
  productListScript.type = 'application/ld+json';
  productListScript.textContent = JSON.stringify(productListSchema);
  document.head.appendChild(productListScript);
  
  let breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);
});
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
</style> 
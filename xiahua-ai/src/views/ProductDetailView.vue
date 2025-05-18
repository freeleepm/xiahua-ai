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
        <!-- 返回按钮 -->
        <router-link to="/products" class="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回产品列表
        </router-link>
        
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <!-- 产品图片 -->
          <div class="w-full md:w-2/5 relative">
            <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
              <img :src="product.image" :alt="product.title" class="w-full h-full object-cover" />
              
              <!-- 图片装饰元素 -->
              <div class="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60"></div>
              <div class="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60"></div>
            </div>
          </div>
          
          <!-- 产品信息 -->
          <div class="w-full md:w-3/5 text-white">
            <div class="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/20 shadow-lg">
              <span class="flex items-center">
                <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                {{ getCategoryName(product.categoryId) }}
              </span>
            </div>
            
            <h1 class="mb-4 text-white drop-shadow-md">{{ product.title }}<span class="relative inline-block ml-2">
              <span class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>
            </span></h1>
            <p class="text-white/90 text-xl mb-6 leading-relaxed drop-shadow-sm">{{ product.shortDescription }}</p>
            
            <div class="flex flex-wrap gap-4">
              <button class="btn bg-white text-primary-600 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                立即体验
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button class="btn btn-outline border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品概览信息卡 -->
    <section class="py-12 bg-gradient-to-b from-gray-50 to-white relative">
      <!-- 装饰背景元素 -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 卡片1: 功能亮点 -->
          <div class="card-glass p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 group">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mr-3 group-hover:bg-primary-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-primary-600 transition-colors">核心功能</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="feature in product.features" :key="feature" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <!-- 卡片2: 技术规格 -->
          <div class="card-glass p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 group">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-500 mr-3 group-hover:bg-secondary-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-secondary-600 transition-colors">技术规格</h3>
            </div>
            <div class="space-y-3">
              <div v-for="spec in product.specs" :key="spec.name" class="flex justify-between">
                <span class="text-gray-600">{{ spec.name }}</span>
                <span class="font-medium text-gray-900">{{ spec.value }}</span>
              </div>
            </div>
          </div>
          
          <!-- 卡片3: 价格与授权 -->
          <div class="card-glass p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1 group">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-500 mr-3 group-hover:bg-accent-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-accent-600 transition-colors">价格与授权</h3>
            </div>
            <div class="text-center py-4">
              <div v-if="product.isFree" class="flex flex-col items-center">
                <span class="text-green-600 font-medium bg-green-50 px-4 py-2 rounded-full text-sm mb-2">
                  免费使用
                </span>
                <p class="text-gray-600 text-sm">无需任何费用即可使用所有功能</p>
              </div>
              <div v-else class="flex flex-col items-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">¥{{ product.price }}</div>
                <p class="text-gray-600 text-sm mb-4">{{ product.pricingModel }}</p>
                <button class="btn btn-primary w-full hover:-translate-y-1 shadow-md hover:shadow-lg transition-all">
                  立即购买
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详细信息区域 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      
      <div class="container-custom relative z-10">
        <!-- 标签页导航 -->
        <div class="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-6 py-3 font-medium relative whitespace-nowrap"
            :class="activeTab === tab.id ? 'text-primary-600' : 'text-gray-500 hover:text-gray-700'"
          >
            {{ tab.name }}
            <div 
              class="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300"
              :class="activeTab === tab.id ? 'bg-primary-500' : 'bg-transparent'"
            ></div>
          </button>
        </div>
        
        <!-- 详情内容 -->
        <div class="pb-8">
          <!-- 产品详情 -->
          <div v-if="activeTab === 'details'" class="space-y-8">
            <!-- 产品介绍 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">产品介绍</h3>
              <div class="prose prose-lg max-w-none text-gray-700">
                <p>{{ product.detailedDescription }}</p>
                <!-- 可以使用v-html渲染富文本内容 -->
              </div>
            </div>
            
            <!-- 使用场景 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">适用场景</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="scenario in product.useCases" :key="scenario.title" class="card p-6 hover:border-primary-100">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mr-3">
                      <span class="text-sm font-bold">{{ scenario.icon }}</span>
                    </div>
                    <h4 class="font-semibold text-lg">{{ scenario.title }}</h4>
                  </div>
                  <p class="text-gray-600">{{ scenario.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- 产品图片展示 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">产品展示</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  v-for="(image, index) in product.images" 
                  :key="index" 
                  class="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer hover:shadow-lg transition-all duration-300"
                  @click="openImageViewer(index)"
                >
                  <img 
                    :src="image" 
                    :alt="`${product.title} - 图片 ${index + 1}`" 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <!-- 图片悬浮效果 -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div class="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                      </svg>
                    </div>
                    <!-- 图片序号指示器 -->
                    <div class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      {{ index + 1 }}/{{ product.images.length }}
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 图片查看器组件 -->
              <ImageViewer 
                :images="product.images" 
                :initial-index="currentImageIndex" 
                :is-open="isImageViewerOpen" 
                @close="closeImageViewer"
              />
            </div>
          </div>
          
          <!-- 技术规格 -->
          <div v-if="activeTab === 'specs'" class="space-y-8">
            <div class="card p-6">
              <h3 class="text-xl font-bold mb-4 text-gray-800">详细规格</h3>
              <div class="space-y-6">
                <div v-for="category in product.specCategories" :key="category.name">
                  <h4 class="text-lg font-semibold mb-3 pb-2 border-b border-gray-100">{{ category.name }}</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="spec in category.items" :key="spec.name" class="flex justify-between">
                      <span class="text-gray-600">{{ spec.name }}</span>
                      <span class="font-medium text-gray-900">{{ spec.value }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 用户评价 -->
          <div v-if="activeTab === 'reviews'" class="space-y-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-gray-800">用户评价</h3>
              <div class="flex items-center">
                <div class="text-3xl font-bold text-primary-600 mr-2">{{ product.rating }}</div>
                <div class="flex items-center">
                  <!-- 星星评分 -->
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-gray-600 ml-2">({{ product.reviewCount }}条评价)</span>
                </div>
              </div>
            </div>
            
            <!-- 用户评价列表 -->
            <div class="space-y-6">
              <div v-for="review in product.reviews" :key="review.id" class="card p-6">
                <div class="flex justify-between mb-3">
                  <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img v-if="review.userAvatar" :src="review.userAvatar" alt="用户头像" class="w-full h-full object-cover" />
                      <div v-else class="w-full h-full flex items-center justify-center text-gray-500 font-bold">
                        {{ review.userName.charAt(0).toUpperCase() }}
                      </div>
                    </div>
                    <div>
                      <div class="font-medium">{{ review.userName }}</div>
                      <div class="text-gray-500 text-sm">{{ review.date }}</div>
                    </div>
                  </div>
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-700">{{ review.content }}</p>
              </div>
            </div>
          </div>
          
          <!-- 常见问题 -->
          <div v-if="activeTab === 'faq'" class="space-y-6">
                          <h3 class="text-2xl font-bold mb-4 text-gray-800">常见问题</h3>
            <div class="space-y-4">
              <div v-for="faq in product.faqs" :key="faq.question" class="card p-6 hover:border-primary-100">
                <div class="font-semibold text-lg mb-2">{{ faq.question }}</div>
                <p class="text-gray-700">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相关产品推荐 -->
    <section class="section bg-gray-50 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-10">
          <h2 class="mb-4 text-gray-800">相关产品推荐</h2>
          <p class="text-gray-600 text-xl max-w-2xl mx-auto">探索更多与此相关的AI产品，开启智能化应用之旅</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id" 
            class="card glow-effect hover:border-primary-100 cursor-pointer transition-all duration-300"
            @click="handleProductClick(relatedProduct.id)"
          >
            <!-- 图片部分 -->
            <div class="h-48 bg-gray-100 overflow-hidden relative">
              <img 
                :src="relatedProduct.image" 
                :alt="relatedProduct.title" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              
              <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm">
                {{ getCategoryName(relatedProduct.categoryId) }}
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
                {{ relatedProduct.title }}
              </h3>
              
              <p class="text-gray-600 mb-4 line-clamp-2">{{ relatedProduct.description }}</p>
              
              <button 
                class="btn-primary-outline btn-sm inline-flex items-center group hover:bg-primary-50 active:bg-primary-100"
                @click.stop="handleProductClick(relatedProduct.id)"
              >
                了解详情
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 咨询和联系部分 -->
    <section class="section bg-gradient-to-r from-primary-700 to-primary-500 text-white relative overflow-hidden">
      <!-- 背景元素 -->
      <div class="absolute inset-0 dot-grid opacity-10"></div>
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      
      <!-- 装饰性光晕 - 与头部保持一致 -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary-400/30 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-400/30 rounded-full blur-3xl opacity-40"></div>
      
      <div class="container-custom relative z-10">
        <div class="card-glass bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl overflow-hidden relative">
          <div class="text-center mb-8">
            <div class="inline-block px-4 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              <span class="flex items-center">
                <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                个性化咨询
              </span>
            </div>
            
            <h2 class="mb-4 text-white">需要<span class="relative inline-block">
              <span class="absolute inset-0 bg-white/10 transform -skew-x-12 -z-10 rounded"></span>定制解决方案
            </span>？</h2>
            <p class="text-white/90 text-xl max-w-2xl mx-auto mb-8">
              联系我们的专业团队，获取针对您业务需求的个性化AI解决方案
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn bg-white text-primary-600 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                立即咨询
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              
              <router-link to="/about" class="btn btn-outline border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                了解我们的服务
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ImageViewer from '../components/ImageViewer.vue'

const route = useRoute()
const router = useRouter()

// 产品数据
const product = ref({
  id: '',
  title: '',
  categoryId: '',
  shortDescription: '',
  detailedDescription: '',
  image: '',
  images: [],
  isFree: false,
  price: 0,
  pricingModel: '',
  rating: 0,
  reviewCount: 0,
  features: [],
  specs: [],
  specCategories: [],
  useCases: [],
  reviews: [],
  faqs: []
})

// 图片查看器状态
const isImageViewerOpen = ref(false)
const currentImageIndex = ref(0)

// 获取产品信息
const fetchProductData = async (productId) => {
  try {
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // 根据产品ID获取不同的产品数据
    let mockProduct = {
      ...product.value,
      id: productId
    }
    
    // 根据不同的产品ID返回不同的数据
    switch(productId) {
      case 'ai-writing':
        mockProduct = {
          id: productId,
          title: 'AI写作助手',
          categoryId: 'ai',
          shortDescription: '基于大型语言模型的智能写作工具，提升您的文字创作效率。',
          image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
          images: [
            'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
        break
      case 'data-analysis':
        mockProduct = {
          id: productId,
          title: '智能数据分析平台',
          categoryId: 'data',
          shortDescription: '利用AI处理和分析海量数据，发现隐藏的商业洞见。',
          image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
          images: [
            'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
        break
      case 'voice-assistant':
        mockProduct = {
          id: productId,
          title: '智能语音助手',
          categoryId: 'assist',
          shortDescription: '自然交互的语音助手，为您提供全方位的智能服务。',
          image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
          images: [
            'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/8439069/pexels-photo-8439069.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/8439082/pexels-photo-8439082.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
        break
      default:
        mockProduct = {
          id: productId,
          title: '未知产品',
          categoryId: 'other',
          shortDescription: '该产品信息暂未添加',
          image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
          images: [
            'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600'
          ]
        }
    }
    
    // 更新产品数据
    product.value = {
      ...product.value,
      ...mockProduct
    }
    
    // 更新title
    document.title = `${product.value.title} - 产品详情 - 小华同学AI`
    
    console.log(`Fetched product data for ID: ${productId}`)
  } catch (error) {
    console.error('Error fetching product data:', error)
    router.push('/products')
  }
}

// 监听路由参数变化
watch(() => route.params.id, (newId, oldId) => {
  if (newId && newId !== oldId) {
    fetchProductData(newId)
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}, { immediate: true })

// 打开图片查看器
const openImageViewer = (index) => {
  currentImageIndex.value = index
  isImageViewerOpen.value = true
  // 添加禁止滚动类
  document.body.classList.add('overflow-hidden')
}

// 关闭图片查看器
const closeImageViewer = () => {
  isImageViewerOpen.value = false
  // 移除禁止滚动类
  document.body.classList.remove('overflow-hidden')
}

// 标签页数据
const tabs = [
  { id: 'details', name: '产品详情' },
  { id: 'specs', name: '技术规格' },
  { id: 'reviews', name: '用户评价' },
  { id: 'faq', name: '常见问题' }
]
const activeTab = ref('details')

// 相关产品示例数据
const relatedProducts = computed(() => {
  // 根据当前产品的类别返回相关产品
  const currentCategory = product.value.categoryId
  return [
    {
      id: 'voice-assistant',
      title: '智能语音助手',
      description: '自然交互的语音助手，为您提供全方位的智能服务，打造无缝的人机交互体验。',
      image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'assist'
    },
    {
      id: 'data-viz',
      title: '数据可视化工具',
      description: '直观展示复杂数据关系，定制各类图表与仪表盘，让数据更易理解。',
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'data'
    },
    {
      id: 'code-assistant',
      title: '代码辅助工具',
      description: '智能代码补全与优化工具，提高开发效率，减少错误，适合各种编程语言。',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'ai'
    }
  ].filter(p => p.id !== product.value.id) // 过滤掉当前产品
})

// 处理产品点击
const handleProductClick = (productId) => {
  // 如果点击的是当前产品，不做任何操作
  if (productId === product.value.id) return
  
  // 使用 router.push 进行导航
  router.push(`/products/${productId}`)
}

// 获取分类名称的方法
const getCategoryName = (categoryId) => {
  const categoryMap = {
    'all': '全部',
    'ai': 'AI工具',
    'data': '数据分析',
    'assist': '智能助手',
    'other': '其他'
  }
  return categoryMap[categoryId] || categoryId
}

onMounted(() => {
  // 获取URL中的产品ID参数
  const productId = route.params.id
  if (productId) {
    fetchProductData(productId)
  }
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.btn-sm {
  @apply px-3 py-1.5 text-sm;
}

.btn-primary-outline {
  @apply text-primary-500 border border-primary-500 rounded-lg px-4 py-2 hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style> 
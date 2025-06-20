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
          {{ t('productDetail.backToProducts') }}
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
              <a 
                :href="product.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn bg-white text-primary-600 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                {{ t('productDetail.tryNow') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              <button class="btn btn-outline border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                {{ t('productDetail.learnMore') }}
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
              <h3 class="text-lg font-bold group-hover:text-primary-600 transition-colors">{{ t('productDetail.coreFeatures') }}</h3>
            </div>
            <ul class="space-y-2">
              <li v-for="feature in product.features" :key="feature" class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-700">
                  {{ 
                    product.id === 'watermark' && typeof feature === 'string' && t(`productDetail.watermark.features.${camelCase(feature)}`, feature) ||
                    product.id === 'idPhoto' && typeof feature === 'string' && t(`productDetail.idPhoto.features.${camelCase(feature)}`, feature) ||
                    typeof feature === 'string' ? feature : feature.title 
                  }}
                </span>
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
              <h3 class="text-lg font-bold group-hover:text-secondary-600 transition-colors">{{ t('productDetail.techSpecs') }}</h3>
            </div>
            <div class="space-y-3">
              <div v-for="(value, name) in product.specs" :key="name" class="flex justify-between">
                <span class="text-gray-600">
                  {{ 
                    product.id === 'watermark' ? t(`productDetail.watermark.specs.${camelCase(name)}`, name) :
                    product.id === 'idPhoto' ? t(`productDetail.idPhoto.specs.${camelCase(name)}`, name) :
                    name 
                  }}
                </span>
                <span class="font-medium text-gray-900">{{ value }}</span>
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
              <h3 class="text-lg font-bold group-hover:text-accent-600 transition-colors">{{ t('productDetail.pricingAuth') }}</h3>
            </div>
                          <div class="text-center py-4">
              <div v-if="product.isFree" class="flex flex-col items-center">
                <span class="text-green-600 font-medium bg-green-50 px-4 py-2 rounded-full text-sm mb-2">
                  {{ t('productDetail.freeToUse') }}
                </span>
                <p class="text-gray-600 text-sm">{{ t('productDetail.noFeeRequired') }}</p>
              </div>
              <div v-else class="flex flex-col items-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">¥{{ product.price }}</div>
                <p class="text-gray-600 text-sm mb-4">{{ product.pricingModel }}</p>
                <button class="btn btn-primary w-full hover:-translate-y-1 shadow-md hover:shadow-lg transition-all">
                  {{ t('productDetail.buyNow') }}
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
            {{ t(tab.name) }}
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
              <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ t('productDetail.productIntro') }}</h3>
              <div class="prose prose-lg max-w-none text-gray-700">
                <p>{{ product.detailedDescription }}</p>
                <!-- 可以使用v-html渲染富文本内容 -->
              </div>
            </div>
            
            <!-- 使用场景 -->
            <div v-if="activeTab === 'details'" class="mb-16">
              <div class="text-center mb-12">
                <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ t('productDetail.applicationScenarios') }}</h3>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                  {{ t('productDetail.scenariosDescription') }}
                </p>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(useCase, index) in product.useCases" :key="index" 
                  class="card hover:shadow-md hover:border-primary-100 transition-all duration-300 p-6">
                  <div class="mb-4 text-primary-600 flex items-center justify-center w-12 h-12 rounded-full bg-primary-50">
                    <!-- 不同的应用场景图标 -->
                    <svg v-if="useCase.icon === 'certificate' || useCase.title === '证书防伪' || useCase.title === 'Certificate Protection'" 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <svg v-else-if="useCase.icon === 'file' || useCase.title === '文件保护' || useCase.title === 'File Protection'" 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <svg v-else-if="useCase.icon === 'copyright' || useCase.title === '版权保护' || useCase.title === 'Copyright Protection'" 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17" />
                    </svg>
                    <svg v-else-if="useCase.icon === 'card' || useCase.title === '证件办理' || useCase.title === 'ID Document Processing'" 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <svg v-else-if="useCase.icon === 'briefcase' || useCase.title === '求职应聘' || useCase.title === 'Job Applications'" 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <svg v-else-if="useCase.icon === 'academic' || useCase.title === '学生证件' || useCase.title === 'Student ID Documents'" 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <svg v-else 
                      xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  
                  <h4 class="text-lg font-semibold mb-2 text-gray-800">
                    {{ 
                      product.id === 'watermark' && useCase.title === '证书防伪'
                        ? t('productDetail.watermark.useCases.certificateProtection') :
                      product.id === 'watermark' && useCase.title === '文件保护'
                        ? t('productDetail.watermark.useCases.fileProtection') :
                      product.id === 'watermark' && useCase.title === '版权保护'
                        ? t('productDetail.watermark.useCases.copyrightProtection') :
                      product.id === 'idPhoto' && useCase.title === '证件办理'
                        ? t('productDetail.idPhoto.useCases.idProcessing') :
                      product.id === 'idPhoto' && useCase.title === '求职应聘'
                        ? t('productDetail.idPhoto.useCases.jobApplication') :
                      product.id === 'idPhoto' && useCase.title === '学生证件'
                        ? t('productDetail.idPhoto.useCases.studentId') :
                      useCase.title 
                    }}
                  </h4>
                  <p class="text-gray-600">
                    {{ 
                      product.id === 'watermark' && useCase.title === '证书防伪'
                        ? t('productDetail.watermark.useCases.certificateDesc') :
                      product.id === 'watermark' && useCase.title === '文件保护'
                        ? t('productDetail.watermark.useCases.fileDesc') :
                      product.id === 'watermark' && useCase.title === '版权保护'
                        ? t('productDetail.watermark.useCases.copyrightDesc') :
                      product.id === 'idPhoto' && useCase.title === '证件办理'
                        ? t('productDetail.idPhoto.useCases.idDesc') :
                      product.id === 'idPhoto' && useCase.title === '求职应聘'
                        ? t('productDetail.idPhoto.useCases.jobDesc') :
                      product.id === 'idPhoto' && useCase.title === '学生证件'
                        ? t('productDetail.idPhoto.useCases.studentDesc') :
                      useCase.description 
                    }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- 产品图片展示 -->
            <div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ t('productDetail.productShowcase') }}</h3>
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
                      {{ t('productDetail.photoIndex', { current: index + 1, total: product.images.length }) }}
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
              <h3 class="text-xl font-bold mb-4 text-gray-800">
                {{ product.id === 'watermark' ? t('productDetail.watermark.sections.technicalSpecs') : t('productDetail.detailedSpecs') }}
              </h3>
              <div class="space-y-6">
                <div v-for="category in product.specCategories" :key="category.name">
                  <h4 class="text-lg font-semibold mb-3 pb-2 border-b border-gray-100">
                    {{ 
                      product.id === 'watermark' && category.name === t('productDetail.specCategories.general') 
                        ? t('productDetail.watermark.sections.generalInfo') : 
                      product.id === 'watermark' && category.name === t('productDetail.specCategories.technical') 
                        ? t('productDetail.watermark.sections.technicalParams') : 
                      category.name 
                    }}
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="spec in category.items" :key="spec.name" class="flex justify-between">
                      <span class="text-gray-600">
                        {{ 
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.general') && spec.name === '支持格式'
                            ? t('productDetail.watermark.techSpecs.supportFormats') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.general') && spec.name === '处理速度'
                            ? t('productDetail.watermark.techSpecs.processingSpeed') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.general') && spec.name === '最大文件大小'
                            ? t('productDetail.watermark.techSpecs.maxFileSize') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.general') && spec.name === '水印类型'
                            ? t('productDetail.watermark.techSpecs.watermarkType') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.technical') && spec.name === '批量处理'
                            ? t('productDetail.watermark.techSpecs.batchProcessing') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.technical') && spec.name === '水印验证'
                            ? t('productDetail.watermark.techSpecs.watermarkVerification') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.technical') && spec.name === '安全级别'
                            ? t('productDetail.watermark.techSpecs.securityLevel') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.technical') && spec.name === '数据加密'
                            ? t('productDetail.watermark.techSpecs.dataEncryption') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.technical') && spec.name === '免费使用'
                            ? t('productDetail.watermark.techSpecs.freeUse') :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.general') 
                            ? t(`productDetail.watermark.specs.${camelCase(spec.name)}`, spec.name) :
                          product.id === 'watermark' && category.name === t('productDetail.specCategories.technical')  
                            ? t(`productDetail.watermark.technical.${camelCase(spec.name)}`, spec.name) :
                          product.id === 'idPhoto' && category.name === t('productDetail.specCategories.general') 
                            ? t(`productDetail.idPhoto.specs.${camelCase(spec.name)}`, spec.name) :
                          product.id === 'idPhoto' && category.name === t('productDetail.specCategories.technical')  
                            ? t(`productDetail.idPhoto.technical.${camelCase(spec.name)}`, spec.name) :
                          spec.name
                        }}
                      </span>
                      <span class="font-medium text-gray-900">
                        {{ 
                          product.id === 'watermark' && spec.name === '水印类型' 
                            ? t('productDetail.watermark.specs.invisibleDigital', spec.value) :
                          product.id === 'watermark' && spec.name === '安全级别' 
                            ? t('productDetail.watermark.technical.bankGrade', spec.value) :
                          product.id === 'watermark' && spec.name === '处理速度' && spec.value === '2秒/文档'
                            ? t('productDetail.watermark.techSpecs.secsPerDoc', '2') :
                          product.id === 'watermark' && spec.name === '水印验证' && spec.value === '内置验证器'
                            ? t('productDetail.watermark.techSpecs.internalVerifier', spec.value) :
                          product.id === 'watermark' && spec.name === '使用限制' && spec.value === '无限制'
                            ? t('productDetail.watermark.techSpecs.unlimited', spec.value) :
                          product.id === 'watermark' && spec.name === '免费使用' 
                            ? t('productDetail.watermark.technical.freeUse', spec.value) :
                          product.id === 'idPhoto' && spec.name === '存储时间' 
                            ? t('productDetail.idPhoto.specs.forever', spec.value) :
                          product.id === 'idPhoto' && spec.name === '免费使用' 
                            ? t('productDetail.idPhoto.technical.freeUse', spec.value) :
                          spec.value
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 用户评价 -->
          <div v-if="activeTab === 'reviews'" class="space-y-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-2xl font-bold text-gray-800">{{ t('productDetail.userReviews') }}</h3>
              <div class="flex items-center">
                <div class="text-3xl font-bold text-primary-600 mr-2">{{ product.rating }}</div>
                <div class="flex items-center">
                  <!-- 星星评分 -->
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span class="text-gray-600 ml-2">({{ t('productDetail.reviewCount', { n: product.reviewCount }) }})</span>
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
                      <div class="font-medium">
                        {{ 
                          product.id === 'watermark' && review.id === 1 
                            ? t('productDetail.watermark.reviews.user1') :
                          product.id === 'watermark' && review.id === 2 
                            ? t('productDetail.watermark.reviews.user2') :
                          product.id === 'idPhoto' && review.id === 1 
                            ? t('productDetail.idPhoto.reviews.user1') :
                          product.id === 'idPhoto' && review.id === 2 
                            ? t('productDetail.idPhoto.reviews.user2') :
                          review.userName
                        }}
                      </div>
                      <div class="text-gray-500 text-sm">{{ review.date }}</div>
                    </div>
                  </div>
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-700">
                  {{ 
                    product.id === 'watermark' && review.id === 1 
                      ? t('productDetail.watermark.reviews.review1') :
                    product.id === 'watermark' && review.id === 2 
                      ? t('productDetail.watermark.reviews.review2') :
                    product.id === 'idPhoto' && review.id === 1 
                      ? t('productDetail.idPhoto.reviews.review1') :
                    product.id === 'idPhoto' && review.id === 2 
                      ? t('productDetail.idPhoto.reviews.review2') :
                    review.content
                  }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- 常见问题 -->
          <div v-if="activeTab === 'faq'" class="space-y-6">
            <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ t('productDetail.commonQuestions') }}</h3>
            <div class="space-y-4">
              <div v-for="faq in product.faqs" :key="faq.question" class="card p-6 hover:border-primary-100">
                <div class="font-semibold text-lg mb-2">
                  {{ 
                    product.id === 'watermark' && faq.question.includes('免费') 
                      ? t('productDetail.watermark.faqs.reallyFree') :
                    product.id === 'watermark' && faq.question.includes('外观') 
                      ? t('productDetail.watermark.faqs.affectAppearance') :
                    product.id === 'watermark' && faq.question.includes('验证') 
                      ? t('productDetail.watermark.faqs.verification') :
                    product.id === 'idPhoto' && faq.question.includes('免费') 
                      ? t('productDetail.idPhoto.faqs.reallyFree') :
                    product.id === 'idPhoto' && faq.question.includes('官方') 
                      ? t('productDetail.idPhoto.faqs.officialUse') :
                    product.id === 'idPhoto' && faq.question.includes('保存') 
                      ? t('productDetail.idPhoto.faqs.storageQuestion') :
                    faq.question
                  }}
                </div>
                <p class="text-gray-700">
                  {{ 
                    product.id === 'watermark' && faq.question.includes('免费') 
                      ? t('productDetail.watermark.faqs.freeAnswer') :
                    product.id === 'watermark' && faq.question.includes('外观') 
                      ? t('productDetail.watermark.faqs.appearanceAnswer') :
                    product.id === 'watermark' && faq.question.includes('验证') 
                      ? t('productDetail.watermark.faqs.verificationAnswer') :
                    product.id === 'idPhoto' && faq.question.includes('免费') 
                      ? t('productDetail.idPhoto.faqs.freeAnswer') :
                    product.id === 'idPhoto' && faq.question.includes('官方') 
                      ? t('productDetail.idPhoto.faqs.officialAnswer') :
                    product.id === 'idPhoto' && faq.question.includes('保存') 
                      ? t('productDetail.idPhoto.faqs.storageAnswer') :
                    faq.answer
                  }}
                </p>
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
          <h2 class="mb-4 text-gray-800">{{ t('productDetail.relatedProductsTitle') }}</h2>
          <p class="text-gray-600 text-xl max-w-2xl mx-auto">{{ t('productDetail.relatedProductsDesc') }}</p>
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
                {{ t('productDetail.learnMore') }}
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
                {{ t('productDetail.customConsultation') }}
              </span>
            </div>
            
            <h2 class="mb-4 text-white">{{ t('productDetail.needCustomSolution') }}</h2>
            <p class="text-white/90 text-xl max-w-2xl mx-auto mb-8">
              {{ t('productDetail.customSolutionDesc') }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn bg-white text-primary-600 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                {{ t('productDetail.consultNow') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              
              <router-link to="/about" class="btn btn-outline border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 transition-all active:translate-y-0">
                {{ t('productDetail.learnAboutServices') }}
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
import { useI18n } from 'vue-i18n'
import ImageViewer from '@/components/ImageViewer.vue'

// 转换字符串为驼峰命名
const camelCase = (str) => {
  if (!str) return '';
  // 处理中文字符串
  if (/[\u4e00-\u9fa5]/.test(str)) {
    // 水印类型 -> watermarkType
    // 处理速度 -> processingSpeed
    // 最大文件大小 -> maxFileSize
    // 使用限制 -> usageLimit
    // 批量处理 -> batchProcessing
    // 水印验证 -> watermarkVerification
    // 安全级别 -> securityLevel
    // 数据加密 -> dataEncryption
    // 免费使用 -> freeUse
    const mapping = {
      '支持格式': 'supportedFormats',
      '支持证件类型': 'supportedIdTypes',
      '处理速度': 'processingSpeed',
      '最大文件大小': 'maxFileSize',
      '水印类型': 'watermarkType',
      '使用限制': 'usageLimit',
      '照片规格': 'photoSpecs',
      '存储时间': 'storageTime',
      '批量处理': 'batchProcessing',
      '水印验证': 'watermarkVerification',
      '安全级别': 'securityLevel',
      '数据加密': 'dataEncryption',
      '免费使用': 'freeUse',
      'AI美颜': 'aiBeauty',
      '背景替换': 'backgroundReplacement',
      '云端备份': 'cloudBackup'
    };
    return mapping[str] || str;
  }
  
  // 处理英文字符串
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
};

const { t, locale, availableLocales } = useI18n()
const route = useRoute()
const router = useRouter()

// 检查翻译键是否存在
const hasTranslation = (key) => {
  const message = t(key)
  // 如果返回的是键名本身，说明没有对应的翻译
  return message !== key && message !== ''
}

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

// 获取产品数据
const fetchProductData = (productId) => {
  console.log(`开始获取产品数据: ${productId}`)
  console.log(`当前时间: ${new Date().toISOString()}`)
  
  // 重置产品数据
  product.value = {
    id: productId,
    title: '',
    description: '',
    features: [],
    useCases: [],
    testimonials: []
  }

  // 根据产品ID获取对应的数据
  try {
    // 检查是否有特殊产品处理
    if (productId === 'watermark' || productId === 'idPhoto' || productId === 'fayan') {
      console.log(`处理特殊产品: ${productId}`)
      // 这些产品有特殊处理逻辑
      handleSpecialProduct(productId)
    } else {
      console.log(`处理一般产品: ${productId}`)
      // 对于其他产品，使用通用处理逻辑
      handleGeneralProduct(productId)
    }
    
    // 更新结构化数据
    updateStructuredData()
  } catch (error) {
    console.error(`获取产品数据出错: ${error.message}`)
    // 显示错误信息
    product.value.title = t('productDetail.errorTitle')
    product.value.description = t('productDetail.errorDescription')
  }
}

// 监听路由参数变化
watch(() => route.params.id, (newId, oldId) => {
  if (newId && newId !== oldId) {
    console.log(`路由参数变化: ${oldId} -> ${newId}`)
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
  { id: 'details', name: 'productDetail.tabs.details' },
  { id: 'specs', name: 'productDetail.tabs.specs' },
  { id: 'reviews', name: 'productDetail.tabs.reviews' },
  { id: 'faq', name: 'productDetail.tabs.faq' }
]
const activeTab = ref('details')

// 相关产品示例数据
const relatedProducts = computed(() => {
  // 根据当前产品的类别返回相关产品
  const currentCategory = product.value.categoryId
  return [
    {
      id: 'voiceAssistant',
      title: t('products.productItems.voiceAssistant.title'),
      description: t('products.productItems.voiceAssistant.description'),
      image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'assist'
    },
    {
      id: 'dataViz',
      title: t('products.productItems.dataViz.title'),
      description: t('products.productItems.dataViz.description'),
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080',
      categoryId: 'data'
    },
    {
      id: 'codeAssistant',
      title: t('products.productItems.codeAssistant.title'),
      description: t('products.productItems.codeAssistant.description'),
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
  // 使用国际化翻译
  return t(`products.filter.categories.${categoryId}`)
}

// 获取产品图片
const getProductImage = (productId) => {
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

// 处理一般产品
const handleGeneralProduct = (productId) => {
  console.log(`处理一般产品: ${productId}`)
  
  // 设置基本产品信息
  product.value = {
    id: productId,
    title: hasTranslation(`products.productItems.${productId}.title`) ? 
      t(`products.productItems.${productId}.title`) : productId,
    description: hasTranslation(`products.productItems.${productId}.description`) ? 
      t(`products.productItems.${productId}.description`) : '',
    shortDescription: hasTranslation(`products.productItems.${productId}.shortDescription`) ? 
      t(`products.productItems.${productId}.shortDescription`) : '',
    detailedDescription: hasTranslation(`products.productItems.${productId}.detailedDescription`) ? 
      t(`products.productItems.${productId}.detailedDescription`) : '',
    image: getProductImage(productId),
    images: [
      getProductImage(productId),
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080',
      'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1080'
    ],
    categoryId: getCategoryIdForProduct(productId),
    isFree: ['mcpHub', 'voiceAssistant', 'codeAssistant', 'creativeInspiration'].includes(productId),
    price: ['mcpHub', 'voiceAssistant', 'codeAssistant', 'creativeInspiration'].includes(productId) ? 0 : 99,
    pricingModel: ['mcpHub', 'voiceAssistant', 'codeAssistant', 'creativeInspiration'].includes(productId) ? 
      t('productDetail.pricingModels.free') : t('productDetail.pricingModels.subscription'),
    rating: 4.5,
    reviewCount: 24,
    
    // 功能特点
    features: [
      {
        title: hasTranslation(`products.productItems.${productId}.features.0.title`) ? 
          t(`products.productItems.${productId}.features.0.title`) : t('productDetail.defaultFeature1Title'),
        description: hasTranslation(`products.productItems.${productId}.features.0.description`) ? 
          t(`products.productItems.${productId}.features.0.description`) : t('productDetail.defaultFeature1Desc'),
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      },
      {
        title: hasTranslation(`products.productItems.${productId}.features.1.title`) ? 
          t(`products.productItems.${productId}.features.1.title`) : t('productDetail.defaultFeature2Title'),
        description: hasTranslation(`products.productItems.${productId}.features.1.description`) ? 
          t(`products.productItems.${productId}.features.1.description`) : t('productDetail.defaultFeature2Desc'),
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
      },
      {
        title: hasTranslation(`products.productItems.${productId}.features.2.title`) ? 
          t(`products.productItems.${productId}.features.2.title`) : t('productDetail.defaultFeature3Title'),
        description: hasTranslation(`products.productItems.${productId}.features.2.description`) ? 
          t(`products.productItems.${productId}.features.2.description`) : t('productDetail.defaultFeature3Desc'),
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
      }
    ],
    
    // 使用场景
    useCases: [
      {
        title: hasTranslation(`products.productItems.${productId}.useCases.0.title`) ? 
          t(`products.productItems.${productId}.useCases.0.title`) : t('productDetail.defaultUseCase1Title'),
        description: hasTranslation(`products.productItems.${productId}.useCases.0.description`) ? 
          t(`products.productItems.${productId}.useCases.0.description`) : t('productDetail.defaultUseCase1Desc'),
        icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
      },
      {
        title: hasTranslation(`products.productItems.${productId}.useCases.1.title`) ? 
          t(`products.productItems.${productId}.useCases.1.title`) : t('productDetail.defaultUseCase2Title'),
        description: hasTranslation(`products.productItems.${productId}.useCases.1.description`) ? 
          t(`products.productItems.${productId}.useCases.1.description`) : t('productDetail.defaultUseCase2Desc'),
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
      }
    ],
    
    // 规格分类
    specCategories: [
      {
        name: t('productDetail.specCategories.general'),
        items: [
          { name: t('productDetail.specs.version'), value: '1.0.0' },
          { name: t('productDetail.specs.lastUpdate'), value: '2023-10-15' },
          { name: t('productDetail.specs.platform'), value: t('productDetail.specValues.multiPlatform') }
        ]
      },
      {
        name: t('productDetail.specCategories.technical'),
        items: [
          { name: t('productDetail.specs.apiAccess'), value: t('productDetail.specValues.available') },
          { name: t('productDetail.specs.dataStorage'), value: t('productDetail.specValues.cloud') },
          { name: t('productDetail.specs.security'), value: t('productDetail.specValues.highEncryption') }
        ]
      }
    ],
    
    // 用户评价
    reviews: [
      {
        id: 1,
        userName: 'Alex Chen',
        userAvatar: '',
        date: '2023-09-12',
        rating: 5,
        content: t('productDetail.defaultReview1')
      },
      {
        id: 2,
        userName: 'Sarah Johnson',
        userAvatar: '',
        date: '2023-08-24',
        rating: 4,
        content: t('productDetail.defaultReview2')
      }
    ],
    
    // 常见问题
    faqs: [
      {
        question: t('productDetail.defaultFAQ1Question'),
        answer: t('productDetail.defaultFAQ1Answer')
      },
      {
        question: t('productDetail.defaultFAQ2Question'),
        answer: t('productDetail.defaultFAQ2Answer')
      }
    ]
  }
}

// 获取产品的分类ID
const getCategoryIdForProduct = (productId) => {
  const productMap = {
    watermark: 'assist',
    idPhoto: 'assist',
    fayan: 'assist',
    mcpHub: 'ai',
    aiWriting: 'ai',
    legalEye: 'ai',
    dataAnalysis: 'data',
    voiceAssistant: 'assist',
    codeAssistant: 'ai',
    dataViz: 'data',
    creativeInspiration: 'other'
  }
  
  return productMap[productId] || 'other'
}

// 处理特殊产品
const handleSpecialProduct = (productId) => {
  console.log(`处理特殊产品: ${productId}`)
  
  // 根据产品ID获取特定产品的数据
  if (productId === 'watermark') {
    // 水印工具的特殊数据
    product.value = {
      id: 'watermark',
      title: t('products.productItems.watermark.title'),
      shortDescription: hasTranslation('products.productItems.watermark.shortDescription') ? 
        t('products.productItems.watermark.shortDescription') : t('products.productItems.watermark.description'),
      detailedDescription: hasTranslation('products.productItems.watermark.detailedDescription') ? 
        t('products.productItems.watermark.detailedDescription') : t('products.productItems.watermark.description'),
      description: t('products.productItems.watermark.description'),
      image: getProductImage('watermark'),
      images: [
        getProductImage('watermark'),
        'https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1080',
        'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1080'
      ],
      categoryId: 'assist',
      isFree: true,
      price: 0,
      pricingModel: t('productDetail.pricingModels.free'),
      rating: 4.8,
      reviewCount: 36,
      demoUrl: '#',
      
      // 核心功能
      features: [
        '智能水印嵌入技术',
        '支持多种证件类型',
        '批量处理功能',
        '水印验证系统',
        '防伪溯源',
        '完全免费使用',
        '无需注册'
      ],
      
      // 产品规格
      specs: {
        '支持格式': 'JPG, PNG, PDF',
        '处理速度': '2秒/文档',
        '最大文件大小': '20MB',
        '使用限制': '无限制'
      },
      
      // 详细规格分类
      specCategories: [
        {
          name: t('productDetail.specCategories.general'),
          items: [
            { name: '支持格式', value: 'JPG, PNG, PDF' },
            { name: '处理速度', value: '2秒/文档' },
            { name: '最大文件大小', value: '20MB' },
            { name: '水印类型', value: '不可见数字水印' }
          ]
        },
        {
          name: t('productDetail.specCategories.technical'),
          items: [
            { name: '批量处理', value: '支持' },
            { name: '水印验证', value: '内置验证器' },
            { name: '安全级别', value: '银行级' },
            { name: '数据加密', value: 'AES-256' },
            { name: '免费使用', value: '永久免费' }
          ]
        }
      ],
      
      // 使用场景
      useCases: [
        {
          title: '证书防伪',
          description: '为学历证书、资格证书等重要文件添加防伪水印',
          icon: 'document'
        },
        {
          title: '文件保护',
          description: '保护公司机密文件，防止泄露和篡改',
          icon: 'lock'
        },
        {
          title: '版权保护',
          description: '为数字作品添加版权水印，保护知识产权',
          icon: 'copyright'
        }
      ],
      
      // 用户评价
      reviews: [
        {
          id: 1,
          userName: '张经理',
          userAvatar: '',
          date: '2023-10-15',
          rating: 5,
          content: '完全免费还这么好用！水印完全不可见但又能轻松验证真伪。'
        },
        {
          id: 2,
          userName: '李老师',
          userAvatar: '',
          date: '2023-09-20',
          rating: 5,
          content: '学校用来处理学生证书，批量处理功能很方便，而且完全免费，节省了很多预算。'
        }
      ],
      
      // 常见问题
      faqs: [
        {
          question: '这款产品真的完全免费吗？',
          answer: '是的，证件水印系统完全免费，所有功能都可以无需付费使用。'
        },
        {
          question: '水印会影响文档的外观吗？',
          answer: '不会，我们使用不可见数字水印技术，不会影响文档的视觉外观。'
        },
        {
          question: '如何验证带水印的文档？',
          answer: '可以通过我们提供的验证器进行验证，只需扫描文档即可。'
        }
      ]
    }
  } else if (productId === 'idPhoto') {
    // 证件照工具的特殊数据
    product.value = {
      id: 'idPhoto',
      title: t('products.productItems.idPhoto.title'),
      shortDescription: hasTranslation('products.productItems.idPhoto.shortDescription') ? 
        t('products.productItems.idPhoto.shortDescription') : t('products.productItems.idPhoto.description'),
      detailedDescription: hasTranslation('products.productItems.idPhoto.detailedDescription') ? 
        t('products.productItems.idPhoto.detailedDescription') : t('products.productItems.idPhoto.description'),
      description: t('products.productItems.idPhoto.description'),
      image: getProductImage('idPhoto'),
      images: [
        getProductImage('idPhoto'),
        'https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=1080',
        'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=1080'
      ],
      categoryId: 'assist',
      isFree: true,
      price: 0,
      pricingModel: t('productDetail.pricingModels.free'),
      rating: 4.7,
      reviewCount: 42,
      demoUrl: '#',
      
      // 核心功能
      features: [
        'AI智能美颜',
        '自动规格调整',
        '多种背景可选',
        '批量处理',
        '云端存储',
        '免费使用',
        '无需注册'
      ],
      
      // 产品规格
      specs: {
        '支持证件类型': '20+',
        '处理时间': '3秒内',
        '照片规格': '标准/自定义',
        '使用限制': '无限制'
      },
      
      // 详细规格分类
      specCategories: [
        {
          name: t('productDetail.specCategories.general'),
          items: [
            { name: '支持证件类型', value: '20+' },
            { name: '处理时间', value: '3秒内' },
            { name: '照片规格', value: '标准/自定义' },
            { name: '存储时间', value: '永久' }
          ]
        },
        {
          name: t('productDetail.specCategories.technical'),
          items: [
            { name: 'AI美颜', value: '支持' },
            { name: '背景替换', value: '支持' },
            { name: '批量处理', value: '支持' },
            { name: '云端备份', value: '支持' },
            { name: '免费使用', value: '永久免费' }
          ]
        }
      ],
      
      // 使用场景
      useCases: [
        {
          title: '证件办理',
          description: '快速生成身份证、护照等标准证件照',
          icon: 'card'
        },
        {
          title: '求职应聘',
          description: '制作专业简历照片',
          icon: 'briefcase'
        },
        {
          title: '学生证件',
          description: '制作学生证、校园卡等照片',
          icon: 'academic'
        }
      ],
      
      // 用户评价
      reviews: [
        {
          id: 1,
          userName: '王小明',
          userAvatar: '',
          date: '2023-10-05',
          rating: 5,
          content: '完全免费的证件照工具，AI美颜效果自然，太棒了！'
        },
        {
          id: 2,
          userName: '李小',
          userAvatar: '',
          date: '2023-09-18',
          rating: 4,
          content: '使用很方便，照片修改很专业，省了不少钱。'
        }
      ],
      
      // 常见问题
      faqs: [
        {
          question: '真的完全免费吗？',
          answer: '是的，小花证件照的所有功能都完全免费使用。'
        },
        {
          question: '照片适合官方文件使用吗？',
          answer: '是的，我们的照片规格符合各种官方文件的标准要求。'
        },
        {
          question: '我的照片会保存多久？',
          answer: '您的照片将永久保存在您的云账户中。'
        }
      ]
    }
  } else if (productId === 'fayan') {
    // 法眼AI的特殊数据
    product.value = {
      id: 'fayan',
      title: t('products.productItems.fayan.title'),
      shortDescription: hasTranslation('products.productItems.fayan.shortDescription') ? 
        t('products.productItems.fayan.shortDescription') : t('products.productItems.fayan.description'),
      detailedDescription: hasTranslation('products.productItems.fayan.detailedDescription') ? 
        t('products.productItems.fayan.detailedDescription') : t('products.productItems.fayan.description'),
      description: t('products.productItems.fayan.description'),
      image: getProductImage('fayan'),
      images: [
        getProductImage('fayan'),
        'https://images.pexels.com/photos/5668475/pexels-photo-5668475.jpeg?auto=compress&cs=tinysrgb&w=1080',
        'https://images.pexels.com/photos/5668474/pexels-photo-5668474.jpeg?auto=compress&cs=tinysrgb&w=1080'
      ],
      categoryId: 'assist',
      isFree: true,
      price: 0,
      pricingModel: t('productDetail.pricingModels.free'),
      rating: 4.6,
      reviewCount: 28,
      demoUrl: '#',
      
      // 核心功能
      features: [
        '智能条款分析',
        '法律风险评估',
        '基于模板的文档生成',
        '法律资源库',
        '多语言支持',
        '免费使用'
      ],
      
      // 产品规格
      specs: {
        '处理速度': '3秒/页',
        '支持语言': '中文、英文',
        '文档类型': '10+',
        '文档存储': '加密云存储'
      },
      
      // 详细规格分类
      specCategories: [
        {
          name: t('productDetail.specCategories.general'),
          items: [
            { name: '文档分析', value: '支持' },
            { name: '模板生成', value: '支持' },
            { name: '语言支持', value: '中文、英文' },
            { name: '文件格式', value: 'PDF, DOCX, TXT' }
          ]
        },
        {
          name: t('productDetail.specCategories.technical'),
          items: [
            { name: '风险评估', value: '支持' },
            { name: '对比分析', value: '支持' },
            { name: '历史追踪', value: '支持' },
            { name: '团队协作', value: '支持' }
          ]
        },
        {
          name: '技术参数',
          items: [
            { name: 'API集成', value: '支持' },
            { name: '数据加密', value: 'AES-256' },
            { name: '并发用户', value: '无限制' }
          ]
        }
      ],
      
      // 使用场景
      useCases: [
        {
          title: '合同审查',
          description: '快速识别合同中的关键条款和潜在风险点',
          icon: 'document'
        },
        {
          title: '文档生成',
          description: '根据模板和要求自动生成标准法律文档',
          icon: 'template'
        },
        {
          title: '法规合规',
          description: '确保文档符合最新的法律法规要求',
          icon: 'check'
        }
      ],
      
      // 用户评价
      reviews: [
        {
          id: 1,
          userName: '李律师',
          userAvatar: '',
          date: '2023-10-12',
          rating: 5,
          content: '非常实用的法律文档工具，大大提高了工作效率。'
        },
        {
          id: 2,
          userName: '张经理',
          userAvatar: '',
          date: '2023-09-28',
          rating: 4,
          content: '界面清晰，功能强大，对合同审查特别有帮助。'
        },
        {
          id: 3,
          userName: '王助理',
          userAvatar: '',
          date: '2023-09-15',
          rating: 5,
          content: '免费又专业，文档生成功能节省了大量时间。'
        }
      ],
      
      // 常见问题
      faqs: [
        {
          question: '使用法眼AI需要付费吗？',
          answer: '不需要，法眼AI是一款完全免费的法律文档处理工具。'
        },
        {
          question: '文档数据安全如何保障？',
          answer: '我们使用AES-256加密技术确保所有文档数据的安全。'
        },
        {
          question: '支持哪些类型的文档？',
          answer: '支持各类法律文档，包括合同、协议、诉讼文书等。'
        },
        {
          question: '处理速度有多快？',
          answer: '单页文档处理通常不超过3秒，批量处理也能保持高效率。'
        }
      ]
    }
  }
}

// 更新结构化数据
const updateStructuredData = () => {
  // 移除之前的结构化数据脚本
  const oldScripts = document.querySelectorAll('script[data-structured-data]')
  oldScripts.forEach(script => script.remove())
  
  // 产品结构化数据
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.value.title,
    "description": product.value.description,
    "image": product.value.image,
    "offers": {
      "@type": "Offer",
      "price": product.value.isFree ? "0" : product.value.price,
      "priceCurrency": "CNY",
      "availability": "https://schema.org/InStock"
    }
  }
  
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.value.title,
        "item": `https://xiahua-ai.com/products/${product.value.id}`
      }
    ]
  }
  
  // 注入结构化数据
  let productScript = document.createElement('script')
  productScript.type = 'application/ld+json'
  productScript.textContent = JSON.stringify(productSchema)
  productScript.setAttribute('data-structured-data', 'product')
  document.head.appendChild(productScript)
  
  let breadcrumbScript = document.createElement('script')
  breadcrumbScript.type = 'application/ld+json'
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema)
  breadcrumbScript.setAttribute('data-structured-data', 'breadcrumb')
  document.head.appendChild(breadcrumbScript)
}

onMounted(() => {
  console.log('ProductDetailView 组件已挂载')
  console.log(`当前路由参数: ${route.params.id}`)
  
  // 如果路由参数存在，获取产品数据
  if (route.params.id) {
    fetchProductData(route.params.id)
  } else {
    console.error('未找到产品ID参数')
    router.push('/products') // 如果没有ID参数，重定向到产品列表页
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
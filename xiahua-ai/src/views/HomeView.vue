<template>
  <div>
    <!-- Hero区域 -->
    <section class="relative overflow-hidden">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-30"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-40"></div>
      
      <!-- 模糊光晕效果 -->
      <div class="absolute -top-20 -left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary-400/30 rounded-full blur-3xl opacity-30"></div>
      
      <div class="container-custom py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div class="md:w-[45%] lg:w-[48%] mb-12 md:mb-0">
          <div class="inline-block px-3 py-1 mb-6 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 text-primary-700 text-sm font-medium">
            <span class="flex items-center">
              <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              人工智能技术开发与创新
            </span>
          </div>
          <h1 class="mb-6 leading-tight">
            探索AI的<span class="relative inline-block tech-gradient">
              <span class="absolute inset-0 bg-primary-100/50 transform -skew-x-12 -z-10 rounded"></span>无限可能
            </span>
            <br />打造<span class="relative tech-gradient">
              <span class="absolute -bottom-1 left-0 w-full h-3 bg-secondary-200/50 -z-10 transform skew-x-3"></span>智能化未来
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-md">整合前沿AI技术与实际应用场景，提供定制化解决方案，让数据驱动决策，让创新创造价值。</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/products" class="btn btn-primary glow-effect group">
              探索产品
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
            <router-link to="/projects" class="btn btn-outline">开源项目</router-link>
          </div>
          
          <!-- 科技感特性指标 -->
          <div class="mt-10 grid grid-cols-3 gap-4">
            <div class="text-center bg-white/80 backdrop-blur-sm rounded-lg py-3 px-2 shadow-sm border border-gray-100">
              <div class="text-2xl font-bold text-primary-600">25+</div>
              <div class="text-sm text-gray-500">AI项目</div>
            </div>
            <div class="text-center bg-white/80 backdrop-blur-sm rounded-lg py-3 px-2 shadow-sm border border-gray-100">
              <div class="text-2xl font-bold text-secondary-600">10K+</div>
              <div class="text-sm text-gray-500">用户</div>
            </div>
            <div class="text-center bg-white/80 backdrop-blur-sm rounded-lg py-3 px-2 shadow-sm border border-gray-100">
              <div class="text-2xl font-bold text-accent-600">99.9%</div>
              <div class="text-sm text-gray-500">可靠性</div>
            </div>
          </div>
          
          <!-- 技术标签 -->
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="text-xs py-1 px-3 bg-primary-100 text-primary-700 rounded-full">人工智能</span>
            <span class="text-xs py-1 px-3 bg-secondary-100 text-secondary-700 rounded-full">机器学习</span>
            <span class="text-xs py-1 px-3 bg-accent-100 text-accent-700 rounded-full">数据分析</span>
            <span class="text-xs py-1 px-3 bg-gray-100 text-gray-700 rounded-full">云计算</span>
          </div>
        </div>
        
        <div class="md:w-[45%] lg:w-[48%] relative">
          <!-- 主图 -->
          <div class="relative z-20 mx-auto md:max-w-[90%] lg:max-w-full">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-400 rounded-2xl blur opacity-40 animate-pulse-slow"></div>
            <div class="card-glass relative overflow-hidden z-10">
              <div class="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/10]">
                <!-- 使用高质量开源AI技术相关图片替换 -->
                <img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="AI技术未来" class="w-full h-full object-cover" />
                
                <!-- 半透明科技元素叠加层，确保更好的视觉对比 -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-transparent z-10"></div>
                
                <!-- 科技感UI元素覆盖，提高z-index确保在图片上方，优化圆角和边缘 -->
                <div class="absolute top-4 right-4 flex items-center gap-2 z-30">
                  <div class="h-3 w-3 rounded-full bg-accent-400 shadow-sm backdrop-blur-md animate-pulse" style="filter: drop-shadow(0 0 1px rgba(255,255,255,0.2))"></div>
                  <div class="h-3 w-3 rounded-full bg-secondary-400 shadow-sm backdrop-blur-md animate-pulse" style="animation-delay: 0.5s; filter: drop-shadow(0 0 1px rgba(255,255,255,0.2))"></div>
                  <div class="h-3 w-3 rounded-full bg-primary-400 shadow-sm backdrop-blur-md animate-pulse" style="animation-delay: 1s; filter: drop-shadow(0 0 1px rgba(255,255,255,0.2))"></div>
                </div>
                
                <!-- 左上角指示灯和技术仪表盘 -->
                <div class="absolute top-4 left-4 flex items-center z-30">
                  <!-- 指示圆点 -->
                  <div class="flex items-center space-x-1.5 mb-1">
                    <div class="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1)); box-shadow: inset 0 0 0.5px rgba(255,255,255,0.5), 0 0 2px rgba(255,0,0,0.5)"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-sm" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1)); box-shadow: inset 0 0 0.5px rgba(255,255,255,0.5), 0 0 2px rgba(255,255,0,0.5)"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1)); box-shadow: inset 0 0 0.5px rgba(255,255,255,0.5), 0 0 2px rgba(0,255,0,0.5)"></div>
                  </div>
                  
                  <!-- 左上角方块装饰 -->
                  <div class="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/40 shadow-sm" style="filter: blur(0.3px);"></div>
                </div>
                
                <!-- 仪表盘元素 -->
                <div class="absolute top-4 right-4 text-white text-xs backdrop-blur-md bg-white/5 rounded-lg px-2 py-1 flex items-center space-x-2 z-30 shadow-sm" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05), inset 0 0 0.5px rgba(255,255,255,0.3)">
                  <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" style="filter: drop-shadow(0 0 2px rgba(0,255,0,0.5))"></div>
                  <div>系统运行中</div>
                </div>
                
                <!-- 数字指标 -->
                <div class="absolute bottom-4 left-4 text-white text-xs backdrop-blur-md bg-white/5 rounded-lg px-2 py-1 z-30 shadow-sm" style="box-shadow: 0 2px 4px rgba(0,0,0,0.05), inset 0 0 0.5px rgba(255,255,255,0.3)">
                  <div class="flex items-center space-x-3">
                    <div>
                      <div class="text-xs text-white/70">数据处理量</div>
                      <div class="text-sm font-medium flex items-center">
                        <span>1.2</span>
                        <span class="text-xs ml-1">TB/日</span>
                      </div>
                    </div>
                    <div>
                      <div class="text-xs text-white/70">响应时间</div>
                      <div class="text-sm font-medium flex items-center">
                        <span>42</span>
                        <span class="text-xs ml-1">ms</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 z-30">
                  <div class="text-white text-sm tracking-wider typing-effect" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3)">智能科技 · 创新未来</div>
                </div>
                
                <!-- 网格线覆盖 -->
                <div class="absolute inset-0 grid-pattern opacity-20 z-10" style="filter: blur(0.2px)"></div>
                
                <!-- 科技感光效 -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" style="backdrop-filter: blur(1px)"></div>

                <!-- 中央科技仪表盘元素 -->
                <div class="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-30">
                  <!-- 外环 -->
                  <div class="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center relative" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent); box-shadow: 0 0 15px rgba(59, 130, 246, 0.15); backdrop-filter: blur(1px);">
                    <!-- 内环 -->
                    <div class="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center" style="background: radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%); box-shadow: inset 0 0 6px rgba(59, 130, 246, 0.2);">
                      <div class="text-white text-center text-xs font-semibold" style="text-shadow: 0 0 4px rgba(255,255,255,0.5);">
                        AI<br>3.0
                      </div>
                    </div>
                    
                    <!-- 点缀小圆点 -->
                    <div class="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-blue-400" style="filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))"></div>
                    <div class="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-blue-300" style="filter: drop-shadow(0 0 1px rgba(59, 130, 246, 0.6))"></div>
                    
                    <!-- 动态旋转线 -->
                    <div class="absolute inset-0 rounded-full" style="border: 1px dashed rgba(255,255,255,0.3); animation: spin 8s linear infinite;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 装饰元素位置调整，减少与左侧内容重叠 -->
          <div class="absolute -bottom-10 right-0 w-32 h-32 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
          <div class="absolute -top-10 left-0 w-24 h-24 bg-secondary-300 rounded-full blur-3xl opacity-50"></div>
          
          <!-- 科技感浮动元素位置调整，提高z-index，优化边缘效果 -->
          <div class="absolute top-1/4 -right-4 w-16 h-16 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/40 flex items-center justify-center animate-float z-30" style="animation-delay: 0.5s; box-shadow: 0 4px 8px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.8)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          <div class="absolute top-2/3 -left-4 w-16 h-16 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/40 flex items-center justify-center animate-float z-30" style="animation-delay: 1s; box-shadow: 0 4px 8px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.8)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05))">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <!-- 右下角数据元素，位置和z-index调整，优化边缘效果 -->
          <div class="absolute bottom-10 right-0 w-20 h-20 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/40 flex flex-col items-center justify-center animate-float z-30" style="animation-delay: 1.5s; box-shadow: 0 4px 8px rgba(0,0,0,0.08), inset 0 0 0.5px rgba(255,255,255,0.8)">
            <div class="text-xs text-gray-500 mb-1">性能指数</div>
            <div class="text-lg font-bold text-primary-600">98.7</div>
            <div class="w-12 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mt-1" style="filter: blur(0.2px)"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色产品区域 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-70"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-70"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-primary-300"></span>
            <span class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide">革新科技</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-primary-300"></span>
          </div>
          <h2 class="mb-4">特色<span class="tech-gradient">产品</span></h2>
          <p class="text-gray-600 max-w-2xl mx-auto">通过AI技术，为您提供创新、高效的解决方案，帮助您应对各种挑战。</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(product, index) in featuredProducts" :key="index" class="group relative">
            <!-- 卡片主体 -->
            <div class="card h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div class="h-48 bg-gray-100 overflow-hidden relative">
                <!-- 图片 -->
                <img :src="product.image" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <!-- 顶部状态指示器 -->
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary-700 font-medium border border-primary-100 shadow-sm">
                  {{ ['新品', '热门', '推荐'][index] }}
                </div>
              </div>
              
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{{ product.title }}</h3>
                <p class="text-gray-600 mb-4 flex-grow">{{ product.description }}</p>
                <router-link 
                  :to="`/products/${product.id}`" 
                  class="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  了解更多
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </router-link>
              </div>
            </div>
            
            <!-- 悬浮效果遮罩 -->
            <div class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300 pointer-events-none rounded-xl"></div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <router-link to="/products" class="btn btn-outline group">
            查看全部产品
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 开源项目区域 -->
    <section class="section relative">
      <!-- 带纹理的科技感背景 -->
      <div class="absolute inset-0 circuit-bg opacity-30"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-90"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-secondary-300"></span>
            <span class="mx-3 text-sm font-semibold text-secondary-600 uppercase tracking-wide">开放共享</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-secondary-300"></span>
          </div>
          <h2 class="mb-4">开源<span class="tech-gradient">项目</span></h2>
          <p class="text-gray-600 max-w-2xl mx-auto">我们秉持开放共享的理念，积极参与开源社区，推动技术创新与发展。</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in openSourceProjects" :key="index" 
               class="tech-box group bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <!-- 顶部装饰条 -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" 
                 :class="[
                   index === 0 ? 'from-primary-400 to-primary-600' : 
                   index === 1 ? 'from-secondary-400 to-secondary-600' : 
                   'from-accent-400 to-accent-600'
                 ]"></div>
            
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-3 text-white"
                   :class="[
                     index === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-700' : 
                     index === 1 ? 'bg-gradient-to-br from-secondary-500 to-secondary-700' : 
                     'bg-gradient-to-br from-accent-500 to-accent-700'
                   ]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M8 12h8" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-lg font-bold group-hover:text-primary-600 transition-colors">{{ project.name }}</h3>
            </div>
            
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tag, i) in project.tags" :key="i" 
                    class="text-xs py-1 px-2 rounded-full transition-colors"
                    :class="[
                      index === 0 ? 'bg-primary-100 text-primary-700' : 
                      index === 1 ? 'bg-secondary-100 text-secondary-700' : 
                      'bg-accent-100 text-accent-700'
                    ]">
                {{ tag }}
              </span>
            </div>
            
            <!-- 项目统计 -->
            <div class="flex justify-between text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                {{ [124, 78, 92][index] }} Stars
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {{ [35, 22, 18][index] }} Forks
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ ['3天前', '1周前', '2周前'][index] }}
              </div>
            </div>
            
            <a :href="project.link" target="_blank" 
               class="text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center group-hover:translate-x-1 transition-transform duration-300">
              在GitHub上查看
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <router-link to="/projects" class="btn btn-outline">
            查看全部项目
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 媒体内容区域 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-50/50 to-transparent"></div>
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-secondary-50 rounded-full opacity-70 blur-xl"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-accent-300"></span>
            <span class="mx-3 text-sm font-semibold text-accent-600 uppercase tracking-wide">精彩内容</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-accent-300"></span>
          </div>
          <h2 class="mb-4">媒体<span class="tech-gradient">内容</span></h2>
          <p class="text-gray-600 max-w-2xl mx-auto">获取我们在各大平台发布的技术深度解析与实用教程，紧跟AI前沿动态，掌握行业发展趋势。</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card overflow-hidden group glow-effect transform transition-all duration-300 hover:-translate-y-1">
            <div class="relative">
              <div class="aspect-video bg-gray-100 overflow-hidden">
                <img src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="B站视频" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <!-- 播放时长 -->
                <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                  10:28
                </div>
              </div>
              
              <!-- 播放按钮 -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-primary-500 bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <!-- 渐变叠加 -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div class="p-6 relative">
              <!-- 视频指标 -->
              <div class="flex items-center gap-4 mb-3 text-sm text-gray-500">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  22.5K 次观看
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  1.2K 点赞
                </div>
              </div>
              
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">最新B站视频：AI技术解析</h3>
              <p class="text-gray-600 mb-4">深入浅出讲解前沿AI技术，让复杂概念变得简单易懂。通过生动案例，带你了解AI应用的无限可能。</p>
              <a href="#" target="_blank" class="text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center group-hover:translate-x-1 transition-transform duration-300">
                前往B站观看
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div class="card overflow-hidden group glow-purple transform transition-all duration-300 hover:-translate-y-1">
            <div class="relative">
              <div class="aspect-video bg-gray-100 overflow-hidden">
                <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1080" alt="抖音视频" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <!-- 播放时长 -->
                <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                  03:45
                </div>
              </div>
              
              <!-- 播放按钮 -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-16 h-16 bg-secondary-500 bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <!-- 渐变叠加 -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div class="p-6 relative">
              <!-- 视频指标 -->
              <div class="flex items-center gap-4 mb-3 text-sm text-gray-500">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  48.3K 次观看
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  3.6K 点赞
                </div>
              </div>
              
              <h3 class="text-xl font-bold mb-2 group-hover:text-secondary-600 transition-colors">热门抖音：科技生活小技巧</h3>
              <p class="text-gray-600 mb-4">实用的科技生活小技巧，让你的生活更加便捷高效。每日一招，轻松提升生活品质。</p>
              <a href="#" target="_blank" class="text-secondary-500 font-medium hover:text-secondary-600 transition-colors flex items-center group-hover:translate-x-1 transition-transform duration-300">
                前往抖音观看
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们区域 -->
    <section class="section bg-gradient-tech relative overflow-hidden">
      <!-- 科技感背景元素 -->
      <div class="absolute inset-0 dot-grid opacity-10"></div>
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      
      <!-- 装饰光晕 -->
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div class="container-custom text-center relative z-10">
        <div class="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium">
          <span class="flex items-center">
            <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            期待与您的合作
          </span>
        </div>
        
        <h2 class="mb-6 text-white">准备与我们<span class="relative inline-block">
          <span class="absolute inset-x-0 bottom-0 h-3 bg-white/20 -z-10 transform skew-x-3"></span>合作</span>？
        </h2>
        
        <p class="text-white text-opacity-90 text-xl mb-8 max-w-2xl mx-auto">无论是产品开发、技术咨询还是内容合作，我们期待与您探讨无限可能性。</p>
        
        <router-link to="/about" class="btn bg-white text-primary-600 hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
          联系我们
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </router-link>
        
        <!-- 技术指标 -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div class="text-2xl font-bold text-white mb-1">7 x 24</div>
            <div class="text-white/80 text-sm">全天候支持</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div class="text-2xl font-bold text-white mb-1">50+</div>
            <div class="text-white/80 text-sm">成功案例</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div class="text-2xl font-bold text-white mb-1">10年+</div>
            <div class="text-white/80 text-sm">行业经验</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div class="text-2xl font-bold text-white mb-1">98%</div>
            <div class="text-white/80 text-sm">客户满意度</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// 模拟数据
const featuredProducts = [
  {
    id: 'ai-writing',
    title: 'AI写作助手',
    description: '基于大型语言模型的智能写作工具，提升您的文字创作效率。',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'ai-tools'
  },
  {
    id: 'legal-eye',
    title: '法眼',
    description: '法眼AI智能合同审核平台利用先进的人工智能技术，对合同进行全方位分析',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'enterprise'
  },
  {
    id: 'mcp-hub',
    title: 'MCP中文资源中心',
    description: '发现并推荐AI优质MCP服务',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'platform'
  }
]

const openSourceProjects = [
  {
    name: 'Litemes',
    description: '一个轻量级的MES生产制造执行系统',
    tags: ['JavaScript', 'Vue'],
    link: 'https://github.com/freeleepm/LiteMES'
  },
  {
    name: 'Freesign',
    description: '一个免费的电子签名应用（金融）',
    tags: ['Vue', 'D3.js'],
    link: 'https://github.com/freeleepm/freesign'
  },
  {
    name: 'Mini-Contract',
    description: '一个迷你的电子签合同管理系统',
    tags: ['Vue'],
    link: 'https://github.com/freeleepm/mini-contract'
  }
]

// 为首页添加结构化数据
onMounted(() => {
  // 添加网站结构化数据
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://leepm.com/",
    "name": "小华同学AI官网",
    "description": "小华同学AI为您提供智能助手和AI技术解决方案，探索人工智能的无限可能，打造智能化未来。",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://leepm.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  // 添加组织结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://leepm.com",
    "name": "小华同学AI",
    "logo": "https://leepm.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-XXX-XXXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Chinese", "English"]
    },
    "sameAs": [
      "https://weibo.com/xiahuaai",
      "https://github.com/freeleepm"
    ]
  };
  
  // 注入结构化数据
  let websiteScript = document.createElement('script');
  websiteScript.type = 'application/ld+json';
  websiteScript.textContent = JSON.stringify(websiteSchema);
  document.head.appendChild(websiteScript);
  
  let organizationScript = document.createElement('script');
  organizationScript.type = 'application/ld+json';
  organizationScript.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(organizationScript);
});
</script>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse-subtle {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

/* 卡片容器样式优化 */
.card-glass {
  /* 增加圆角 */
  border-radius: 1rem;
  /* 多层阴影效果 */
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.05),
    0 4px 8px rgba(0,0,0,0.05),
    inset 0 0 0 1px rgba(255,255,255,0.15);
  /* 平滑边缘 */
  border: 1px solid rgba(255,255,255,0.1);
  /* 确保内容不超出边界 */
  overflow: hidden;
  /* 轻微模糊效果软化边缘 */
  backdrop-filter: blur(4px);
}

/* 为圆角添加微妙渐变效果，减轻锯齿感 */
.card-glass::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  pointer-events: none;
}
</style> 
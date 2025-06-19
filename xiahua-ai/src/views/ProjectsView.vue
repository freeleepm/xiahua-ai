<template>
  <div>
    <!-- 页面标题区域 - 增强科技感设计 -->
    <section class="relative overflow-hidden">
      <!-- 科技感网格背景 -->
      <div class="absolute inset-0 circuit-bg opacity-30"></div>
      
      <!-- 动态粒子背景 -->
      <div class="absolute inset-0 dot-grid opacity-40"></div>
      
      <!-- 模糊光晕效果 -->
      <div class="absolute -top-20 -left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary-400/30 rounded-full blur-3xl opacity-30"></div>
      
      <div class="bg-gradient-to-br from-primary-900 to-primary-700 py-16 md:py-24 relative z-10">
        <div class="container-custom relative">
          <!-- 3D科技感悬浮标签 -->
          <div class="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 text-primary-700 text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-primary-500/20">
            <span class="flex items-center">
              <span class="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              <span class="relative">
                {{ t('projects.openSourceDriven') }}
                <span class="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></span>
              </span>
            </span>
          </div>
          
          <!-- 优化标题区域，增加科技感和视觉冲击力 -->
          <div class="relative">
            <h1 class="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight flex flex-col md:flex-row items-start md:items-center">
              <span class="relative z-10 flex items-center">
                <!-- 装饰线条 -->
                <span class="hidden md:inline-block w-8 h-px bg-gradient-to-r from-transparent to-white/70 mr-3 vertical-middle"></span>
                <span class="relative hover:-translate-y-1 transition-transform duration-300 group">
                  {{ t('projects.title').charAt(0) }}
                  <span class="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary-300 rounded-full animate-ping"></span>
                  <span class="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full bg-white/40 transition-all duration-300"></span>
                </span>
                <span class="relative hover:-translate-y-1 transition-transform duration-300 group" style="transition-delay: 50ms">
                  {{ t('projects.title').charAt(1) }}
                  <span class="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-primary-300 rounded-full animate-ping" style="animation-delay: 0.5s"></span>
                  <span class="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full bg-white/40 transition-all duration-300"></span>
                </span>
              </span>
              <span class="relative inline-block ml-0 md:ml-3 transform hover:scale-105 transition-transform duration-500 group">
                <!-- 3D效果底层 - 增强层次感 -->
                <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-80 transform -skew-x-12 rounded translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></span>
                
                <!-- 发光效果 - 增强立体感 -->
                <span class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-80 transform -skew-x-12 rounded blur-sm group-hover:blur-md transition-all duration-300"></span>
                
                <!-- 文字内部有微妙的渐变和闪光效果 -->
                <span class="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white font-extrabold px-3 py-1.5 flex items-center overflow-hidden">
                  {{ t('projects.title').substring(2) }}
                  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                </span>
                
                <!-- 右上角装饰点 -->
                <span class="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                
                <!-- 右下角装饰线 -->
                <span class="absolute bottom-0 right-0 w-6 h-px bg-white/70 group-hover:w-10 transition-all duration-300"></span>
                
                <!-- 动态科技线条装饰 -->
                <span class="absolute inset-0 border border-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)"></span>
              </span>
              
              <!-- 装饰元素 -->
              <div class="absolute -top-6 -left-8 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
              <div class="absolute -bottom-3 -right-5 w-10 h-10 border-b-2 border-r-2 border-primary-400/50 rounded-br-lg"></div>
            </h1>
            
            <!-- 动态科技装饰元素 -->
            <div class="absolute -left-4 bottom-0 flex items-center opacity-70">
              <div class="w-2 h-2 bg-primary-400 rounded-full mr-1 animate-pulse"></div>
              <div class="w-12 h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
            </div>
            
            <!-- 数据码装饰 - 更加细致 -->
            <div class="absolute -right-12 bottom-2 text-xs font-mono text-primary-300/50 tracking-widest opacity-70">
              <div class="flex items-center">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-primary-400/30 mr-1.5"></span>
                10011
              </div>
              <div class="flex items-center">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-secondary-400/30 mr-1.5"></span>
                01101
              </div>
            </div>
            
            <!-- 霓虹灯光晕效果 -->
            <div class="absolute -top-10 -left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
            <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow opacity-50" style="animation-delay: 1s;"></div>
            
            <!-- 科技网格线 -->
            <div class="absolute right-0 bottom-0 w-20 h-20 opacity-10">
              <div class="w-full h-full grid-pattern"></div>
            </div>
          </div>
          
          <p class="text-white/90 text-xl max-w-2xl mb-8 leading-relaxed relative">
            {{ t('projects.subtitle') }}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"></span>
          </p>
          
          <!-- 技术指标卡片 - 更现代的设计 -->
          <div class="mt-8 flex flex-wrap gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center group hover:-translate-y-1 transition-all duration-300 hover:bg-white/15">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <div class="text-white/80 text-sm font-light">GitHub Stars</div>
                <div class="text-white font-bold text-xl">500+</div>
              </div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center group hover:-translate-y-1 transition-all duration-300 hover:bg-white/15">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <div class="text-white/80 text-sm font-light">{{ t('projects.uiElements.openSourceProjects') }}</div>
                <div class="text-white font-bold text-xl">15+</div>
              </div>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center group hover:-translate-y-1 transition-all duration-300 hover:bg-white/15">
              <div class="flex-shrink-0 w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <div class="text-white/80 text-sm font-light">{{ t('projects.uiElements.communityContributors') }}</div>
                <div class="text-white font-bold text-xl">120+</div>
              </div>
            </div>
          </div>
          
          <!-- 科技感浮动元素 - 增加交互动画 -->
          <div class="absolute bottom-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center animate-float z-30 shadow-lg shadow-primary-500/10 hover:shadow-primary-500/30 transition-shadow duration-300" style="animation-delay: 0.5s">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white transform hover:rotate-180 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈展示区域 - 科技感设计 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-70"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-70"></div>
      
      <!-- 科技点阵背景 -->
      <div class="absolute inset-0 dot-grid opacity-10"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <!-- 高级感标题区域 -->
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-12 bg-gradient-to-r from-transparent to-primary-300"></span>
            <span class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide relative px-4 py-1.5 group">
              <span class="relative z-10">{{ t('projects.coreSkills') }}</span>
              <span class="absolute inset-0 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
            <span class="h-px w-12 bg-gradient-to-l from-transparent to-primary-300"></span>
          </div>
          
          <!-- 炫酷标题 -->
          <h2 class="mb-4 relative inline-block">
            {{ t('projects.techStack') }}
            <span class="absolute -right-1 -top-1 w-1.5 h-1.5 bg-primary-400 rounded-full animate-ping opacity-70"></span>
            <span class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-100 to-transparent"></span>
          </h2>
          
          <p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">{{ t('projects.techStackDesc') }}</p>
        </div>
        
        <!-- 技术栈卡片 - 更现代化设计 -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div v-for="tech in techStack" :key="tech.name" 
               class="group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <!-- 卡片背景 - 添加微妙的渐变和光晕效果 -->
            <div class="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"></div>
            
            <!-- 装饰边角 -->
            <div class="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-200 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div class="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-200 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <!-- 内容容器 -->
            <div class="relative p-6 z-10">
              <!-- 图标容器 - 更高级的视觉呈现 -->
              <div class="bg-gradient-to-br from-gray-50 to-white w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-primary-100 overflow-hidden relative">
                <!-- 底部装饰弧线 -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
                     :class="`from-${tech.color}-100 to-${tech.color}-50`"></div>
                     
                <!-- 图标本身 -->
                <svg xmlns="http://www.w3.org/2000/svg" 
                     class="h-6 w-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                     :class="`text-${tech.color}-500`"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="tech.icon" />
                </svg>
                
                <!-- 高光扫过效果 -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
              
              <!-- 技术名称 - 更精致的排版 -->
              <h3 class="font-medium text-gray-700 group-hover:text-primary-600 transition-colors text-sm relative inline-block">
                {{ tech.name }}
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r" 
                      :class="`from-transparent via-${tech.color}-300 to-transparent`"
                      style="transform: scaleX(0);" 
                      :style="{ transform: 'scaleX(0)', opacity: '0', transition: 'transform 0.3s ease, opacity 0.3s ease' }"
                      @mouseover="$event.target.style.transform = 'scaleX(1)'; $event.target.style.opacity = '1'"
                      @mouseleave="$event.target.style.transform = 'scaleX(0)'; $event.target.style.opacity = '0'">
                </span>
              </h3>
              
              <!-- 微妙的技术指标指示器 -->
              <div class="mt-2 flex justify-center">
                <div class="inline-flex h-1 space-x-1">
                  <div v-for="n in 5" :key="n" 
                      class="w-1 h-1 rounded-full transition-all duration-300"
                      :class="[
                        n <= Math.ceil(Math.random() * 5) ? `bg-${tech.color}-400` : 'bg-gray-200'
                      ]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目列表 - 科技感卡片设计 -->
    <section class="section relative overflow-hidden">
      <!-- 带纹理的科技感背景 -->
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-90"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-8 bg-gradient-to-r from-transparent to-secondary-300"></span>
            <span class="mx-3 text-sm font-semibold text-secondary-600 uppercase tracking-wide">{{ t('projects.communityParticipation') }}</span>
            <span class="h-px w-8 bg-gradient-to-l from-transparent to-secondary-300"></span>
          </div>
          <h2 class="mb-4">{{ t('projects.openSource') }}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">{{ t('projects.openSourceDesc') }}</p>
        </div>
        
        <!-- 项目筛选控件 - 增强设计感 -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button class="px-5 py-2.5 rounded-full bg-white border border-primary-200 text-primary-700 text-sm font-medium hover:bg-primary-50 active:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-300 shadow-sm hover:shadow group relative overflow-hidden">
            <span class="relative z-10">{{ t('projects.allProjects') }}</span>
            <span class="absolute bottom-0 left-0 h-full w-full bg-primary-100 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></span>
          </button>
          <button class="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 shadow-sm hover:shadow group relative overflow-hidden">
            <span class="relative z-10">{{ t('projects.aiApps') }}</span>
            <span class="absolute bottom-0 left-0 h-full w-full bg-gray-100 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></span>
          </button>
          <button class="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 shadow-sm hover:shadow group relative overflow-hidden">
            <span class="relative z-10">{{ t('projects.dataAnalysis') }}</span>
            <span class="absolute bottom-0 left-0 h-full w-full bg-gray-100 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></span>
          </button>
          <button class="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300 shadow-sm hover:shadow group relative overflow-hidden">
            <span class="relative z-10">{{ t('projects.toolLibrary') }}</span>
            <span class="absolute bottom-0 left-0 h-full w-full bg-gray-100 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></span>
          </button>
        </div>
        
        <!-- 项目列表 - 增强现代感设计 -->
        <div class="space-y-12">
          <div v-for="(project, index) in projects" :key="index" 
               class="bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden rounded-xl border border-gray-100">
            
            <!-- 顶部装饰条 - 更精致的设计 -->
            <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r z-10" 
                 :class="[
                   index === 0 ? 'from-primary-400 to-primary-600' : 
                   index === 1 ? 'from-secondary-400 to-secondary-600' : 
                   'from-accent-400 to-accent-600'
                 ]"></div>
            
            <!-- 装饰角标 -->
            <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div class="absolute transform rotate-45 bg-gradient-to-r w-20 h-20 -top-10 -right-10 opacity-20"
                  :class="[
                    index === 0 ? 'from-primary-100 to-primary-300' : 
                    index === 1 ? 'from-secondary-100 to-secondary-300' : 
                    'from-accent-100 to-accent-300'
                  ]"></div>
            </div>
                 
            <!-- 背景装饰 -->
            <div class="absolute top-0 right-0 w-40 h-40 opacity-5 circuit-bg"></div>
            
            <div class="grid md:grid-cols-3 gap-8 relative">
              <!-- 项目图片 - 进一步简化，减轻视觉负担 -->
              <div class="md:col-span-1 flex items-center justify-center p-6 relative overflow-hidden">
                <!-- 更轻的背景渐变 -->
                <div class="absolute inset-0 bg-gradient-to-br opacity-20" 
                     :class="[
                       index === 0 ? 'from-primary-50 to-transparent' : 
                       index === 1 ? 'from-secondary-50 to-transparent' : 
                       'from-accent-50 to-transparent'
                     ]"></div>
                
                <!-- 最简化的项目图片容器 -->
                <div class="relative w-full max-w-xs rounded-lg overflow-hidden shadow-sm group">
                  <!-- 图片 -->
                  <div class="aspect-square overflow-hidden">
                    <img :src="project.image" :alt="project.name" 
                         class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                    
                    <!-- 更轻的悬停效果 -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <!-- 更简洁的项目信息 -->
                  <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                    <div class="bg-white/95 p-2 rounded-md"
                       :class="[
                         index === 0 ? 'border-l border-primary-500' : 
                         index === 1 ? 'border-l border-secondary-500' : 
                         'border-l border-accent-500'
                       ]">
                      <div class="flex items-center space-x-2">
                        <h4 class="text-sm font-medium truncate">
                          {{ project.name.split('-').join(' ') }}
                        </h4>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 状态标签 -->
                  <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div class="px-2 py-0.5 rounded-full text-xs font-medium bg-white/90"
                       :class="[
                         project.status.includes(t('projects.activeDevelopment')) ? 'text-green-700' : 
                         project.status.includes(t('projects.stableVersion')) ? 'text-blue-700' : 
                         'text-gray-700'
                       ]">
                      {{ project.status }}
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 项目信息 -->
              <div class="md:col-span-2 p-8">
                <div class="flex justify-between items-start mb-4">
                  <h3 class="text-2xl font-bold group-hover:text-primary-600 transition-colors flex items-center">
                    {{ project.name }}
                    <span class="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs"
                       :class="[
                         index === 0 ? 'bg-primary-100 text-primary-700' : 
                         index === 1 ? 'bg-secondary-100 text-secondary-700' : 
                         'bg-accent-100 text-accent-700'
                       ]">
                      <span class="sr-only">版本</span>{{ ['1.0', '2.1', '3.5','1.0', '2.1', '3.5','1.0', '3.5'][index] }}
                    </span>
                  </h3>
                  <span class="inline-block px-3 py-1 rounded-full text-xs font-medium"
                     :class="[
                       project.status.includes(t('projects.activeDevelopment')) ? 'bg-green-100 text-green-800' : 
                       project.status.includes(t('projects.stableVersion')) ? 'bg-blue-100 text-blue-800' : 
                       'bg-gray-100 text-gray-800'
                     ]">
                    {{ project.status }}
                  </span>
                </div>
                
                <p class="text-gray-600 mb-6">{{ project.description }}</p>
                
                <!-- 项目统计信息 -->
                <div class="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    {{ project.stars || [124, 78, 92][index] }} {{ t('projects.uiElements.stars') }}
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {{ project.forks || [35, 22, 18][index] }} {{ t('projects.uiElements.forks') }}
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ index === 0 ? '3' + t('projects.uiElements.daysAgo') : 
                       index === 1 ? '1' + t('projects.uiElements.weeksAgo') : 
                       '2' + t('projects.uiElements.weeksAgo') }} {{ t('projects.uiElements.updated') }}
                  </div>
                </div>
                
                <!-- 技术标签 -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="(tag, i) in project.technologies" :key="i" 
                    class="text-xs py-1 px-3 rounded-full transition-colors"
                    :class="`bg-${tag.color}-100 text-${tag.color}-800`">
                    {{ tag.name }}
                  </span>
                </div>
                
                <!-- 按钮 -->
                <div class="flex flex-wrap gap-4">
                  <a :href="project.github" target="_blank" 
                     class="btn btn-primary glow-effect group">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.031 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                    {{ t('projects.githubRepo') }}
                  </a>
                  <a v-if="project.demo" 
                     :href="project.demo" 
                     target="_blank" 
                     class="btn btn-outline group">
                    {{ t('projects.viewDemo') }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- "加载更多"按钮 - 更现代的设计 -->
        <div class="mt-16 text-center">
          <button class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 hover:text-primary-600 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group">
            <span class="relative z-10 flex items-center">
              {{ t('projects.loadMore') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-50 to-white/0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full opacity-50"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- 开源贡献时间线 - 科技感设计 -->
    <section class="section bg-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-70"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-70"></div>
      
      <!-- 微妙的网格背景 -->
      <div class="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div class="container-custom relative z-10">
        <div class="text-center mb-16">
          <!-- 高级感标题区域 -->
          <div class="inline-flex items-center justify-center mb-3">
            <span class="h-px w-12 bg-gradient-to-r from-transparent to-primary-300"></span>
            <span class="mx-3 text-sm font-semibold text-primary-600 uppercase tracking-wide relative px-4 py-1.5 group">
              <span class="relative z-10">{{ t('projects.communityParticipation') }}</span>
              <span class="absolute inset-0 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
            <span class="h-px w-12 bg-gradient-to-l from-transparent to-primary-300"></span>
          </div>
          
          <!-- 炫酷标题 -->
          <h2 class="mb-4 relative inline-block">
            {{ t('projects.contributions') }}
            <span class="absolute -right-1 -top-1 w-1.5 h-1.5 bg-primary-400 rounded-full animate-ping opacity-70"></span>
            <span class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-100 to-transparent"></span>
          </h2>
          
          <p class="text-gray-600 max-w-2xl mx-auto leading-relaxed">{{ t('projects.contributionsDesc') }}</p>
        </div>
        
        <div class="relative">
          <!-- 贡献时间线 - 改进的设计 -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300 z-0 rounded-full"></div>
          
          <div class="relative z-10 space-y-24">
            <div v-for="(contribution, index) in contributions" :key="index" 
                 class="flex flex-col md:flex-row items-center md:items-start gap-8 relative md:min-h-[100px]">
                 
              <!-- 左侧内容 -->
              <div :class="[index % 2 === 0 ? 'md:w-1/2 md:text-right md:pr-12' : 'md:w-1/2 md:order-3 md:pl-12']" 
                   data-aos="fade-right" 
                   :data-aos-delay="index * 100">
                <div class="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 md:inline-block w-full md:w-auto relative">
                  <!-- 装饰角落 -->
                  <div class="absolute top-0 left-0 w-5 h-5 border-t border-l rounded-tl-lg opacity-50"
                      :class="[
                        index === 0 ? 'border-primary-300' : 
                        index === 1 ? 'border-secondary-300' : 
                        index % 2 === 0 ? 'border-accent-300' : 
                        'border-purple-300'
                      ]"></div>
                  <div class="absolute bottom-0 right-0 w-5 h-5 border-b border-r rounded-br-lg opacity-50"
                      :class="[
                        index === 0 ? 'border-primary-300' : 
                        index === 1 ? 'border-secondary-300' : 
                        index % 2 === 0 ? 'border-accent-300' : 
                        'border-purple-300'
                      ]"></div>
                      
                  <!-- 日期标签 - 更现代的设计 -->
                  <div class="inline-block px-4 py-1.5 mb-3 rounded-full shadow-sm"
                     :class="[
                       index === 0 ? 'bg-primary-100 text-primary-700' : 
                       index === 1 ? 'bg-secondary-100 text-secondary-700' : 
                       index % 2 === 0 ? 'bg-accent-100 text-accent-700' : 
                       'bg-purple-100 text-purple-700'
                     ]">
                    <div class="text-xs font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ contribution.date }}
                    </div>
                  </div>
                  
                  <!-- 项目名称 - 更精美的排版 -->
                  <h3 class="text-xl font-bold mb-3 relative inline-block"
                    :class="[
                      index === 0 ? 'text-primary-700' : 
                      index === 1 ? 'text-secondary-700' : 
                      index % 2 === 0 ? 'text-accent-700' : 
                      'text-purple-700'
                    ]">
                    {{ contribution.project }}
                    <span class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r rounded-full opacity-40"
                         :class="[
                           index === 0 ? 'from-primary-200 to-primary-300' : 
                           index === 1 ? 'from-secondary-200 to-secondary-300' : 
                           index % 2 === 0 ? 'from-accent-200 to-accent-300' : 
                           'from-purple-200 to-purple-300'
                         ]">
                    </span>
                  </h3>
                  
                  <!-- 贡献描述 - 优化排版 -->
                  <p class="text-gray-600 leading-relaxed">{{ contribution.description }}</p>
                  
                  <!-- 技术标签 - 更精致的设计 -->
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span v-for="(tag, tagIndex) in [t('projects.uiElements.code'), t('projects.uiElements.docs'), t('projects.uiElements.pr')][index % 3].split(' ')" :key="tagIndex" 
                      class="text-xs py-1 px-3 rounded-full bg-gray-50 border border-gray-100 shadow-sm transform hover:scale-105 transition-transform duration-300 flex items-center">
                      <span class="w-1.5 h-1.5 rounded-full mr-1.5"
                           :class="[
                             index === 0 ? 'bg-primary-400' : 
                             index === 1 ? 'bg-secondary-400' : 
                             index % 2 === 0 ? 'bg-accent-400' : 
                             'bg-purple-400'
                           ]"></span>
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- 中间节点 - 增强视觉效果 -->
              <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10 shadow-lg relative md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2"
                   :class="[
                     index === 0 ? 'bg-gradient-to-br from-primary-400 to-primary-600' : 
                     index === 1 ? 'bg-gradient-to-br from-secondary-400 to-secondary-600' : 
                     index % 2 === 0 ? 'bg-gradient-to-br from-accent-400 to-accent-600' : 
                     'bg-gradient-to-br from-purple-400 to-purple-600'
                   ]">
                <!-- 内部光晕 -->
                <div class="absolute inset-1.5 rounded-full bg-white/30"></div>
                
                <!-- 闪光效果 -->
                <div class="absolute inset-0 rounded-full animate-ping opacity-30"
                     :class="[
                       index === 0 ? 'bg-primary-500' : 
                       index === 1 ? 'bg-secondary-500' : 
                       index % 2 === 0 ? 'bg-accent-500' : 
                       'bg-purple-500'
                     ]" 
                     :style="`animation-delay: ${index * 0.5}s; animation-duration: 3s;`"></div>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  <path v-else-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                
                <!-- 时间节点连接线 -->
                <div v-if="index < contributions.length - 1" class="absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-gray-200 to-transparent top-14 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <!-- 右侧内容（或左侧，取决于index） -->
              <div :class="[index % 2 === 0 ? 'md:w-1/2 md:order-3 md:pl-12' : 'md:w-1/2 md:text-right md:pr-12']">
                <!-- 这里保留一个空的div，以确保布局平衡 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 加入贡献区域 - 科技感设计 -->
    <section class="section bg-gradient-tech relative overflow-hidden">
      <!-- 科技感背景元素 -->
      <div class="absolute inset-0 dot-grid opacity-20"></div>
      <div class="absolute inset-0 circuit-bg opacity-10"></div>
      
      <!-- 动态光晕效果 -->
      <div class="absolute -bottom-48 -right-48 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute -top-48 -left-48 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s"></div>
      
      <!-- 底部波浪装饰 -->
      <div class="absolute bottom-0 left-0 right-0 h-12 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" class="fill-white"></path>
        </svg>
      </div>
      
      <div class="container-custom text-center relative z-10">
        <!-- 吸引人的标题区域 -->
        <div class="inline-block px-5 py-2 mb-10 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
          <span class="flex items-center">
            <span class="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
            <span class="relative">
              {{ t('projects.createTogether') }}
              <span class="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></span>
            </span>
          </span>
        </div>
        
        <!-- 震撼标题 -->
        <h2 class="mb-8 text-white text-4xl md:text-5xl font-bold tracking-tight">
          {{ t('projects.contributeTogether') }}
          <!-- 装饰光点 -->
          <span class="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></span>
          <!-- 装饰线条 -->
          <span class="absolute -bottom-1 -right-1 w-6 h-px bg-white"></span>
        </h2>
        
        <p class="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed neon-text">
          {{ t('projects.contributionDesc') }}
        </p>
        
        <!-- 贡献方式卡片 - 更高级的设计 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- 贡献代码卡片 -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 relative overflow-hidden group">
            <!-- 背景动态效果 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- 装饰角落 -->
            <div class="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/30 rounded-tl-lg transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/30 rounded-br-lg transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <!-- 图标容器 -->
            <div class="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-3 transition-transform duration-300 relative">
              <!-- 内层光晕 -->
              <div class="absolute inset-0 rounded-2xl bg-white/5"></div>
              <!-- 图标 -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            
            <!-- 标题和描述 -->
            <h3 class="text-white font-bold text-xl mb-3 relative inline-block">
              {{ t('projects.contributeCode') }}
              <span class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
            </h3>
            <p class="text-white/80 leading-relaxed">{{ t('projects.contributeCodeDesc') }}</p>
            
            <!-- 高光扫过效果 -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
          </div>
          
          <!-- 完善文档卡片 -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 relative overflow-hidden group">
            <!-- 背景动态效果 -->
            <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- 装饰角落 -->
            <div class="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/30 rounded-tl-lg transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/30 rounded-br-lg transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <!-- 图标容器 -->
            <div class="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-3 transition-transform duration-300 relative">
              <!-- 内层光晕 -->
              <div class="absolute inset-0 rounded-2xl bg-white/5"></div>
              <!-- 图标 -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <!-- 标题和描述 -->
            <h3 class="text-white font-bold text-xl mb-3 relative inline-block">
              {{ t('projects.improveDocumentation') }}
              <span class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
            </h3>
            <p class="text-white/80 leading-relaxed">{{ t('projects.improveDocumentationDesc') }}</p>
            
            <!-- 高光扫过效果 -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
          </div>
          
          <!-- 报告问题卡片 -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 relative overflow-hidden group">
            <!-- 背景动态效果 -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- 装饰角落 -->
            <div class="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/30 rounded-tl-lg transform -translate-x-3 -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            <div class="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/30 rounded-br-lg transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <!-- 图标容器 -->
            <div class="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-3 transition-transform duration-300 relative">
              <!-- 内层光晕 -->
              <div class="absolute inset-0 rounded-2xl bg-white/5"></div>
              <!-- 图标 -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            
            <!-- 标题和描述 -->
            <h3 class="text-white font-bold text-xl mb-3 relative inline-block">
              {{ t('projects.reportIssues') }}
              <span class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
            </h3>
            <p class="text-white/80 leading-relaxed">{{ t('projects.reportIssuesDesc') }}</p>
            
            <!-- 高光扫过效果 -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
          </div>
        </div>
        
        <!-- 行动按钮 - 高级感设计 -->
        <a href="https://github.com" target="_blank" 
           class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group">
          <!-- 按钮内容 -->
          <span class="relative z-10 flex items-center">
            {{ t('projects.joinNow') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          
          <!-- 按钮背景效果 -->
          <span class="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 检查翻译键是否存在
const hasTranslation = (key) => {
  const message = t(key)
  // 如果返回的是键名本身，说明没有对应的翻译
  return message !== key && message !== ''
}

// 技术栈数据
const techStack = computed(() => ([
  {
    name: t('projects.technologies.vue'),
    color: 'green',
    icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
  },
  {
    name: t('projects.technologies.react'),
    color: 'blue',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    name: t('projects.technologies.node'),
    color: 'teal',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
  },
  {
    name: t('projects.technologies.python'),
    color: 'blue',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    name: t('projects.technologies.tensorflow'),
    color: 'orange',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    name: t('projects.technologies.aws'),
    color: 'yellow',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    name: t('projects.technologies.docker'),
    color: 'blue',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
  },
  {
    name: t('projects.technologies.mongodb'),
    color: 'green',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
  },
  {
    name: t('projects.technologies.typescript'),
    color: 'blue',
    icon: 'M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8'
  },
  {
    name: t('projects.technologies.graphql'),
    color: 'pink',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
  },
  {
    name: t('projects.technologies.kubernetes'),
    color: 'blue',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    name: t('projects.technologies.flutter'),
    color: 'blue',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  }
]))

// 项目数据 - 使用计算属性以便响应语言变化
const projects = computed(() => [
  {
    id: 'litemes',
    name: hasTranslation('projects.projectItems.litemes.name') ? t('projects.projectItems.litemes.name') : 'Litemes',
    description: hasTranslation('projects.projectItems.litemes.description') ? t('projects.projectItems.litemes.description') : '一个轻量级的MES生产制造执行系统',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1080',
    github: 'https://github.com/xiahua-ai/litemes',
    demo: 'https://litemes.xiahua-ai.com',
    technologies: [
      { name: t('projects.technologies.vue'), color: 'green' },
      { name: t('projects.technologies.node'), color: 'teal' }
    ],
    status: t('projects.activeDevelopment'),
    stars: 128,
    forks: 32
  },
  {
    id: 'freesign',
    name: hasTranslation('projects.projectItems.freesign.name') ? t('projects.projectItems.freesign.name') : 'Freesign',
    description: hasTranslation('projects.projectItems.freesign.description') ? t('projects.projectItems.freesign.description') : '一个免费的电子签名应用（金融）',
    image: 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1080',
    github: 'https://github.com/xiahua-ai/freesign',
    demo: 'https://freesign.xiahua-ai.com',
    technologies: [
      { name: t('projects.technologies.react'), color: 'blue' },
      { name: t('projects.technologies.node'), color: 'teal' }
    ],
    status: t('projects.stableVersion'),
    stars: 95,
    forks: 24
  },
  {
    id: 'mini-contract',
    name: hasTranslation('projects.projectItems.miniContract.name') ? t('projects.projectItems.miniContract.name') : 'Mini-Contract',
    description: hasTranslation('projects.projectItems.miniContract.description') ? t('projects.projectItems.miniContract.description') : '一个迷你的电子签合同管理系统',
    image: 'https://images.pexels.com/photos/5849591/pexels-photo-5849591.jpeg?auto=compress&cs=tinysrgb&w=1080',
    github: 'https://github.com/xiahua-ai/mini-contract',
    demo: 'https://mini-contract.xiahua-ai.com',
    technologies: [
      { name: t('projects.technologies.vue'), color: 'green' },
      { name: t('projects.technologies.node'), color: 'teal' }
    ],
    status: t('projects.activeDevelopment'),
    stars: 76,
    forks: 18
  },
  {
    id: 'data-vis',
    name: hasTranslation('projects.projectItems.dataVis.name') ? t('projects.projectItems.dataVis.name') : 'Data-Vis',
    description: hasTranslation('projects.projectItems.dataVis.description') ? t('projects.projectItems.dataVis.description') : '数据可视化组件库，支持多种图表和仪表盘',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1080',
    github: 'https://github.com/xiahua-ai/data-vis',
    demo: 'https://data-vis.xiahua-ai.com',
    technologies: [
      { name: t('projects.technologies.react'), color: 'blue' },
      { name: t('projects.technologies.typescript'), color: 'blue' }
    ],
    status: t('projects.stableVersion'),
    stars: 112,
    forks: 28
  },
  {
    id: 'ai-toolkit',
    name: hasTranslation('projects.projectItems.aiToolkit.name') ? t('projects.projectItems.aiToolkit.name') : 'AI-Toolkit',
    description: hasTranslation('projects.projectItems.aiToolkit.description') ? t('projects.projectItems.aiToolkit.description') : 'AI应用开发工具包，简化AI模型的集成和部署',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1080',
    github: 'https://github.com/xiahua-ai/ai-toolkit',
    demo: 'https://ai-toolkit.xiahua-ai.com',
    technologies: [
      { name: t('projects.technologies.python'), color: 'blue' },
      { name: t('projects.technologies.typescript'), color: 'blue' }
    ],
    status: t('projects.activeDevelopment'),
    stars: 203,
    forks: 45
  },
  {
    id: 'flutter-ui',
    name: hasTranslation('projects.projectItems.flutterUi.name') ? t('projects.projectItems.flutterUi.name') : 'Flutter-UI',
    description: hasTranslation('projects.projectItems.flutterUi.description') ? t('projects.projectItems.flutterUi.description') : 'Flutter UI组件库，提供美观且高性能的移动应用界面组件',
    image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1080',
    github: 'https://github.com/xiahua-ai/flutter-ui',
    demo: 'https://flutter-ui.xiahua-ai.com',
    technologies: [
      { name: t('projects.technologies.flutter'), color: 'blue' }
    ],
    status: t('projects.maintenance'),
    stars: 87,
    forks: 19
  }
])

// 添加getProjects计算属性，确保项目数据正确显示
const getProjects = computed(() => {
  return projects.value.map(project => ({
    ...project,
    technologies: project.technologies || [
      { name: t('projects.technologies.vue'), color: 'green' },
      { name: t('projects.technologies.node'), color: 'teal' }
    ],
    status: project.status || t('projects.activeDevelopment')
  }))
})

// 贡献数据 - 使用计算属性以便响应语言变化
const contributions = computed(() => [
  {
    id: 'vue',
    project: hasTranslation('projects.contributionItems.vuejs.project') ? t('projects.contributionItems.vuejs.project') : 'Vue.js',
    description: hasTranslation('projects.contributionItems.vuejs.description') ? t('projects.contributionItems.vuejs.description') : '修复了Vue.js中的一个关键性能问题，优化了大型列表的渲染速度。',
    date: hasTranslation('projects.contributionItems.vuejs.date') ? t('projects.contributionItems.vuejs.date') : '2023年9月',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1080',
    githubUrl: 'https://github.com/vuejs/vue',
    pullRequests: 8,
    issues: 12
  },
  {
    id: 'react',
    project: hasTranslation('projects.contributionItems.reactNative.project') ? t('projects.contributionItems.reactNative.project') : 'React Native',
    description: hasTranslation('projects.contributionItems.reactNative.description') ? t('projects.contributionItems.reactNative.description') : '开发了一个新的无障碍功能组件，使应用更易于被视障用户使用。',
    date: hasTranslation('projects.contributionItems.reactNative.date') ? t('projects.contributionItems.reactNative.date') : '2023年6月',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1080',
    githubUrl: 'https://github.com/facebook/react',
    pullRequests: 5,
    issues: 9
  },
  {
    id: 'tensorflow',
    project: hasTranslation('projects.contributionItems.tensorflow.project') ? t('projects.contributionItems.tensorflow.project') : 'TensorFlow',
    description: hasTranslation('projects.contributionItems.tensorflow.description') ? t('projects.contributionItems.tensorflow.description') : '参与了模型优化和API改进',
    date: hasTranslation('projects.contributionItems.tensorflow.date') ? t('projects.contributionItems.tensorflow.date') : '2023年12月',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1080',
    githubUrl: 'https://github.com/tensorflow/tensorflow',
    pullRequests: 3,
    issues: 7
  }
])

// 结构化数据生成时也使用条件渲染
const updateStructuredData = () => {
  // 移除之前的结构化数据脚本
  const oldScripts = document.querySelectorAll('script[data-structured-data]')
  oldScripts.forEach(script => script.remove())
  
  // 项目列表结构化数据
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.value.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.name,
        "description": project.description,
        "image": project.image,
        "url": project.githubUrl,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All"
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
        "name": t('nav.projects'),
        "item": "https://xiahua-ai.com/projects"
      }
    ]
  };
  
  // 注入结构化数据
  let projectListScript = document.createElement('script');
  projectListScript.type = 'application/ld+json';
  projectListScript.textContent = JSON.stringify(projectListSchema);
  projectListScript.setAttribute('data-structured-data', 'project-list');
  document.head.appendChild(projectListScript);
  
  let breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  breadcrumbScript.setAttribute('data-structured-data', 'breadcrumb');
  document.head.appendChild(breadcrumbScript);
}

// 监听语言变化，重新生成结构化数据
watch(locale, () => {
  updateStructuredData()
})

// 初始化结构化数据
onMounted(() => {
  updateStructuredData();
});
</script>

<style>
/* 渐变背景 */
.bg-gradient-tech {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

/* 卡片玻璃效果 */
.card-glass {
  border-radius: 1rem;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.05),
    0 4px 8px rgba(0,0,0,0.05),
    inset 0 0 0 1px rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  backdrop-filter: blur(4px);
}

/* 科技盒子效果 */
.tech-box {
  border-radius: 1rem;
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.05),
    0 6px 12px rgba(0,0,0,0.03);
  overflow: hidden;
}

/* 动画效果 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* 网格和电路背景 */
.grid-pattern {
  background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.circuit-bg {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* 点状网格背景 */
.dot-grid {
  background-image: radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px), radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

/* 发光效果 */
.glow-effect {
  position: relative;
  z-index: 1;
}

.glow-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.5), transparent 70%);
  border-radius: inherit;
  filter: blur(15px);
}

.glow-effect:hover::after {
  opacity: 0.8;
}

/* 技术渐变文本 */
.tech-gradient {
  background: linear-gradient(to right, #1e40af, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* 慢速脉冲动画 */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 霓虹文字效果 */
.neon-text {
  text-shadow: 
    0 0 5px rgba(59, 130, 246, 0.5),
    0 0 10px rgba(59, 130, 246, 0.3),
    0 0 15px rgba(59, 130, 246, 0.1);
}
</style>
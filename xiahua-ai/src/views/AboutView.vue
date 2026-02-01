<template>
  <div class="about-page bg-gray-50">
    <!-- 科技风格背景元素 -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div class="absolute w-full h-full" style="background-image: radial-gradient(circle at 30% 20%, rgba(var(--primary-rgb), 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(var(--primary-rgb), 0.15) 0%, transparent 35%);"></div>
      <div class="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 gap-4 opacity-20">
        <div v-for="i in 144" :key="i" class="border border-gray-200"></div>
      </div>
    </div>

    <!-- 头部区域 - 个人介绍 -->
    <section class="relative py-32 overflow-hidden z-10 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600">
      <!-- 装饰元素 -->
      <div class="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white opacity-10"></div>
        <div class="absolute left-1/3 top-3/4 w-64 h-64 rounded-full bg-white opacity-10"></div>
        <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255,255,255,0.1)" d="M0,160 C320,220 420,120 720,120 C1020,120 1120,200 1440,180 L1440,200 L0,200 Z"></path>
        </svg>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- 头像区域 -->
          <div class="relative">
            <!-- 头像背景装饰 -->
            <div class="absolute -inset-2 bg-gradient-to-br from-white/30 to-white/5 rounded-full blur-sm animate-pulse-slow"></div>
            <div class="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl hover:border-white/40 transition-all duration-500">
              <div class="absolute inset-0 bg-gradient-to-b from-primary-400/30 to-primary-800/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <img src="@/assets/images/shawn-avatar.jpg" alt="小华同学" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>

            <!-- 装饰圆环 -->
            <div class="absolute -inset-5 border-2 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
            <div class="absolute -inset-10 border-1 border-dotted border-white/10 rounded-full animate-spin-reverse-slow"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-300/10 rounded-full blur-md"></div>
            
            <!-- 装饰粒子 -->
            <div class="particle-1"></div>
            <div class="particle-2"></div>
            <div class="particle-3"></div>
          </div>
          
          <!-- 个人信息 -->
          <div class="text-white text-center lg:text-left">
            <div class="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-light tracking-wide animate-float">
              <span class="animate-pulse-slow inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              {{ t('about.subtitle') }}
            </div>
            <h1 class="text-5xl font-light tracking-wider mb-4 opacity-0 animate-fade-in-up">
              <span class="text-white">小华同学</span>
              <span class="font-bold relative ml-2 text-primary-300 glow-text">
                AI<span class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-300"></span>
              </span>
            </h1>
            <p class="text-xl mb-6 text-white/90 font-light tracking-widest opacity-0 animate-fade-in-up animation-delay-200">{{ t('about.role') }}</p>
            <p class="text-lg mb-8 max-w-2xl backdrop-blur-sm bg-white/5 p-5 rounded-lg border border-white/10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400 hover:bg-white/10 transition-colors duration-500">
              {{ t('about.description') }}
            </p>
            
            <!-- 社交链接 -->
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-600">
              <a href="https://github.com/freeleepm" target="_blank" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ t('about.social.github') }}</span>
              </a>
              
              <!-- Gitee (替换Twitter) -->
              <a href="https://gitee.com/leepm" target="_blank" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg t="1743604432509" class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1997" width="200" height="200">
                  <path d="M896.3052803 427.59336267H465.08398823c-20.69630173 0-37.49062554 16.79432382-37.49062556 37.49062555l-0.02636472 93.75292941c0 20.69630173 16.76795911 37.49062554 37.49062556 37.51699027h262.51347546c20.69630173 0 37.49062554 16.79432382 37.49062555 37.49062638v18.74531277a112.49824219 112.49824219 0 0 1-112.49824219 112.49824219H296.32344217a37.49062554 37.49062554 0 0 1-37.49062554-37.49062556V371.38378824a112.49824219 112.49824219 0 0 1 112.49824218-112.49824219L896.22618615 258.85918133c20.69630173 0 37.49062554-16.76795911 37.49062557-37.46426165L933.79590585 127.64199027h0.02636472A37.49062554 37.49062554 0 0 0 896.35800973 90.125h-0.02636471L371.38378824 90.15136472C216.06924714 90.15136472 90.15136472 216.06924714 90.15136472 371.38378824v524.94785678c0 20.69630173 16.79432382 37.49062554 37.49062555 37.49062555h553.07900829a253.101272 253.101272 0 0 0 253.10127201-253.10127201v-215.61064563c0-20.69630173-16.79432382-37.49062554-37.49062555-37.49062554z" p-id="1998" fill="currentColor"></path>
                </svg>
                <span>{{ t('about.social.gitee') }}</span>
              </a>

              <!-- 微信 -->
              <a href="#" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 6 0 9.3-4.9 8.3-10.3-.8-4.2-2.6-10.6-4.6-18.7-.6-2.1-.9-4.4-.9-6.7 0-7.2 2.9-13.3 7.7-17.1zm-74.3-124.9c-14.5 0-26.3-11.8-26.3-26.3 0-14.5 11.8-26.3 26.3-26.3s26.3 11.8 26.3 26.3c0 14.5-11.8 26.3-26.3 26.3zm-138.7 0c-14.5 0-26.3-11.8-26.3-26.3 0-14.5 11.8-26.3 26.3-26.3s26.3 11.8 26.3 26.3c0 14.5-11.8 26.3-26.3 26.3z" />
                </svg>
                <span>{{ t('about.social.wechat') }}</span>
              </a>

              <!-- B站 -->
              <a href="#" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.594667 8.490667-10.965333l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.333333 53.333333v320a53.333333 53.333333 0 0 0 53.333333 53.333333h533.333334a53.333333 53.333333 0 0 0 53.333333-53.333333v-320a53.333333 53.333333 0 0 0-53.333333-53.333333z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" />
                </svg>
                <span>{{ t('about.social.bilibili') }}</span>
              </a>

              <!-- 抖音 -->
              <a href="#" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6v158.8c-86.6 0-156.9 74.8-156.9 166.9 0 92 70.3 166.9 156.9 166.9s156.9-74.8 156.9-166.9V85.3h154.9c14 79.6 78.2 139.8 154.9 143.5v195.1z" />
                </svg>
                <span>{{ t('about.social.douyin') }}</span>
              </a>

              <!-- 视频号 -->
              <a href="#" class="group flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary-300" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297a16.1 16.1 0 0 0-16.1 16.1v430A16.1 16.1 0 0 0 398 760a15.9 15.9 0 0 0 25.3-13.1l296.1-214.7c8.5-6.2 8.5-20.1 0-33.1z" />
                </svg>
                <span>{{ t('about.social.videoChannel') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 波浪底部装饰 -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full" preserveAspectRatio="none" height="80">
          <path fill="#f8fafc" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,218.7C384,213,480,139,576,122.7C672,107,768,149,864,186.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- 技能区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
      <div class="container mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">{{ t('about.skills.expertise') }}</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{ t('about.skills.title') }}</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">{{ t('about.skills.subtitle') }}</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 技能卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(category, index) in skills" :key="index" 
               class="card p-10 hover:shadow-xl transition-all duration-500 border border-gray-100 rounded-2xl bg-white relative overflow-hidden group transform hover:-translate-y-2 opacity-0"
               :class="{'animate-fade-in-up': true, 'animation-delay-200': index === 0, 'animation-delay-400': index === 1}">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute bottom-0 right-0 w-40 h-40 bg-primary-50 rounded-full -mr-20 -mb-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <!-- 标题和图标 -->
            <div class="flex items-center mb-8 relative z-10">
              <div class="w-14 h-14 rounded-xl bg-primary-100 text-primary-500 flex items-center justify-center mr-5 shadow-sm group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="category.icon" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold">{{ t(category.name) }}</h3>
            </div>
            
            <!-- 技能条 -->
            <div class="space-y-6 relative z-10">
              <div v-for="(skill, i) in category.items" :key="i" 
                   class="transform transition-all duration-500 hover:translate-x-2"
                   :style="`transition-delay: ${i * 100}ms`">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-800">{{ skill.name.includes('.') ? t(skill.name) : skill.name }}</span>
                  <span class="text-primary-600 font-light">{{ skill.level }}%</span>
                </div>
                <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative">
                  <div class="absolute top-0 left-0 h-full w-full bg-gray-200 rounded-full" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 10px);"></div>
                  <div class="h-full rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 relative z-10 skill-bar-animate" 
                       :style="`width: 0%; --target-width: ${skill.level}%`">
                    <div class="absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full border-2 border-white bg-primary-500 shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-500" :style="`transition-delay: ${i * 150 + 300}ms`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 经历区域 -->
    <section class="py-24 relative z-10 bg-white overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
      <div class="absolute inset-0 opacity-5">
        <div class="h-full w-full" style="background-image: radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px); background-size: 30px 30px;"></div>
      </div>
      
      <div class="container mx-auto px-6 relative">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">{{ t('about.experience.careerJourney') }}</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{ t('about.experience.title') }}</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">{{ t('about.experience.subtitle') }}</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 时间线 -->
        <div class="relative max-w-5xl mx-auto">
          <!-- 中间线 -->
          <div class="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100 transform md:-translate-x-1/2"></div>
          
          <div class="space-y-24">
            <div v-for="(exp, index) in experiences" :key="index" 
                 class="relative flex flex-col md:flex-row items-start group opacity-0"
                 :class="{'animate-fade-in-up': true, 'animation-delay-100': index === 0, 'animation-delay-300': index === 1, 'animation-delay-500': index === 2, 'animation-delay-700': index === 3}">
              <!-- 时间点 -->
              <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-xl bg-white border border-primary-300 z-10 flex items-center justify-center shadow-lg group-hover:border-primary-500 group-hover:border-2 transition-all duration-300">
                <div class="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300 transform group-hover:rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <!-- 内容框-左侧 -->
              <div class="md:w-1/2 md:pr-16 md:text-right order-1 md:order-1" :class="index % 2 === 0 ? 'md:block' : 'md:hidden'">
                <div class="ml-16 md:ml-0 md:mr-8 bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <span class="text-primary-500 font-medium block mb-2">{{ exp.period }}</span>
                  <h3 class="text-2xl font-bold mb-3 break-words">{{ t(exp.title) }}</h3>
                  <p class="text-gray-500 mb-4 font-light">{{ t(exp.company) }}</p>
                  <p class="text-gray-600 leading-relaxed">{{ t(exp.description) }}</p>
                </div>
              </div>
              
              <!-- 空位 -->
              <div class="md:w-1/2 invisible order-1 md:order-2" :class="index % 2 === 0 ? 'md:hidden' : 'md:block'"></div>
              
              <!-- 内容框-右侧 -->
              <div class="md:w-1/2 md:pl-16 md:text-left order-1 md:order-2" :class="index % 2 === 0 ? 'md:hidden' : 'md:block'">
                <div v-if="index % 2 !== 0" class="ml-16 md:ml-8 bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <span class="text-primary-500 font-medium block mb-2">{{ exp.period }}</span>
                  <h3 class="text-2xl font-bold mb-3 break-words">{{ t(exp.title) }}</h3>
                  <p class="text-gray-500 mb-4 font-light">{{ t(exp.company) }}</p>
                  <p class="text-gray-600 leading-relaxed">{{ t(exp.description) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系区域 -->
    <section class="py-24 relative z-10 bg-slate-50 overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-30 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-6 relative">
        <!-- 标题 -->
        <div class="text-center mb-20 relative">
          <div class="inline-block absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
          <span class="inline-block text-primary-500 text-sm font-medium tracking-wider uppercase mb-3 opacity-0 animate-fade-in-up">{{ t('about.contact.stayConnected') }}</span>
          <h2 class="text-4xl font-light mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span class="relative inline-block mx-2">
              <span class="text-primary-600 font-bold">{{ t('about.contact.title') }}</span>
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-width-grow"></span>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-600 opacity-0 animate-fade-in-up animation-delay-200">{{ t('about.contact.subtitle') }}</p>
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent top-[105%] left-0"></div>
        </div>
        
        <!-- 联系卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="mailto:shawn@leepm.com" 
             class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-100">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"></div>
            
            <!-- 图标 -->
            <div class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- 文本 -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600">{{ t('about.contact.email') }}</h3>
              <p class="text-gray-600">shawn@leepm.com</p>
            </div>
          </a>
          
          <a href="#" 
             class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-300">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"></div>
            
            <!-- 图标 -->
            <div class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- 文本 -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600">{{ t('about.contact.wechat') }}</h3>
              <p class="text-gray-600">TechIntent</p>
            </div>
          </a>
          
          <a href="https://github.com/freeleepm" target="_blank" 
             class="group bg-white p-10 text-center rounded-2xl border border-gray-100 shadow-lg shadow-primary-100/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-500">
            <!-- 背景装饰 -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -mr-10 -mt-10"></div>
            
            <!-- 图标 -->
            <div class="relative z-10 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 shadow-sm transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </div>
            
            <!-- 文本 -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600">{{ t('about.contact.github') }}</h3>
              <p class="text-gray-600">github.com/freeleepm</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 技能数据
const skills = [
  {
    name: 'about.skills.development',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    items: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'TypeScript', level: 80 }
    ]
  },
  {
    name: 'about.skills.aiAndData',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    items: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'NLP', level: 90 },
      { name: 'Computer Vision', level: 78 },
      { name: 'Data Analysis', level: 88 }
    ]
  }
];

// 经历数据
const experiences = [
  {
    period: `2021 - ${t('about.experience.present')}`,
    title: 'about.experience.aiProductManager',
    company: 'about.experience.techCompany',
    description: 'about.experience.aiProductDesc'
  },
  {
    period: '2018 - 2021',
    title: 'about.experience.seniorFrontend',
    company: 'about.experience.internetCompany',
    description: 'about.experience.frontendDesc'
  },
  {
    period: '2016 - 2018',
    title: 'about.experience.fullstack',
    company: 'about.experience.startup',
    description: 'about.experience.fullstackDesc'
  },
  {
    period: '2014 - 2016',
    title: 'about.experience.softwareEngineer',
    company: 'about.experience.softwareCompany',
    description: 'about.experience.softwareDesc'
  }
];

// 教育背景数据
const education = [
  {
    period: '2012 - 2014',
    degree: 'about.education.degrees.masters',
    field: 'about.education.fields.computerScience',
    school: 'about.education.schools.techUniversity',
    description: 'about.education.descriptions.masters'
  },
  {
    period: '2008 - 2012',
    degree: 'about.education.degrees.bachelors',
    field: 'about.education.fields.softwareEngineering',
    school: 'about.education.schools.nationalUniversity',
    description: 'about.education.descriptions.bachelors'
  }
];

// 项目数据
const projects = [
  {
    title: 'about.projects.aiChatbot.title',
    description: 'about.projects.aiChatbot.description',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'about.projects.dataVisualization.title',
    description: 'about.projects.dataVisualization.description',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'about.projects.nlpTool.title',
    description: 'about.projects.nlpTool.description',
    image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// 证书数据
const certificates = [
  {
    name: 'about.certificates.aiSpecialist',
    issuer: 'Google',
    date: '2022',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    name: 'about.certificates.cloudArchitect',
    issuer: 'AWS',
    date: '2021',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    name: 'about.certificates.fullStack',
    issuer: 'Microsoft',
    date: '2020',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  }
];

// 添加结构化数据
onMounted(() => {
  // 关于页面的结构化数据
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "关于小华同学AI",
    "description": "了解小华同学AI的故事、团队和技术理念，以及我们如何通过技术创新推动行业发展。",
    "publisher": {
      "@type": "Organization",
      "name": "小华同学AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xiahua-ai.com/logo.png"
      }
    }
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
        "name": "关于我",
        "item": "https://xiahua-ai.com/about"
      }
    ]
  };
  
  // 个人资料结构化数据
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "小华同学",
    "jobTitle": t('about.role'),
    "description": t('about.description'),
    "url": "https://xiahua-ai.com",
    "sameAs": [
      "https://github.com/freeleepm",
      "https://gitee.com/leepm"
    ],
    "knowsAbout": skills.flatMap(category => 
      category.items.map(skill => skill.name)
    )
  };
  
  // 注入结构化数据
  let aboutScript = document.createElement('script');
  aboutScript.type = 'application/ld+json';
  aboutScript.textContent = JSON.stringify(aboutPageSchema);
  document.head.appendChild(aboutScript);
  
  let breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);
  
  let personScript = document.createElement('script');
  personScript.type = 'application/ld+json';
  personScript.textContent = JSON.stringify(personSchema);
  document.head.appendChild(personScript);
  
  // 技能条动画
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-animate').forEach(bar => {
      const targetWidth = bar.style.getPropertyValue('--target-width');
      bar.style.width = targetWidth;
    });
  }, 1000);
});
</script>

<style scoped>
:root {
  --primary-rgb: 249, 115, 22;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin-slow {
  animation: spin 15s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin 20s linear infinite reverse;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.glow-text {
  text-shadow: 0 0 15px rgba(var(--primary-rgb), 0.7), 0 0 30px rgba(var(--primary-rgb), 0.4), 0 0 45px rgba(var(--primary-rgb), 0.2);
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px 5px rgba(var(--primary-rgb), 0.15);
}

.opacity-0 {
  opacity: 0;
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

.particle-1, .particle-2, .particle-3 {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation: particle 10s linear infinite;
}

.particle-2 {
  top: 60%;
  right: 10%;
  animation: particle 12s linear infinite 2s;
}

.particle-3 {
  bottom: 15%;
  left: 20%;
  animation: particle 8s linear infinite 1s;
}

.skill-bar-animate {
  animation: skillBarGrow 1.5s ease forwards;
  animation-play-state: paused;
}

section:hover .skill-bar-animate {
  animation-play-state: running;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particle {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translate(50px, -50px) scale(2);
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(100px, -100px) scale(1);
    opacity: 0;
  }
}

@keyframes skillBarGrow {
  0% {
    width: 0;
  }
  100% {
    width: var(--target-width);
  }
}

/* 添加标题下划线动画 */
.animate-width-grow {
  animation: widthGrow 1.5s ease-out forwards;
}

@keyframes widthGrow {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

/* 让组件成为悬停目标 */
section {
  position: relative;
}

section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* 经验卡片样式调整 */
@media (min-width: 768px) {
  .md\:text-right h3.text-2xl,
  .md\:text-left h3.text-2xl {
    font-size: 1.5rem;
    word-break: break-word;
    hyphens: auto;
  }
}
</style> 
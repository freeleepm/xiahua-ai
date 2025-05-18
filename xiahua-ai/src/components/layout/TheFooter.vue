<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo和介绍 -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-6 group">
            <!-- 替换为单一SVG图标 -->
            <div>
              <img src="@/assets/xiaohua-ai-bottom.svg" alt="小华同学AI" class="h-10" />
            </div>
          </div>
          <p class="text-gray-400 mb-4">专注于AI应用开发与新媒体内容创作，致力于让科技更加贴近生活</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44.02c1.3 0 2.19.09 3.29.47.97.33 1.79.83 2.49 1.51.71.72 1.21 1.55 1.53 2.51.38 1.11.41 2.02.41 3.3.01 1.3.01 2.6.01 3.91 0 1.3-.01 2.6-.02 3.9 0 1.3-.09 2.19-.47 3.29-.33.97-.83 1.79-1.51 2.49-.72.71-1.55 1.21-2.51 1.53-1.11.38-2.02.41-3.3.41-1.3.01-2.6.01-3.91.01-1.3 0-2.6-.01-3.9-.02-1.3 0-2.19-.09-3.29-.47-.97-.33-1.79-.83-2.49-1.51-.71-.72-1.21-1.55-1.53-2.51-.38-1.11-.41-2.02-.41-3.3-.01-1.3-.01-2.6-.01-3.91 0-1.3.01-2.6.02-3.9 0-1.3.09-2.19.47-3.29.33-.97.82-1.79 1.51-2.49.72-.71 1.55-1.21 2.51-1.53 1.11-.38 2.02-.41 3.3-.41zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM3 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3.18c-.12-.39-.18-.8-.18-1.23V5.23C6 4.8 6.06 4.39 6.18 4H3zM13 15c-.39 0-.77-.07-1.13-.22a3.488 3.488 0 01-1.65-1.65c-.15-.36-.22-.74-.22-1.13 0-.39.07-.77.22-1.13a3.488 3.488 0 011.65-1.65c.36-.15.74-.22 1.13-.22.39 0 .77.07 1.13.22a3.488 3.488 0 011.65 1.65c.15.36.22.74.22 1.13 0 .39-.07.77-.22 1.13a3.488 3.488 0 01-1.65 1.65c-.36.15-.74.22-1.13.22z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- 导航链接 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">快速导航</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-primary-500 transition-colors">首页</router-link></li>
            <li><router-link to="/products" class="text-gray-400 hover:text-primary-500 transition-colors">产品</router-link></li>
            <li><router-link to="/projects" class="text-gray-400 hover:text-primary-500 transition-colors">开源项目</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-primary-500 transition-colors">关于我们</router-link></li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-gray-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>shawn@leepm.com</span>
            </li>
            <li class="flex items-center gap-2 text-gray-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>中国，重庆</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {{ new Date().getFullYear() }} 小华同学AI. 保留所有权利.</p>
        <p class="mt-2 text-sm text-gray-500">Designed by Xiaohua AI Team</p>
        <div class="mt-3 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <router-link to="/sitemap.xml" class="hover:text-primary-500 transition-colors">网站地图</router-link>
          <router-link to="/privacy" class="hover:text-primary-500 transition-colors">隐私政策</router-link>
          <router-link to="/terms" class="hover:text-primary-500 transition-colors">服务条款</router-link>
          <a href="https://beian.miit.gov.cn/" target="_blank" class="hover:text-primary-500 transition-colors">蜀ICP备15005232号</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 页脚组件逻辑
</script> 
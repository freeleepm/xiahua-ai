import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: '小华同学AI - 探索AI的无限可能打造智能化未来', 
      description: '小华同学AI为您提供智能助手和AI技术解决方案，探索人工智能的无限可能，打造智能化未来。' 
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    meta: { 
      title: '产品 - 小华同学AI', 
      description: '探索小华同学AI提供的创新产品和服务，包括智能对话系统、数据分析平台和定制化AI解决方案。' 
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { 
      title: '开源项目 - 小华同学AI', 
      description: '查看小华同学AI的开源项目，我们致力于促进AI技术的开源发展，提供丰富的开源工具和框架。' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { 
      title: '关于我 - 小华同学AI', 
      description: '了解小华同学AI的故事、团队和技术理念，以及我们如何通过技术创新推动行业发展。' 
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { 
      title: '页面未找到 - 小华同学AI',
      description: '抱歉，您请求的页面不存在。请返回首页继续浏览小华同学AI的内容。' 
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '小华同学AI官网'
  next()
})

export default router 
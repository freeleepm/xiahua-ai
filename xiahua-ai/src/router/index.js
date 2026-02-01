import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import i18n from '../i18n'

const { t } = i18n.global

// 添加updateMetaInfo方法，用于动态更新路由元信息
const updateMetaInfo = (to) => {
  // 根据路由名称和当前语言获取标题和描述
  if (to.name) {
    let title = '', description = ''
    
    switch (to.name) {
      case 'home':
        title = `${t('nav.home')} - ${t('home.hero.subtitle')}`
        description = t('home.hero.description')
        break
      case 'products':
        title = `${t('nav.products')} - ${t('products.subtitle')}`
        description = t('products.description')
        break
      case 'product-detail':
        // 产品详情页，标题需要结合动态参数
        title = `${t('productDetail.overview')} - ${to.params.id}`
        description = t('products.description')
        break
      case 'projects':
        title = `${t('nav.projects')} - ${t('projects.subtitle')}`
        description = t('projects.description')
        break
      case 'about':
        title = `${t('nav.about')} - ${t('about.subtitle')}`
        description = t('about.description')
        break
      case 'privacy':
        title = `${t('privacy.title')}`
        break
      case 'terms':
        title = `${t('terms.title')}`
        break
      case 'not-found':
        title = t('notFound.title')
        description = t('notFound.description')
        break
      default:
        title = "Xiaohua AI"
    }
    
    nextTick(() => {
      document.title = title
      
      // 更新描述元标签
      let descriptionMeta = document.querySelector('meta[name="description"]')
      if (description) {
        if (descriptionMeta) {
          descriptionMeta.setAttribute('content', description)
        } else {
          descriptionMeta = document.createElement('meta')
          descriptionMeta.setAttribute('name', 'description')
          descriptionMeta.setAttribute('content', description)
          document.head.appendChild(descriptionMeta)
        }
      }
    })
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('../views/ProductDetailView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { 
      title: '', // Will be set dynamically by updateMetaInfo
      description: '' // Will be set dynamically by updateMetaInfo
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

// 路由导航守卫
router.beforeEach((to, from, next) => {
  next()
})

// 路由变化后更新元数据
router.afterEach((to) => {
  updateMetaInfo(to)
})

export default router 
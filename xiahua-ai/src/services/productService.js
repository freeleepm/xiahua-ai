/**
 * 产品数据服务
 * 用于加载和解析 markdown 格式的产品数据
 *
 * @author 小华同学 ai
 * @created 2026-01-29
 */

// 动态导入所有产品 markdown 文件（由 Vite 插件预处理）
const productModules = import.meta.glob('../content/products/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
})

/**
 * 解析单个产品的数据
 * @param {Object} parsedData - Vite 插件预处理后的数据 { frontmatter, content, html }
 * @param {string} locale - 当前语言环境 (zh-CN | en)
 * @returns {Object} 解析后的产品数据
 */
function parseProductData(parsedData, locale = 'zh-CN') {
  const data = parsedData.frontmatter
  const htmlContent = parsedData.html
  
  // 获取本地化内容
  const i18n = data.i18n || {}
  const localeData = i18n[locale] || i18n['zh-CN'] || {}
  
  // 处理本地化的功能特性
  const features = (data.features || []).map(feature => {
    if (typeof feature === 'string') {
      return feature
    }
    return feature[locale] || feature['zh-CN'] || feature.key
  })
  
  // 处理本地化的规格
  const specs = {}
  if (data.specs) {
    Object.keys(data.specs).forEach(key => {
      const spec = data.specs[key]
      const localizedSpec = spec[locale] || spec['zh-CN'] || spec
      if (localizedSpec && typeof localizedSpec === 'object') {
        specs[localizedSpec.name] = localizedSpec.value
      }
    })
  }
  
  // 处理规格分类
  const specCategories = (data.specCategories || []).map(category => {
    const categoryName = typeof category.name === 'object' 
      ? (category.name[locale] || category.name['zh-CN']) 
      : category.name
    
    const items = (category.items || []).map(item => {
      const itemName = typeof item.name === 'object'
        ? (item.name[locale] || item.name['zh-CN'])
        : item.name
      const itemValue = typeof item.value === 'object'
        ? (item.value[locale] || item.value['zh-CN'])
        : item.value
      return { name: itemName, value: itemValue }
    })
    
    return { name: categoryName, items }
  })
  
  // 处理使用场景
  const useCases = (data.useCases || []).map(useCase => ({
    icon: useCase.icon,
    title: typeof useCase.title === 'object'
      ? (useCase.title[locale] || useCase.title['zh-CN'])
      : useCase.title,
    description: typeof useCase.description === 'object'
      ? (useCase.description[locale] || useCase.description['zh-CN'])
      : useCase.description
  }))
  
  // 处理用户评价
  const reviews = (data.reviews || []).map(review => ({
    id: review.id,
    userName: typeof review.userName === 'object'
      ? (review.userName[locale] || review.userName['zh-CN'])
      : review.userName,
    userAvatar: review.userAvatar || '',
    date: review.date,
    rating: review.rating,
    content: typeof review.content === 'object'
      ? (review.content[locale] || review.content['zh-CN'])
      : review.content
  }))
  
  // 处理常见问题
  const faqs = (data.faqs || []).map(faq => ({
    question: typeof faq.question === 'object'
      ? (faq.question[locale] || faq.question['zh-CN'])
      : faq.question,
    answer: typeof faq.answer === 'object'
      ? (faq.answer[locale] || faq.answer['zh-CN'])
      : faq.answer
  }))
  
  return {
    id: data.id,
    categoryId: data.categoryId,
    isFree: data.isFree,
    price: data.price || 0,
    rating: data.rating || 4.5,
    reviewCount: data.reviewCount || 0,
    demoUrl: data.demoUrl || '#',
    image: data.image,
    images: data.images || [data.image],
    
    // 本地化内容
    title: localeData.title || data.id,
    shortDescription: localeData.shortDescription || '',
    description: localeData.description || '',
    detailedDescription: localeData.detailedDescription || localeData.description || '',
    
    // 解析后的结构化数据
    features,
    specs,
    specCategories,
    useCases,
    reviews,
    faqs,
    
    // 原始 markdown 内容（HTML格式）
    htmlContent,
    
    // 价格模型
    pricingModel: data.isFree 
      ? (locale === 'en' ? 'Free' : '免费') 
      : (locale === 'en' ? 'Subscription' : '订阅制')
  }
}

/**
 * 获取所有产品列表
 * @param {string} locale - 当前语言环境
 * @returns {Array} 产品列表
 */
export function getAllProducts(locale = 'zh-CN') {
  const products = []
  
  for (const path in productModules) {
    const parsedData = productModules[path]
    try {
      const product = parseProductData(parsedData, locale)
      products.push(product)
    } catch (error) {
      console.error(`Error parsing product file: ${path}`, error)
    }
  }
  
  return products
}

/**
 * 根据 ID 获取单个产品
 * @param {string} productId - 产品 ID
 * @param {string} locale - 当前语言环境
 * @returns {Object|null} 产品数据
 */
export function getProductById(productId, locale = 'zh-CN') {
  const products = getAllProducts(locale)
  return products.find(p => p.id === productId) || null
}

/**
 * 根据分类获取产品列表
 * @param {string} categoryId - 分类 ID
 * @param {string} locale - 当前语言环境
 * @returns {Array} 产品列表
 */
export function getProductsByCategory(categoryId, locale = 'zh-CN') {
  const products = getAllProducts(locale)
  if (categoryId === 'all') {
    return products
  }
  return products.filter(p => p.categoryId === categoryId)
}

/**
 * 获取相关产品（排除当前产品）
 * @param {string} currentProductId - 当前产品 ID
 * @param {string} locale - 当前语言环境
 * @param {number} limit - 返回数量限制
 * @returns {Array} 相关产品列表
 */
export function getRelatedProducts(currentProductId, locale = 'zh-CN', limit = 3) {
  const products = getAllProducts(locale)
  const currentProduct = products.find(p => p.id === currentProductId)
  
  if (!currentProduct) {
    return products.slice(0, limit)
  }
  
  // 优先返回同分类的产品
  const sameCategoryProducts = products.filter(
    p => p.id !== currentProductId && p.categoryId === currentProduct.categoryId
  )
  
  const otherProducts = products.filter(
    p => p.id !== currentProductId && p.categoryId !== currentProduct.categoryId
  )
  
  return [...sameCategoryProducts, ...otherProducts].slice(0, limit)
}

/**
 * 获取产品分类列表
 * @returns {Array} 分类列表
 */
export function getCategories() {
  return [
    { id: 'all' },
    { id: 'ai' },
    { id: 'data' },
    { id: 'assist' },
    { id: 'other' }
  ]
}

export default {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getRelatedProducts,
  getCategories
}

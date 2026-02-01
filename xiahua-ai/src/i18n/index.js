import { createI18n } from 'vue-i18n'

// 导入翻译文件
import enMessages from '../locales/en'
import zhCNMessages from '../locales/zh-CN'

// 获取用户偏好语言
const getUserLanguage = () => {
  // 优先使用用户保存的语言偏好
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    return savedLanguage
  }
  
  // 其次检查浏览器语言
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith('zh')) {
    return 'zh-CN'
  }
  
  // 默认返回英文
  return 'en'
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用组合式API模式
  locale: getUserLanguage(), // 默认语言
  fallbackLocale: 'en', // 回退语言改为英文
  messages: {
    'en': enMessages,
    'zh-CN': zhCNMessages
  },
  silentTranslationWarn: true, // 禁用翻译警告
  silentFallbackWarn: true // 禁用回退警告
})

export default i18n 
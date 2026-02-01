import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'

/**
 * Vite 插件：将 Markdown 文件转换为 JSON
 * 在构建时预处理 markdown 文件，避免浏览器端运行 gray-matter
 */
function markdownPlugin() {
  return {
    name: 'vite-plugin-markdown',
    enforce: 'pre',
    
    resolveId(source, importer) {
      // 处理 .md?raw 导入
      if (source.endsWith('.md?raw') || source.endsWith('.md')) {
        return null // 让 Vite 继续处理
      }
    },
    
    load(id) {
      // 处理 .md 文件的直接导入（带 ?raw 查询）
      if (id.includes('.md') && id.includes('?raw')) {
        const actualPath = id.split('?')[0]
        try {
          const content = fs.readFileSync(actualPath, 'utf-8')
          const { data, content: markdownContent } = matter(content)
          const htmlContent = marked(markdownContent)
          
          const result = {
            frontmatter: data,
            content: markdownContent,
            html: htmlContent
          }
          
          return `export default ${JSON.stringify(result)}`
        } catch (error) {
          console.error(`Error processing markdown file: ${id}`, error)
          return null
        }
      }
      return null
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    markdownPlugin(),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 配置 markdown 文件作为资源导入
  assetsInclude: ['**/*.md']
})

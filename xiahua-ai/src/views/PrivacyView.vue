<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            最后更新日期：{{ new Date().toLocaleDateString('zh-CN') }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. 概述</h2>
            <p class="text-gray-600 mb-4">
              欢迎使用小华同学AI（"我们"、"小华同学"或"平台"）提供的服务。我们非常重视您的隐私和个人信息保护。本隐私政策旨在帮助您了解我们如何收集、使用、存储和保护您的个人信息，以及您享有的相关权利。
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. 信息收集</h2>
            <p class="text-gray-600 mb-4">我们收集的信息包括但不限于：</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>您主动提供的信息（如注册信息、联系方式等）</li>
              <li>在使用我们的AI服务时产生的数据</li>
              <li>设备信息和日志数据</li>
              <li>您与我们的互动信息</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. 信息使用</h2>
            <p class="text-gray-600 mb-4">我们使用收集的信息用于：</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>提供、维护和改进我们的服务</li>
              <li>开发新的服务和功能</li>
              <li>保护用户和平台安全</li>
              <li>提供个性化的用户体验</li>
              <li>发送服务通知和更新</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. AI服务特别说明</h2>
            <p class="text-gray-600 mb-4">
              作为AI应用开发平台，我们特别说明：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>AI模型训练数据的使用规范</li>
              <li>AI生成内容的权属说明</li>
              <li>算法推荐的个性化设置选项</li>
              <li>用户对AI系统的控制权限</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. 信息保护</h2>
            <p class="text-gray-600 mb-4">
              我们采取严格的数据安全措施保护您的信息：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>数据加密传输和存储</li>
              <li>访问控制和审计机制</li>
              <li>定期安全评估和更新</li>
              <li>员工保密培训和管理</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. 您的权利</h2>
            <p class="text-gray-600 mb-4">
              根据相关法律法规，您享有以下权利：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>访问、更正您的个人信息</li>
              <li>删除您的账户和数据</li>
              <li>撤回同意授权</li>
              <li>投诉和举报</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. 联系我们</h2>
            <p class="text-gray-600 mb-4">
              如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>邮箱：shawn@leepm.com</li>
              <li>地址：中国，重庆</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 隐私政策页面组件逻辑
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style> 
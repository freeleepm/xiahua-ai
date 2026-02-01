<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">{{ t('terms.title') }}</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            {{ t('terms.lastUpdated') }}：{{ new Date().toLocaleDateString(locale.value === 'zh-CN' ? 'zh-CN' : 'en-US') }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. {{ t('terms.sections.acceptance.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('terms.sections.acceptance.content') }}
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. {{ t('terms.sections.description.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('terms.sections.description.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.description.items.aiDevelopment') }}</li>
              <li>{{ t('terms.sections.description.items.mediaTools') }}</li>
              <li>{{ t('terms.sections.description.items.techConsulting') }}</li>
              <li>{{ t('terms.sections.description.items.training') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. {{ t('terms.sections.userResponsibility.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ t('terms.sections.userResponsibility.intro') }}</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.userResponsibility.items.truthful') }}</li>
              <li>{{ t('terms.sections.userResponsibility.items.security') }}</li>
              <li>{{ t('terms.sections.userResponsibility.items.compliance') }}</li>
              <li>{{ t('terms.sections.userResponsibility.items.reasonable') }}</li>
              <li>{{ t('terms.sections.userResponsibility.items.respect') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. {{ t('terms.sections.aiSpecialTerms.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ t('terms.sections.aiSpecialTerms.intro') }}</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.aiSpecialTerms.items.content') }}</li>
              <li>{{ t('terms.sections.aiSpecialTerms.items.training') }}</li>
              <li>{{ t('terms.sections.aiSpecialTerms.items.algorithm') }}</li>
              <li>{{ t('terms.sections.aiSpecialTerms.items.security') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. {{ t('terms.sections.intellectualProperty.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('terms.sections.intellectualProperty.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.intellectualProperty.items.platform') }}</li>
              <li>{{ t('terms.sections.intellectualProperty.items.userContent') }}</li>
              <li>{{ t('terms.sections.intellectualProperty.items.aiContent') }}</li>
              <li>{{ t('terms.sections.intellectualProperty.items.thirdParty') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. {{ t('terms.sections.termination.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('terms.sections.termination.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.termination.items.modify') }}</li>
              <li>{{ t('terms.sections.termination.items.update') }}</li>
              <li>{{ t('terms.sections.termination.items.restrict') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. {{ t('terms.sections.disclaimer.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('terms.sections.disclaimer.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.disclaimer.items.interruption') }}</li>
              <li>{{ t('terms.sections.disclaimer.items.data') }}</li>
              <li>{{ t('terms.sections.disclaimer.items.thirdParty') }}</li>
              <li>{{ t('terms.sections.disclaimer.items.forceMajeure') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. {{ t('terms.sections.contact.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('terms.sections.contact.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('terms.sections.contact.items.email') }}：shawn@leepm.com</li>
              <li>{{ t('terms.sections.contact.items.address') }}：{{ t('footer.location') }}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
</script>

<style scoped>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style> 
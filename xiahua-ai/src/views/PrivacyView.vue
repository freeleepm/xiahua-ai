<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">{{ t('privacy.title') }}</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">
            {{ t('privacy.lastUpdated') }}：{{ new Date().toLocaleDateString(locale.value === 'zh-CN' ? 'zh-CN' : 'en-US') }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. {{ t('privacy.sections.overview.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('privacy.sections.overview.content') }}
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. {{ t('privacy.sections.collection.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ t('privacy.sections.collection.intro') }}</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('privacy.sections.collection.items.userProvided') }}</li>
              <li>{{ t('privacy.sections.collection.items.serviceData') }}</li>
              <li>{{ t('privacy.sections.collection.items.deviceInfo') }}</li>
              <li>{{ t('privacy.sections.collection.items.interaction') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. {{ t('privacy.sections.usage.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ t('privacy.sections.usage.intro') }}</p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('privacy.sections.usage.items.provide') }}</li>
              <li>{{ t('privacy.sections.usage.items.develop') }}</li>
              <li>{{ t('privacy.sections.usage.items.protect') }}</li>
              <li>{{ t('privacy.sections.usage.items.personalize') }}</li>
              <li>{{ t('privacy.sections.usage.items.communicate') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. {{ t('privacy.sections.aiSpecial.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('privacy.sections.aiSpecial.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('privacy.sections.aiSpecial.items.training') }}</li>
              <li>{{ t('privacy.sections.aiSpecial.items.content') }}</li>
              <li>{{ t('privacy.sections.aiSpecial.items.recommendation') }}</li>
              <li>{{ t('privacy.sections.aiSpecial.items.control') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. {{ t('privacy.sections.protection.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('privacy.sections.protection.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('privacy.sections.protection.items.encryption') }}</li>
              <li>{{ t('privacy.sections.protection.items.access') }}</li>
              <li>{{ t('privacy.sections.protection.items.assessment') }}</li>
              <li>{{ t('privacy.sections.protection.items.training') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. {{ t('privacy.sections.rights.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('privacy.sections.rights.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('privacy.sections.rights.items.access') }}</li>
              <li>{{ t('privacy.sections.rights.items.delete') }}</li>
              <li>{{ t('privacy.sections.rights.items.withdraw') }}</li>
              <li>{{ t('privacy.sections.rights.items.complaint') }}</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. {{ t('privacy.sections.contact.title') }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t('privacy.sections.contact.intro') }}
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>{{ t('privacy.sections.contact.items.email') }}：shawn@leepm.com</li>
              <li>{{ t('privacy.sections.contact.items.address') }}：{{ t('footer.location') }}</li>
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
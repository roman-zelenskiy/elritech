<script setup lang="ts"></script>

<template>
  <UiSectionPrimary
    :content="{
      title: ['Marketing &', 'production'],
      list: [
        [
          'Content Creation and management',
          'Marketing Research',
          'Strategy Development',
          'PR & Ourtreach',
          'Branding and Identity',
        ],
        ['E-mail marketing', 'SEO', 'Google Ads', 'Social Media Marketing', 'Target Ads'],
      ],
    }"
    class="background_section"
    :ui="{ containerContent: 'justify-center' }"
    typeText="list"
  />
</template>

<style scoped>
  .background_section {
    @apply bg-[url('/assets/images/marketing_production_mobile.webp')] bg-cover bg-no-repeat md:bg-[url('/assets/images/marketing_production.webp')];
  }
</style>

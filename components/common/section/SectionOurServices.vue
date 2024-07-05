<script setup lang="ts"></script>

<template>
  <UiSectionPrimary
    :content="{
      title: ['Our', 'services'],
      text: 'Elritech provides services for risk diversification in various markets, business process optimization, consolidation of small markets, and capital management recommendations.',
    }"
    class="background_section"
    :ui="{
      containerContent: 'justify-start mt-[130px] md:justify-center md:mt-0',
      contentText: 'max-w-[1058px]',
    }"
    typeText="text"
  />
</template>

<style scoped>
  .background_section {
    @apply bg-[url('/assets/images/our_services_mobile.webp')] bg-cover bg-no-repeat md:bg-[url('/assets/images/our_services.webp')];
  }
</style>

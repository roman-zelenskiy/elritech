<script setup lang="ts"></script>

<template>
  <UiSectionPrimary
    :content="{
      title: ['Development', 'solutions'],
      list: [
        ['Product Development', 'Custom Development', 'CRM-systems', 'E-commerce'],
        [
          'ERP-systems',
          'Business automation solutions',
          'Websites development',
          'Web-app development',
        ],
      ],
    }"
    class="background_section"
    :ui="{ containerContent: 'justify-center' }"
    typeText="list"
  />
</template>

<style scoped>
  .background_section {
    @apply bg-[url('/assets/images/development_solutions_mobile.webp')] bg-cover bg-no-repeat md:bg-[url('/assets/images/development_solutions.webp')];
  }
</style>

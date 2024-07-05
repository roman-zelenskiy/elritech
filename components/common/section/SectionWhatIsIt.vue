<script setup lang="ts"></script>

<template>
  <UiSectionPrimary
    :content="{
      title: ['What is', 'Elritech?'],
      text: 'Elritech is a Ukrainian-based, Gen Z-powered team with diverse expertise across various aspects of IT product development, execution, and production.',
    }"
    class="background_section"
    :ui="{ containerContent: 'justify-start mt-[130px] sm:justify-center md:mt-0' }"
    typeText="text"
  >
    <template #content>
      <div class="mt-[30px] xl:mt-[40px] 3xl:mt-[50px]">
        <h3 class="text-[25px] font-semibold md:text-[30px] xl:text-[45px] 3xl:text-[57px]">
          Our goal?
        </h3>
        <p class="mt-[8px] text-[14px] md:text-[18px] xl:text-[24px] 3xl:text-[28px]">
          To make the world a bit cooler.
        </p>
      </div></template
    >
  </UiSectionPrimary>
</template>

<style scoped>
  .background_section {
    @apply bg-[url('/assets/images/what_is_it_mobile.webp')] bg-cover bg-no-repeat md:bg-[url('/assets/images/what_is_it.webp')];
  }
</style>

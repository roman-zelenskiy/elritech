<script setup lang="ts">
  defineProps<{
    typeText?: 'text' | 'list';
    ui?: {
      containerContent?: string;
      contentText?: string;
    };
    content: {
      title: string[];
      text?: string;
      list?: string[][];
    };
  }>();
</script>

<template>
  <section class="flex h-svh flex-col text-white">
    <div class="container flex flex-1 flex-col">
      <div class="flex flex-1 flex-col">
        <div :class="cn('flex flex-1 flex-col justify-center', ui?.containerContent)">
          <h2
            class="text-[40px] font-bold uppercase md:text-[50px] xl:text-[70px] 3xl:text-[80px] 4xl:text-[90px] 5xl:text-[114px]"
          >
            <p v-for="(item, index) in content.title" :key="index">{{ item }}</p>
          </h2>
          <p
            v-if="typeText === 'text'"
            :class="cn('text_section mt-[30px] max-w-[766px]', ui?.contentText)"
          >
            {{ content.text }}
          </p>
          <div
            v-if="typeText === 'list'"
            class="mt-[60px] flex max-w-[1058px] flex-col justify-between gap-[30px] md:mt-[70px] md:flex-row xl:mt-[80px] 3xl:mt-[90px]"
          >
            <ul v-for="(list, ind) in content.list" :key="ind" class="list-inside list-disc">
              <li v-for="(text, index) in list" :key="index" class="text_section">{{ text }}</li>
            </ul>
          </div>
          <slot name="content" />
        </div>
        <p
          class="mb-[35px] text-[16px] font-bold uppercase md:mb-[50px] md:text-[18px] xl:mb-[70px] xl:text-[20px] 3xl:mb-[107px] 3xl:text-[22px]"
        >
          elritech //
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .text_section {
    @apply text-[14px] leading-[130%] md:text-[18px] xl:text-[24px] 3xl:text-[28px];
  }
</style>

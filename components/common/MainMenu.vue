<script setup lang="ts">
  const route = useRoute();

  const items = [
    {
      label: 'home',
      link: '/',
    },
    {
      label: 'about us',
      link: '/about',
    },
    {
      label: 'process',
      link: '/process',
    },
  ];
</script>

<template>
  <ul class="flex flex-1 flex-col lg:flex-row lg:justify-center lg:gap-[30px] 2xl:gap-[50px]">
    <li v-for="(item, index) in items" :key="index">
      <UiButton
        :class="
          cn(
            'button_opacity block border border-white px-[12px] py-[15px] lg:border-none lg:bg-transparent lg:p-0 lg:text-[19px] 2xl:text-[21px]',
            {
              'bg-[#7F2302]': route.path === item.link,
            }
          )
        "
        :to="item.label"
        >{{ item.label }}</UiButton
      >
    </li>
  </ul>
</template>

<style scoped></style>

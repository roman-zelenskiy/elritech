<script setup lang="ts">
  const isMobileMenu = ref(false);

  const switchMobileMenu = (value: boolean) => {
    isMobileMenu.value = value;
  };
</script>

<template>
  <header
    :class="
      cn('flex h-header-sm items-center bg-[#1F1F1F] text-white lg:h-header-lg', {
        'sticky top-0 z-40': isMobileMenu,
      })
    "
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <CommonButtonBurger
          :isActive="isMobileMenu"
          class="relative z-30 lg:hidden"
          @click="switchMobileMenu(!isMobileMenu)"
        />

        <UiButton
          to="/"
          class="button_opacity relative z-30 flex items-end text-[16px] md:text-[20px] lg:absolute lg:left-0 lg:top-[50%] lg:translate-y-[-50%] xl:text-[25px] 3xl:text-[33px]"
        >
          <h1>ELRITECH</h1>
          <span>//</span>
        </UiButton>

        <CommonMainMenu class="hidden lg:flex" />

        <div
          v-show="isMobileMenu"
          class="animate-fade-up animate-fade-down fixed left-0 top-0 z-20 w-full bg-[#1F1F1F] px-[10px] pb-[192px] pt-[100px] lg:hidden"
        >
          <CommonMainMenu class="gap-[15px]" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

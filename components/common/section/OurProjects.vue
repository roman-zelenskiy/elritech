<script setup lang="ts">
  const teams = [
    {
      img: '/img/size.webp',
    },
    {
      img: '/img/ukrainemart.webp',
    },
  ];
</script>

<template>
  <section class="overflow-hidden pb-[94px] pt-[71px]">
    <div class="container">
      <h2 class="text-[40px] lowercase text-white md:text-[80px] xl:text-[140px] 4xl:text-[200px]">
        our projects
      </h2>
      <div class="mt-[76px] md:mt-[80px] xl:mt-[85px]">
        <Swiper
          class="!overflow-x-visible"
          :modules="[SwiperGrid, SwiperMousewheel]"
          :spaceBetween="6"
          :mousewheel="{
            forceToAxis: true,
          }"
          :breakpoints="{
            800: {
              spaceBetween: 14,
            },
          }"
          :slidesPerView="'auto'"
          :fill="'column'"
          :rows="2"
        >
          <SwiperSlide v-for="(item, index) in teams" :key="index" class="flex !w-auto flex-col">
            <div class="">
              <img class="h-[290px] w-[200px] xl:h-[542px] xl:w-[373px]" :src="item.img" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

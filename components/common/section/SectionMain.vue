<script setup lang="ts"></script>

<template>
  <main
    class="bg_main relative flex min-h-min-height-main-section-sm flex-col lg:min-h-min-height-main-section-lg"
  >
    <video
      class="video_section !absolute left-0 top-0 hidden size-full object-cover md:block lg:block"
      loop="true"
      autoplay="true"
      muted="true"
      playsinline="true"
      preload="auto"
    >
      <source src="/img/animate_main.mp4" type="video/mp4" />
    </video>
    <video
      class="video_section !absolute left-0 top-0 size-full object-cover md:block lg:hidden"
      loop="true"
      autoplay="true"
      muted="true"
      preload="auto"
      playsinline="true"
    >
      <source src="/img/animate_main_mobile.mp4" type="video/mp4" />
    </video>
    <div class="container relative z-10 flex flex-1 flex-col">
      <div class="flex flex-1 flex-col text-white">
        <div
          class="flex flex-1 flex-col justify-end gap-[70px] pb-[10px] md:flex-row md:items-end md:justify-between md:pb-[90px] xl:pb-[140px] 3xl:pb-[182px]"
        >
          <h3
            class="max-w-[clamp(271px,50vw,484px)] text-[10px] leading-[130%] md:text-[15px] xl:text-[23px]"
          >
            Welcome to the world where technologically driven thrills await, hitting every beat and
            leaving you on the edge of your seat, craving for more.
          </h3>
          <h3 class="self-end text-[20px] md:text-[25px] xl:text-[30px] 2xl:text-[32px]">
            TECH + ART + COMMERCE
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
  .bg_main {
    /* @apply bg-[url('/assets/images/main_phone.webp')] bg-cover bg-center bg-no-repeat md:bg-none; */
    /* md:bg-[url('/assets/images/main.webp')] */
    @apply bg-[#111];
  }
  .video_section.video-js .vjs-tech {
    @apply object-cover;
  }
</style>

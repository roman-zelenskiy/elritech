<script setup lang="ts"></script>

<template>
  <div class="pb-[120px] lg:pb-[79px]">
    <div class="container">
      <div
        class="bg-[#232323] px-[14px] pb-[24px] pt-[35px] md:px-[20px] md:pb-[40px] lg:flex lg:gap-[130px] xl:px-[40px] xl:pb-[70px] xl:pt-[45px] 3xl:pb-[105px] 4xl:px-[60px]"
      >
        <div class="lg:basis-3/5">
          <h5 class="text-[clamp(30px,5vw,69px)] text-white">CONTACTS US</h5>
          <div class="mt-[35px] flex flex-col md:mt-[45px] xl:mt-[55px] 3xl:mt-[60px]">
            <div class="flex flex-col gap-[12px] xl:gap-[13px]">
              <UiInputOutline placeholder="your name" />
              <UiInputOutline placeholder="EMAIL" />
              <UiInputOutline placeholder="Company(optional)" />
            </div>
            <UiTextareaOutline class="mt-[21px] block h-[clamp(201px,20vw,220px)] xl:mt-[23px]" />
            <UiButtonOutline class="mt-[21px] block self-end xl:mt-[23px]">Send</UiButtonOutline>
          </div>
        </div>
        <PagesMainContacts class="mt-[65px] hidden lg:block lg:basis-2/5" />
      </div>
      <PagesMainContacts class="mt-[90px] lg:hidden" />
    </div>
  </div>
</template>

<style scoped></style>

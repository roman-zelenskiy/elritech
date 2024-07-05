<script setup lang="ts"></script>

<template>
  <footer
    class="bg_footer pb-[29px] pt-[25px] md:pb-[40px] md:pt-[35px] xl:pb-[65px] xl:pt-[55px] 3xl:pb-[85px] 3xl:pt-[68px]"
  >
    <div class="container">
      <div class="flex flex-col">
        <h5 class="mb-[31px] hidden text-[13px] font-medium uppercase text-white md:block">
          Our location:
        </h5>
        <h5
          class="max-w-[265px] text-[19px] font-medium leading-[130%] text-white md:max-w-[419px] md:text-[25px] xl:text-[32px] 3xl:text-[38px]"
        >
          Saint Galicia, Ukraine Lviv district
        </h5>

        <div
          class="mt-[40px] items-center justify-between md:mt-[55px] md:flex md:items-center xl:mt-[65px] 3xl:mt-[77px]"
        >
          <ul class="text_primary flex list-inside list-disc gap-[6px] md:gap-[10px] xl:gap-[16px]">
            <li class="list-none">
              <UiButton to="#contacts" class="button_opacity">Contacts</UiButton>
            </li>
            <li>
              <UiButton to="#services" class="button_opacity">Our Services</UiButton>
            </li>
            <li>
              <UiButton to="#our_team" class="button_opacity">Our team</UiButton>
            </li>
            <li>
              <UiButton to="#our_projects" class="button_opacity">Our projects</UiButton>
            </li>
          </ul>

          <div
            class="text_primary mt-[41px] flex items-center justify-between font-medium md:mt-0 md:max-w-[35%] md:flex-1"
          >
            <p>All Rights Reserved</p>

            <p>© 2024</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  @tailwind components;

  .text_primary {
    @apply text-[10px] text-white md:text-[12px] xl:text-[14px];
  }
  @layer components {
    .bg_footer_sm {
      background-image: linear-gradient(
        180deg,
        rgba(123, 63, 40, 0.99)-40%,
        rgba(166, 35, 0.19) 56%,
        rgb(0, 0, 0) 180%
      );
    }
  }
  .bg_footer {
    @apply bg_footer_sm md:bg-[url('/assets/images/bg_footer.webp')] md:bg-cover md:bg-no-repeat;
  }
</style>

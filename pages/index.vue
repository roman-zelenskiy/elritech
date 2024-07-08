<!-- eslint-disable import/no-extraneous-dependencies -->
<script setup lang="ts">
  import SectionsScroll from '../components/pages/SectionsScroll.vue';
</script>

<template>
  <div>
    <CommonSectionMain />

    <SectionsScroll />

    <div class="bg_sections relative overflow-hidden bg-[#111111]">
      <div
        class="absolute left-[18%] top-[-16%] h-full w-[211%] translate-x-[-50%] md:left-[50%] md:top-[-27%] md:size-full lg:top-[-18%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-full"
          viewBox="0 0 1920 3796"
          fill="none"
        >
          <g filter="url(#filter0_f_31_55)">
            <path
              d="M395.678 3317.05C89.7083 3327.9 384.784 3136.87 559.755 2998.18C351.798 2941.92 150.287 2855.1 189.554 2708.55C79.075 2309.91 1389.51 2012.08 299.15 1335.29C-195.932 1028 -262.596 444.246 667.914 779.89C1085.83 930.638 1247.39 840.886 1298.56 696.257C1266.34 447.025 1258.02 258.92 1258.02 258.92C1258.02 258.92 1361.32 518.866 1298.56 696.257C1366.12 1218.97 1538.77 2010.57 1960.08 1899.62C2582.29 1735.76 510.315 2390.02 667.915 2640.79C751.399 2773.63 803.295 2914.24 796.241 3032.67C808.123 3041.69 820.312 3050.89 832.757 3060.24C916.343 3077.74 972.456 3090.76 969.099 3103.29C966.142 3114.33 953.699 3125.48 934.731 3136.04C1166.47 3306.76 1434.4 3495.42 1475.48 3529.82C1539.54 3583.47 971.282 3346.48 693.997 3232.22C629.838 3281.16 532.914 3312.19 395.678 3317.05Z"
              fill="url(#paint0_radial_31_55)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_31_55"
              x="-315.254"
              y="0.820404"
              width="2650.33"
              height="3794.89"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129.05" result="effect1_foregroundBlur_31_55" />
            </filter>
            <radialGradient
              id="paint0_radial_31_55"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1082.17 2154.77) rotate(166.95) scale(802.438 1554.88)"
            >
              <stop offset="0.224811" stop-color="#111638" />
              <stop offset="0.535" stop-color="#9B3004" />
              <stop offset="0.725476" stop-color="#962C01" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <CommonSectionOurTeam id="our_team" class="relative" />
      <div class="bg_contacts">
        <CommonSectionOurProjects id="our_projects" class="relative" />
        <CommonSectionContactsUs id="contacts" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg_contacts {
    background-position-x: 45%;
    background-size: 355% 173%;
    @apply relative bg-[url(/assets/images/vector_bg_1.svg)] bg-no-repeat md:bg-cover;
  }
</style>

<script setup lang="ts">
  // import { gsap } from 'gsap';
  // import { ScrollTrigger } from 'gsap/ScrollTrigger';
  const { $gsap: gsap, $Draggable: Draggable, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    gsap.utils.toArray('.section_animate').forEach((section: any, index) => {
      gsap.to(section, {
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        },
      });
    });
  });
</script>

<template>
  <div>
    <CommonSectionWhatIsIt class="what_is_it section_animate" />
    <CommonSectionOurServices id="services" class="section_our_services section_animate" />
    <CommonSectionDevelopmentSolutions class="development_solutions section_animate" />
    <CommonSectionMarketingProduction class="sectionMarketing_production section_animate" />
  </div>
</template>

<style scoped>
  .section_animate {
    height: 100vh !important;
  }
</style>

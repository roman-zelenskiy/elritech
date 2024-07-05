<script setup lang="ts">
  const { teams } = useData();
  const { $gsap: gsap, $Draggable: Draggable, $InertiaPlugin: InertiaPlugin } = useNuxtApp();
  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_SM, BREAKPOINTS_MD, BREAKPOINTS_LG, BREAKPOINTS_XL } = useVariables();
  const radiusCarousel = ref(400);
  const isCarouselScrolling = ref(false);

  const settingCarousel = () => {
    const cardsArray = gsap.utils.toArray('.creative_pro');
    const textCardsArray = gsap.utils.toArray('.text_card');
    gsap.registerPlugin(Draggable, InertiaPlugin);

    const proxy = document.createElement('div'); // just a dummy element that'll get dragged, but we don't care about it.
    const progressWrap = gsap.utils.wrap(0, 1);
    let startProgress;
    const dragDistancePerRotation = 3000;
    const spin = gsap.fromTo(
      cardsArray,
      {
        rotationY: (i) => (i * 360) / cardsArray.length,
      },
      {
        rotationY: '-=360',
        duration: 35,
        ease: 'none',
        repeat: -1,
        transformOrigin: `50% 50% ${-radiusCarousel.value}px`,
      }
    );
    function updateRotation() {
      const p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
      spin.progress(progressWrap(p));
    }

    Draggable.create(proxy, {
      trigger: '.demo_wrapper', // activate the dragging when the user presses on the .demo_wrapper
      type: 'x', // we only care about movement on the x-axis.
      inertia: true,
      allowNativeTouchScrolling: false,
      onPress() {
        gsap.killTweensOf(spin); // if it's in the middle of animating the spin back to timeScale: 1, kill that.
        spin.timeScale(0); // stop the spin.
        startProgress = spin.progress(); // remember the current progress value because we'll make the drag relative to that.
      },
      onDrag: updateRotation,
      onThrowUpdate: updateRotation,
      onRelease() {
        if (!this.tween || !this.tween.isActive()) {
          // if the user clicked and released (no inertia flick), resume the spin
          gsap.to(spin, { timeScale: 1, duration: 1 });
        }
      },
      onThrowComplete() {
        // resume the spin after the inertia tween finishes
        gsap.to(spin, { timeScale: 1, duration: 1 });
      },
    });

    gsap.set('.demo_wrapper', {
      perspective: 1100,
      transformStyle: 'preserve-3d',
    });
  };

  const changeRadiusCarousel = () => {
    if (screenWidth.value >= BREAKPOINTS_SM) {
      radiusCarousel.value = 500;
    }
    if (screenWidth.value >= BREAKPOINTS_MD) {
      radiusCarousel.value = 600;
    }
    if (screenWidth.value >= BREAKPOINTS_LG) {
      radiusCarousel.value = 800;
    }
    if (screenWidth.value >= BREAKPOINTS_LG) {
      radiusCarousel.value = 1020;
    }
  };

  watchDeep(screenWidth, () => {
    changeRadiusCarousel();
    settingCarousel();
  });
  changeRadiusCarousel();

  onMounted(() => {
    settingCarousel();
  });
</script>

<template>
  <section class="overflow-hidden pb-[94px] pt-[51px] md:pt-[71px]">
    <div class="container">
      <h2 class="text-[40px] lowercase text-white md:text-[80px] xl:text-[140px] 4xl:text-[200px]">
        our team
      </h2>
      <div class="drag_carousel relative">
        <div class="demo_wrapper h-[342px] md:h-[500px] xl:h-[600px]">
          <div
            v-for="(item, index) in teams"
            :key="index"
            class="card_person box_person creative_pro relative flex w-[clamp(165px,20vw,300px)] flex-1 flex-col justify-end px-[13px] pt-[342px] text-white md:px-[15px] md:pt-[500px] xl:px-[25px] xl:pt-[600px] 4xl:px-[30px]"
          >
            <img class="absolute left-0 top-0 size-full object-cover" :src="item.img" alt="" />
            <div
              class="text_card absolute bottom-0 z-50 mb-[clamp(50px,20vw,90px)] flex flex-col gap-[10px]"
            >
              <!-- <div class="absolute left-0 top-0 size-full bg-black z-[-1]" /> -->
              <p class="text-[20px] md:text-[26px] xl:text-[35px] 4xl:text-[52px]">
                {{ item.name }}
              </p>
              <p class="text-[10px] md:text-[14px] xl:text-[18px] 4xl:text-[23px]">
                {{ item.position }}
              </p>
            </div>
            <!-- <div class="bg-black absolute left-0 top-0 size-full" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .demo_wrapper {
    width: auto;
    -webkit-font-smoothing: antialiased;
    margin: 50px auto 0 auto;
  }

  .box_person {
    position: absolute;
    display: inline-block;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
  }

  .creative_pro {
    /* background: transparent; */
  }
</style>

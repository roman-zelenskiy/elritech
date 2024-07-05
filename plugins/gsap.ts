import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import InertiaPlugin, { Draggable } from 'gsap/Draggable';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
      InertiaPlugin,
    },
  };
});

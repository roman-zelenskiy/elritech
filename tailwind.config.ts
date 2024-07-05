/* eslint-disable global-require */
import type { Config } from 'tailwindcss';
import VAR from './global/variables';

export default <Partial<Config>>{
  content: [
    './components//*.{js,vue,ts}',
    './layouts//*.vue',
    './pages//*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        '3xl': '120px',
      },
    },
    screens: {
      xs: `${VAR.BREAKPOINTS_XS}px`,
      sm: `${VAR.BREAKPOINTS_SM}px`,
      md: `${VAR.BREAKPOINTS_MD}px`,
      lg: `${VAR.BREAKPOINTS_LG}px`,
      xl: `${VAR.BREAKPOINTS_XL}px`,
      '2xl': `${VAR.BREAKPOINTS_2XL}px`,
      '3xl': `${VAR.BREAKPOINTS_3XL}px`,
      '4xl': `${VAR.BREAKPOINTS_4XL}px`,
      '5xl': `${VAR.BREAKPOINTS_5XL}px`,
    },
    fontFamily: {
      neutral_face: ['Neutral face'],
      primary: ['Poppins'],
    },
    extend: {
      transitionDuration: {
        hover: '200ms',
      },
      opacity: {
        hover: '60%',
      },
      spacing: {
        'header-sm': VAR.HEADER_SM,
        'header-lg': VAR.HEADER_LG,
        'min-height-section': VAR.MIN_HEIGHT_SECTION,
      },
      minHeight: {
        'min-height-main-section-sm': `calc(100svh - ${VAR.HEADER_SM})`,
        'min-height-main-section-lg': `calc(100svh - ${VAR.HEADER_LG})`,
      },
      screens: {
        'is-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [require('tailwind-hamburgers'), require('tailwindcss-animated')],
};

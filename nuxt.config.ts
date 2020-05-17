
import { Configuration } from '@nuxt/types';
import { generateMeta } from './misc/generate-meta';

const Sass = require('sass');
const Fiber = require('fibers');

const nuxtConfig: Configuration = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Xeltica.work',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...generateMeta()
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */

  styleResources: {
    scss: [
      '~assets/scss/vars.scss'
    ]
  },
  css: [
    '~assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],

  transition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (_, conf) {
      conf.loaders.scss = {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      };
    }
  },

  generate: {
    fallback: true
  }
};

export default nuxtConfig;

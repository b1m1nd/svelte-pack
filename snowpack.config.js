/** @type {import("snowpack").SnowpackUserConfig } */

const rollupPlugin = [
  'snowpack-plugin-rollup-bundle',
  {
    emitHtmlFiles: false,
    // equivalent to inputOptions.input from Rollup
    extendConfig: (config) => {
      // https://rollupjs.org/guide/en/#outputoptions-object
      config.outputOptions = {
        file: './build/dist/index.js',
        format: 'es',
        plugins: [
          // need preprocessor ?
        ],
      }
      // https://rollupjs.org/guide/en/#inputoptions-object
      config.inputOptions = {
        input: './src/index.js',
      }

      return config
    },
  },
]

module.exports = {
  mount: {
    public: '/',
    src: '/src',
  },

  plugins: [rollupPlugin, '@snowpack/plugin-svelte', '@snowpack/plugin-sass'],

  install: [
    /* ... */
  ],

  installOptions: {
    /* ... */
  },

  devOptions: {
    port: 9001,
  },

  buildOptions: {
    baseUrl: './',
    /* ... */
  },

  proxy: {
    /* ... */
  },

  alias: {
    /* ... */
  },
}

export const apps = [
  {
    name: 'nuxt-app',
    exec_mode: 'cluster',
    instances: 'max',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    env: {
      NITRO_PORT: 3000,
      NODE_ENV: 'production'
    }
  }
];
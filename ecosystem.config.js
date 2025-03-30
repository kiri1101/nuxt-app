export const apps = [
  {
    name: 'nuxt-app',
    exec_mode: 'cluster',
    instances: '1', // Start with 1 instance first
    script: 'npm',
    args: 'run start',
    cwd: '/home/forge/devfont.compbook.online',
    env: {
      NITRO_PORT: 3000,
      NODE_ENV: 'production',
      HOST: '0.0.0.0' // Important for external access
    },
    error_file: '/home/forge/.pm2/logs/nuxt-app-error.log',
    out_file: '/home/forge/.pm2/logs/nuxt-app-out.log'
  }
];
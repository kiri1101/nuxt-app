export const apps = [
  {
    name: 'nuxt-app',
    exec_mode: 'cluster',
    instances: '1',
    script: 'npm',
    args: 'run preview',  // Changed from 'start' to 'preview'
    cwd: '/home/forge/devfont.compbook.online',
    env: {
      NITRO_PORT: 3000,
      NODE_ENV: 'production',
      HOST: '0.0.0.0'
    }
  }
];
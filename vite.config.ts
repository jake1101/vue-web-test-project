import { fileURLToPath, URL } from 'url';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => {
  // 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      watch: {
        usePolling: true,
      },
      open: '/',
    },
    plugins: [vue(), VitePluginHtmlEnv()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});

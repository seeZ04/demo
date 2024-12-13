import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
import topLevelAwait from 'vite-plugin-top-level-await';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [
            react(),
            topLevelAwait(),
            legacy({
                targets: ['defaults', 'not IE 11', 'iOS 12'],
                additionalLegacyPolyfills: ['regenerator-runtime/runtime'] 
            })
        ],
        define: {
            GOOGLE_PLAY_TNEXT: JSON.stringify(env.GOOGLE_PLAY_DOWNLOAD_TNEX),
            APP_STORE_TNEX: JSON.stringify(env.APP_STORE_DOWNLOAD_TNEX),
        },
        server: {
            proxy: {
                "/api": {
                    target: env.GW_PROXY_URL,
                    changeOrigin: true,
                    secure: false,
                },
            },
            hmr: {
                overlay: false,
            },
        },
        build: {
            outDir: "dist",
            rollupOptions: {
                external: ['lodash-es'],
            }
        },
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, './src/components'),
                '@styles': path.resolve(__dirname, './src/styles'),
                '@assets': path.resolve(__dirname, './src/assets')
            },
        },
    };
});

import type { Plugin } from 'vite';

export interface VConsolePluginOptions {
    enable?: boolean;
    src?: string;
    theme?: 'light' | 'dark';
}

const defaultSrc = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js';

export default function vConsolePlugin(options: VConsolePluginOptions): Plugin {
    return {
        name: 'vite-plugin-simple-vconsole',
        enforce: 'pre',
        transformIndexHtml(html) {
            const injectTo = 'head-prepend';
            if (options.enable) {
                return [
                    {
                        tag: 'script',
                        attrs: {
                            src: options.src || defaultSrc,
                        },
                        injectTo,
                    },
                    {
                        tag: 'script',
                        children: `var vConsole = new window.VConsole({ theme: "${options.theme ?? 'light'}" });`,
                        injectTo,
                    },
                ];
            }
            return html;
        },
    };
}

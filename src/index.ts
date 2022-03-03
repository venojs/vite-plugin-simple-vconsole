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
            if (options.enable) {
                return [
                    {
                        tag: 'script',
                        attrs: {
                            src: options.src || defaultSrc,
                        },
                        injectTo: 'body',
                    },
                    {
                        tag: 'script',
                        children: `var vConsole = new window.VConsole({ theme: "${options.theme ?? 'light'}" });`,
                        injectTo: 'body',
                    },
                ];
            }
            return html;
        },
    };
}

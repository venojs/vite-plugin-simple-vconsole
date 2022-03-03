# vite-plugin-vconsole

> vConsole plugin for vite, easy to use

### Install
```shell
yarn add @veno/vite-plugin-vconsole -D
# or
npm i @veno/vite-plugin-vconsole -D
```

### Usage

```js
// vite.config.js
import vConsolePlugin from '@veno/vite-plugin-vconsole'

export default {
  plugins: [
    vConsolePlugin(),
  ]
}
```

### Options
```ts
interface VConsolePluginOptions {
    enable?: boolean;
    src?: string; // cdn url, default is https://unpkg.com/vconsole@latest/dist/vconsole.min.js
    theme?: 'light' | 'dark';
}
```

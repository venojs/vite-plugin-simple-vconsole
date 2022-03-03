# vite-plugin-simple-vconsole

> vConsole plugin for vite, easy to use

### Install
```shell
yarn add vite-plugin-simple-vconsole -D
# or
npm i vite-plugin-simple-vconsole -D
```

### Usage

```js
// vite.config.js
import vConsolePlugin from 'vite-plugin-simple-vconsole'

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

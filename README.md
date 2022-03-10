# vite-plugin-simple-vconsole [![npm](https://img.shields.io/npm/v/vite-plugin-simple-vconsole.svg)](https://npmjs.com/package/vite-plugin-simple-vconsole)

[vConsole](https://github.com/Tencent/vConsole) plugin for vite, support both `MPA` and `SPA`.

## Install
```shell
yarn add vite-plugin-simple-vconsole -D
# or
npm i vite-plugin-simple-vconsole -D
```

## Example

See [example](./example/)


```shell
cd example

# yarn
yarn
yarn dev

# pnpm
pnpm i
pnpm dev
```

## Usage

```js
// vite.config.js
import vConsolePlugin from 'vite-plugin-simple-vconsole'

export default {
  plugins: [
    vConsolePlugin({
      enable: true,
    }),
  ]
}
```

```ts
interface VConsolePluginOptions {
    enable?: boolean;
    src?: string; // cdn url, default is https://unpkg.com/vconsole@latest/dist/vconsole.min.js
    theme?: 'light' | 'dark';
}
```

## Options
### enable
- **Type:** `boolean`
- **Default:** `false`

### src
- **Type:** `string`
- **Default:** `'https://unpkg.com/vconsole@latest/dist/vconsole.min.js'`

this script will be injected to body of the entry html

### theme
- **Type:** `'light' | 'dark'`
- **Default:** `'light'`

vConosle theme



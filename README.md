# Vitest: web environments cannot import a file whose path contains a colon

```sh
pnpm install
pnpm test
```

`test/node.test.ts` passes. `test/jsdom.test.ts` and `test/happy-dom.test.ts` fail:

```
Error: Cannot find module '/src/route:name/index.ts' imported from <root>/test/jsdom.test.ts
```

Vite 8.0.16 / 7.3.5 / 6.4.3 refuse any path containing `:` while `server.fs.strict` is on
(vitejs/vite#22572). Vite's dev server still loads the same static import, because it
pre-transforms imports with `skipFsCheck`. Vitest disables pre-transforming.

Setting `server.fs.strict: false` makes all three tests pass.

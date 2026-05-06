import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./server.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: './dist/server.mjs',
  external: ['zeno-compiler-core', 'express', 'vite'], // Tells esbuild to ignore your private package
  target: 'esnext',
  sourcemap: true,
}).catch(() => process.exit(1));
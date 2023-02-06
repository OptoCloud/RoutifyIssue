const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const analyze = require('rollup-plugin-analyzer');
const css = require('rollup-plugin-css-only');
const livereload = require('rollup-plugin-livereload');
const svelte = require('rollup-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

module.exports = {
  input: 'src/main.ts',
  output: {
    sourcemap: !production,
    format: 'esm',
    name: 'app',
    dir: 'public/build/',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        sourceMap: !production,
      }),
      compilerOptions: {
        dev: !production,
      },
    }),

    css({
      output: 'bundle.css',
    }),

    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),

    commonjs({
      sourceMap: !production,
    }),

    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),

    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.mjs', '.html', '.svelte'],
      include: ['src/**', 'node_modules/svelte/**'],
    }),

    analyze({
      limit: 10,
      hideDeps: true,
      summaryOnly: true,
    }),

    !production && serve(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

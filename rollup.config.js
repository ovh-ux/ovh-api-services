const rollupConfig = require('@ovh-ux/component-rollup-config');
const globImport = require('rollup-plugin-glob-import');

const config = rollupConfig({
  input: './src/index.js',
  plugins: [
    globImport(),
  ],
});

const outputs = [config.es({
  output: {
    sourcemap: false,
  },
})];

if (process.env.BUILD === 'production') {
  outputs.push(config.cjs());
}

module.exports = outputs;

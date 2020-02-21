import rollupConfig from '@ovh-ux/component-rollup-config';
import globImport from 'rollup-plugin-glob-import';

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
  outputs.push(config.umd({
    output: {
      globals: {
        angular: 'angular',
      },
    },
  }));
}

export default outputs;

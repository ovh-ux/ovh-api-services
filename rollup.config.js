const rollupConfig = require('@ovh-ux/component-rollup-config');
const globImport = require('rollup-plugin-glob-import');

const config = rollupConfig({
    input: './src/index.js'
});

const outputs = [config.es({
    output: {
        sourcemap: false
    }
})];

if (process.env.BUILD === 'production') {
    outputs.push(config.cjs());
}

outputs.forEach(output => {
    output.plugins.push(globImport());
});

module.exports = outputs;

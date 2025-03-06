import glob from 'glob';
import path from 'path';
import fs from 'fs';
import { replace } from './rollup.mjs.config.mjs';
import babel from '@rollup/plugin-babel';

// Used only for the source code bundle.
const babelArg = process.argv.includes("--configBabel");

const files = glob.sync('./dist/raw-mjs/kendo.*.js').map(file => path.resolve(file));
const cultures = glob.sync('./dist/raw-mjs/cultures/*.js');
const messages = glob.sync('./dist/raw-mjs/messages/*.js');

const isBundle = (file) => /["']bundle all["'];/.test(fs.readFileSync(file).toString());

function genNamespace(file) {
    const basename = path.basename(file);
    const name = basename.replace(/^(?:kendo.)?([\w\.]+)*/, '$1');
    const parts = name.split('.').filter(p => p !== 'js').map(p => p.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(''));
    return 'kendo._globals.' + parts.join('');
}

const globals = files.reduce((acc, file) => {
    acc[file] = genNamespace(file);
    return acc;
}, {});

const transformCodePlugin = () => replace([
    [/(\.+\/)+(kendo[\.\w]+)/gm, '$2']
]);

/**
 * @type {import('rollup').RollupOptions}
 */
export default files.map(file => ({
    input: file,
    external: isBundle(file) ? [] : files.filter(f => f !== file),
    treeshake: false,
    output: {
        dir: './dist/raw-js',
        format: 'umd',
        globals,
        name: genNamespace(file),
        strict: false,
        exports: 'named'
    },
    plugins: [
        transformCodePlugin(),
        babelArg ? babel({ babelHelpers: 'bundled' }) : null
    ]
})).concat(cultures.map(file => ({
    input: file,
    external: files.filter(f => f !== path.resolve('./dist/raw-mjs/kendo.polyfill.js')),
    treeshake: false,
    output: {
        dir: './dist/raw-js/cultures',
        format: 'umd',
        globals,
        name: genNamespace(file),
        strict: false,
        exports: 'named'
    },
    plugins: [
        transformCodePlugin(),
        babelArg ? babel({ babelHelpers: 'bundled' }) : null
    ]
}))).concat(messages.map(file => ({
    input: file,
    external: files.filter(f => f !== path.resolve('./dist/raw-mjs/kendo.polyfill.js')),
    treeshake: false,
    output: {
        dir: './dist/raw-js/messages',
        format: 'umd',
        globals,
        name: genNamespace(file),
        strict: false,
        exports: 'named'
    },
    plugins: [
        transformCodePlugin(),
        babelArg ? babel({ babelHelpers: 'bundled' }) : null
    ]
})));
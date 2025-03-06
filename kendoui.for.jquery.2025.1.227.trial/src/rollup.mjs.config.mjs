import glob from 'glob';
import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import polyfill from 'rollup-plugin-polyfill';
import alias from '@rollup/plugin-alias';

const chunkSuffix = '.chunk.js';
const files = glob.sync('./js/kendo.*.js');
const cultures = glob.sync('./js/cultures/*.js');
const messages = glob.sync('./js/messages/*.js');

function manualChunks(id) {
    if (id.includes('@progress')) {
        const normalizedId = id.replaceAll(path.sep, '/');
        const externalName = `${normalizedId.replace(/.*\/node_modules\/@progress\/(?:kendo-)?([\w-]+).*/g, '$1')}`;
        let name = `${externalName}.cmn`;
        return name;
    }
    return null;
}

const timestamp = 1740625826;
const version = '2025.1.227';

export function replace(multiArr) {
    return {
        name: 'transform-kendo-modules',
        renderChunk(code) {
            multiArr.forEach(([regex, replacement]) => {
                code = code.replace(regex, replacement);
            });

            return {
                code: code
            };
        }
    };
}

/**
 * @type {import('rollup').RollupOptions}
 */
export default [{
    input: files,
    treeshake: false,
    external: ['./kendo.pdfjs.loader.js'],
    output: [{
        chunkFileNames: `kendo.[name]${chunkSuffix}`,
        manualChunks,
        dir: './dist/raw-mjs',
        format: 'esm',
        entryFileNames: '[name].js',
        hoistTransitiveImports: false,
    }],
    plugins: [
        nodeResolve(),
        replace([
            [/\$KENDO_VERSION/gm, version],
            [/publishDate:[ \d]+/, `publishDate: ${timestamp}`]
        ]),
        alias({
            entries: [
                { find: /^pdfjs-dist.*pdf\.(worker\.)?(min\.)?mjs/, replacement: './kendo.pdfjs.loader.js' },
            ],
            customResolver: (resId) => {
                if (resId === './kendo.pdfjs.loader.js') {
                    return resId;
                }
            }
        }),

    ]
}].concat([
    {
        input: cultures,
        external: ['../kendo.polyfill.js'],
        treeshake: false,
        output: [{
            dir: './dist/raw-mjs/cultures',
            format: 'esm',
        }],
        plugins: [
            polyfill(['../kendo.polyfill.js'])
        ]
    }, {
        input: messages,
        external: ['../kendo.polyfill.js'],
        treeshake: false,
        output: [{
            dir: './dist/raw-mjs/messages',
            format: 'esm',
        }],
        plugins: [
            polyfill(['../kendo.polyfill.js'])
        ]
    }]);

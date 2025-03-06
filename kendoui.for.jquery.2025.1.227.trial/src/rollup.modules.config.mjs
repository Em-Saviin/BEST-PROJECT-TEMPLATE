import glob from "glob";
import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import polyfill from "rollup-plugin-polyfill";
import alias from "@rollup/plugin-alias";

const chunkSuffix = ".chunk.js";
const files = glob.sync("./js/kendo.*.js");
const cultures = glob.sync("./js/cultures/*.js");
const messages = glob.sync("./js/messages/*.js");

function manualChunks(id) {
  if (id.includes( "/");
    const externalName = `${normalizedId.replace(
      /.*\/node_modules\/@progress\/(?:kendo-)?([\w-]+).*/g,
      "$1"
    )}`;
    let name = `${externalName}.cmn`;
    return name;
  }
  return null;
}

const timestamp = 1733954400;
const version = "2022.1.301";

export function replace(multiArr) {
  return {
    name: "transform-kendo-modules",
    renderChunk(code) {
      multiArr.forEach(([regex, replacement]) => {
        code = code.replace(regex, replacement);
      });

      return {
        code: code,
      };
    },
  };
}

const baseOptions = {
  chunkFileNames: `kendo.[name]${chunkSuffix}`,
  manualChunks,
  entryFileNames: "[name].js",
  hoistTransitiveImports: false,
};

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: files,
    treeshake: false,
    external: ["./kendo.pdfjs.loader.js"],
    output: [
      {
        dir: "./dist/esm",
        format: "esm",
        ...baseOptions,
      },
      {
        dir: "./dist/cjs",
        format: "cjs",
        ...baseOptions,
      },
    ],
    plugins: [
      nodeResolve(),
      replace([
        [/\$KENDO_VERSION/gm, version],
        [/publishDate:[ \d]+/, `publishDate: ${timestamp}`],
      ]),
      alias({
        entries: [
          {
            find: /^pdfjs-dist.*pdf\.(worker\.)?(min\.)?mjs/,
            replacement: "./kendo.pdfjs.loader.js",
          },
        ],
        customResolver: (resId) => {
          if (resId === "./kendo.pdfjs.loader.js") {
            return resId;
          }
        },
      }),
    ],
  },
].concat([
  {
    input: cultures,
    external: ["../kendo.polyfill.js"],
    treeshake: false,
    output: [
      {
        dir: "./dist/esm/cultures",
        format: "esm",
      },
      {
        dir: "./dist/cjs/cultures",
        format: "cjs",
      },
    ],
    plugins: [polyfill(["../kendo.polyfill.js"])],
  },
  {
    input: messages,
    external: ["../kendo.polyfill.js"],
    treeshake: false,
    output: [
      {
        dir: "./dist/esm/messages",
        format: "esm",
      },
      {
        dir: "./dist/cjs/messages",
        format: "cjs",
      },
    ],
    plugins: [polyfill(["../kendo.polyfill.js"])],
  },
]);

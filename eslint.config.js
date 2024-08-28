import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginAstro from 'eslint-plugin-astro';


export default [
  {files: ['**/*.{js,mjs,cjs,astro']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {ignores: ['dist/*', 'node_modules/*', '.github/*']}
];
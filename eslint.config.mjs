import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import json from "@eslint/json";
import css from "@eslint/css";
import * as mdx from "eslint-plugin-mdx";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));
const prettierignorePath = fileURLToPath(
    new URL(".prettierignore", import.meta.url),
);

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        ...pluginReact.configs.flat.recommended,
        settings: { react: { version: "detect" } },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            ...pluginReact.configs.flat["jsx-runtime"].rules,
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        ...reactHooks.configs.flat.recommended,
    },
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        extends: ["json/recommended"],
    },
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        extends: ["css/recommended"],
    },
    {
        ...mdx.flat,
        processor: mdx.createRemarkProcessor({
            lintCodeBlocks: true,
        }),
    },
    mdx.flatCodeBlocks,
    eslintConfigPrettier,
    includeIgnoreFile(gitignorePath),
    includeIgnoreFile(prettierignorePath),
]);

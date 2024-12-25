import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import _import from "eslint-plugin-import";
import tseslint from 'typescript-eslint';
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default tseslint.config({
    ignores: ["**/.husky", "**/dist", "**/eslint.config.mjs", "**/postcss.config.ts", "**/tailwind.config.ts"],
}, ...fixupConfigRules(compat.extends(
        // "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
    )), {
    plugins: {
        "react-refresh": reactRefresh,
        "simple-import-sort": simpleImportSort,
        // '@typescript-eslint': tseslint.plugin,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "no-var": "error",
        semi: [2, "always"],
        quotes: [2, "double"],

        "prettier/prettier": ["error", {
            endOfLine: "auto",
            trailingComma: "es5",
        }],

        "@typescript-eslint/indent": 0,
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "react/display-name": "off",
        "react/jsx-filename-extension": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "off",
        "react-refresh/only-export-components": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
    },
}, {
    files: ["**/src/**/*.js", "**/src/**/*.ts", "**/src/**/*.tsx"],

    rules: {
        "simple-import-sort/imports": ["error", {
            groups: [
                ["^react$", "^next", "^[a-z]"],
                ["^@"],
                ["^~"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.s?css$"],
                ["^\\u0000"],
            ],
        }],
    },
});
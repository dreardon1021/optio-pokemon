// note there are two separate configs : parsing .ts/tsx with override @typescript-eslint/parser
module.exports = {
  root: true,

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier/react",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  env: { browser: true, es6: true, node: true },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-uses-react": 1,
    // indent: ["error", 2],
  },
  plugins: ["react", "react-hooks"],
  settings: {
    react: { version: "detect" },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: { browser: true, es6: true, node: true },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/react",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
      rules: {
        "linebreak-style": ["error", "unix"],
        // quotes: ["error", "double"],
        "comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
        "react/jsx-uses-react": 1,
        "react/prop-types": "off",
        // indent: ["error", 2],
      },
      settings: {
        react: { version: "detect" },
      },
    },
  ],
};

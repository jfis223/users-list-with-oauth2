module.exports = {
  "plugins": ["@typescript-eslint", "jsx-a11y", "react", "react-hooks", "unused-imports"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "rules": {
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "jsx-a11y/click-events-have-key-events": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "generic",
        "readonly": "generic"
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
      ReactDom: false
    },
    "rules": {
      "no-console": "off",
      "no-unused-vars": "off",
      "no-debugger": "off"

    }
};

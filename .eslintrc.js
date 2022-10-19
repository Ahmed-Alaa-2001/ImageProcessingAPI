// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true,
//         "node":true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "overrides": [
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "@typescript-eslint"
//     ],
//     "rules": {
//         '@typescript-eslint/no-var-requires': 0,
//         "no-var": 0,//"error"
//         'no-console': 0,
//         'prefer-const': 'error',
//     }
// }
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        [ "disr/**/*.js" ],
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-empty-function": "off",
        "no-var": "error",//"error"
        'no-console': 0,
        'prefer-const': 'error',
    }
}

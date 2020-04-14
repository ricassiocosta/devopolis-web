module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-await-in-loop': 'error',
    'quote-props': 0,
    'dot-notation': 'warn',
    'prefer-const': 'warn',
    'no-return-await': 'error',
    'require-await': 'error',
    'class-methods-use-this': 'warn',
    'consistent-return': 'warn',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    eqeqeq: 'error',
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: true,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    quotes: ['error', 'single'],
    curly: ['error', 'all'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }]
  }
}

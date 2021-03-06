module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import', 'import-alias', 'jsx-a11y', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/no-array-index-key': 'off',
        'react/jsx-filename-extension': 'off'
      }
    },
    {
      files: ['./app/routes/**/*.{ts,tsx}', './app/**/*.server.ts'],
      rules: {
        '@typescript-eslint/no-throw-literal': 'off'
      }
    },
    {
      files: ['./prisma/*.ts'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    curly: ['error', 'multi-line'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': 0,
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: 1
      }
    ],
    'import/named': 'warn',
    'import/newline-after-import': 'error',
    'import/no-cycle': [
      'warn',
      {
        maxDepth: 5
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/no-named-as-default': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before'
          },
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/prefer-default-export': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'indent-legacy': 'off',
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],
    'keyword-spacing': ['error', { after: true, before: true }],
    'max-depth': ['warn', 3],
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    'max-lines-per-function': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-params': ['error', 4],
    'no-console': ['error'],
    'no-else-return': 0,
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      }
    ],
    'no-undef': 'off',
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'no-trailing-spaces': 'error',
    'object-curly-newline': 0,
    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: true,
        arraysInObjects: true
      }
    ],
    'padded-blocks': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-numeric-literals': 'off',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [
      2,
      2,
      {
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 2,
        when: 'multiline'
      }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: true
      }
    ],
    'react/jsx-tag-spacing': 'error',
    'react/jsx-wrap-multilines': 0,
    'react/no-string-refs': 0,
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 0,
    'react/no-unused-state': 0,
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    semi: ['error', 'always']
  }
};

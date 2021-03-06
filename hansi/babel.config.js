module.exports = {
  'presets': [
    [
      '@babel/env',
      {
        'targets': {
          'browsers': [
            '> 1%',
            'last 2 versions',
            'ie >= 11'
          ]
        },
        'modules': false,
        'useBuiltIns': 'usage',
        'corejs': '2'
      }
    ]
  ],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-object-rest-spread', { 'loose': true, 'useBuiltIns': true }], // babel-preset-env已依赖安装
    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
  ],
  'env': {
  }
}
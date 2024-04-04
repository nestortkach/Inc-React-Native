module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hoc': './src/HOC',
          '@hooks': './src/shared/hooks',
          '@shared': './src/shared',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@localization': './src/localization',
          '@services': './src/services'
        },
        extensions: ['.jsx', 'js']
      }
    ],
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false
      }
    ]
  ]
};

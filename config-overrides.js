const { addBabelPlugin, override } = require('customize-cra');
// o AddBabelPlugin uma função que adiciona um plugin do babel dentro das configurações do react

module.exports = override(
  // com override estou substituindo configurações do create-react-app
  addBabelPlugin([
    // primeira posição o nome do plugin
    'babel-plugin-root-import',
    // segundo posição as configurações
    {
      // ~ como ../../
      rootPathSuffix: 'src',
    },
  ])
);

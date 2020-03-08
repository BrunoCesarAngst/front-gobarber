# Front-End do GoBarber

## Estrutura de navegação

```bash
~/front$ yarn add react-router-dom
~/front$ yarn add history

src
├── App.js
├── index.js
├── pages
│   ├── Dashboard # lista os agendamentos do prestador de serviço
│   │   └── index.js
│   ├── Profile
│   │   └── index.js
│   ├── SignIn # tela de autenticação do usuário
│   │   └── index.js
│   └── SignUp # tela de cadastro do usuário
│       └── index.js
├── routes # aqui temos as rotas
│   └── index.js
└── services
    └── history.js # para navegar o usuário de todas as telas e do redux
```

## configurando o Reactotron

```bash
~/front$ yarn add reactotron-react-js

src
├── App.js
├── config
│   └── ReactotronConfig.js
├── index.js
...
```

E importar reactotron no arquivo App.js

## rotas privadas

Criamos o nosso próprio componente Route.js em Routes e ao invés de importar o Route de react-router-dom, vamos usar a nossa próprio Route.js

Controlando se o usuário está logado/autenticado ou não para ele acessar uma rota ou outra baseado no estado de autenticação

```bash
~/front$ yarn add prop-types

src
...
├── routes
│   ├── index.js
│   └── Route.js
...
```

## Layouts por página e estilos globais

```bash
~/front$ yarn add styled-components
```

## Utilizando Root Import

Alterando a forma de navegação nas rotas das pastas e arquivos, reconfigurando o babel no parte create-react-app para transpilar isso de outra forma.

```bash
~/front$ yarn add customize-cra react-app-rewired -D
# o AddBabelPlugin uma função que adiciona um plugin do babel dentro das configurações do react, com override estou substituindo configurações do create-react-app
~/front$ yarn add babel-plugin-root-import -D
# para resolver e avisar o eslint que estamos usando um padrão novo
~/front$ yarn add eslint-import-resolver-babel-plugin-root-import -D

.
├── ./commitlint.config.js
├── ./config-overrides.js # criamos essa configuração que adiciona o plugin
├── ./jsconfig.json # criamos essa configuração que habilita o plugin no eslint
├── ./mux-gobarber.yml
├── ./nohup.out
├── ./package.json
├── ./public
│   └── ./public/index.html
├── ./README.md
├── ./src
│   ├── ./src/App.js
│   ├── ./src/config
│   │   └── ./src/config/ReactotronConfig.js
│   ├── ./src/index.js
│   ├── ./src/pages
│   │   ├── ./src/pages/Dashboard
│   │   │   └── ./src/pages/Dashboard/index.js
│   │   ├── ./src/pages/_layouts
│   │   │   ├── ./src/pages/_layouts/auth
│   │   │   │   ├── ./src/pages/_layouts/auth/index.js
│   │   │   │   └── ./src/pages/_layouts/auth/styles.js
│   │   │   └── ./src/pages/_layouts/default
│   │   │       ├── ./src/pages/_layouts/default/index.js
│   │   │       └── ./src/pages/_layouts/default/styles.js
│   │   ├── ./src/pages/Profile
│   │   │   └── ./src/pages/Profile/index.js
│   │   ├── ./src/pages/SignIn
│   │   │   └── ./src/pages/SignIn/index.js
│   │   └── ./src/pages/SignUp
│   │       └── ./src/pages/SignUp/index.js
│   ├── ./src/routes
│   │   ├── ./src/routes/index.js
│   │   └── ./src/routes/Route.js
│   ├── ./src/services
│   │   └── ./src/services/history.js
│   └── ./src/styles
│       └── ./src/styles/global.js
└── ./yarn.lock
```

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

## Layouts por página

```bash
~/front$ yarn add styled-components
```

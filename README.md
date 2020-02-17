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

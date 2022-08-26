## 💻 Projeto City Commerce API
Desenvolvimento de uma aplicação no backend com Nodejs, utilizando o Prisma ORM, para manipulação de dados.  Nesta aplicação, temos como finalidade o cadastro de pontos comerciais do Baixo-Tocantins, além de outras funcionalidades como, listagem de lojas, cadastro de produtos e detalhes de uma loja.  Iremos utilizar Typescript e Express.

## 🚀 Tecnologias e Comandos de Execução

---

```cl
  💻 Comando para criar o projeto
  - ✨ yarn init -y


  🛠️ Comando para instalar o typescript
  - ✨ yarn add typescript -D


  🛠️ Comando para criar o arquivo de configuração do typescript
  - ✨ yarn tsc --init


  🛠️ Biblioteca para o node entender código typescript e executar como javascript
  - ✨ yarn add ts-node -D


  🛠️ Biblioteca para executar o servidor
  - ✨ yarn add ts-node-dev -D


  🛠️ Biblioteca para requisições, rotas e URLs, entre outras funcionalidades
  - ✨ yarn add express
  - ✨ yarn add @types/express -D


  🛠️ Biblioteca para adicionar o prisma no projeto
  - ✨ yarn add prisma
  - ✨ yarn add prisma -D


  🛠️ Instalar prisma client
  - ✨ yarn add @prisma/client


  🛠️ Inicializar o prisma
  - ✨ yarn prisma init


  🛠️ Biblioteca para o prisma formatar o schema
  - ✨ yarn prisma format


  🛠️ Comando para criar a migration
  - ✨ yarn prisma migrate dev


  🛠️ Biblioteca para tratar errors
  - ✨ yarn add express-async-errors


  🛠️ Biblioteca para upload de imagem
  - ✨ yarn add multer
  - ✨ yarn add @types/multer -D
```

## 🛠️ Configurações Para Executar o servidor
```cl
  Para criar um script de execução do servidor no package.json, é necessário passar três comandos.
  
  ## impede que o prisma pare o servidor sempre que houver uma modificação, portanto será responsável por reiniciar o servidor, sempre que algo novo for salvo
  ✨ --exit-child

  ## permite que o servidor execute com agilidade, pois ignora validações desnecessárias
  ✨ --transpile-only

  ## ignora a pasta node_modules
  ✨ --ignore-watch

  Exemplo de script
  "scripts": {
    "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
  },
```

<br />

<div align="center">
  <small>Desenvolvido por Laciene Melo - Junho/2022</small>
</div>

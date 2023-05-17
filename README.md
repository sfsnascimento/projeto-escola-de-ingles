Aplicação desenvolvida em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de alunos de uma escola de inglês. Utilizando o mysql como banco de dados.

### Instruções para rodar o projeto:

1. Clone o repositório
  * `git@github.com:sfsnascimento/projeto-escola-de-ingles.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd orm-sequelize`

2. Instale as dependências
  * `npm install`

3. Crie um arquivo .env na raiz do projeto e coloque as informações de acesso ao banco de dados:
  *HOSTNAME=seu host
  *MYSQL_USER=seu usuário
  *MYSQL_PASSWORD=sua senha
  * `npm start`

4. Inicie a aplicação
  * `npm start`

5. Para criar, migrar e popular o banco utilize os seguintes comandos:
  * `npx sequelize-cli db:create`
  * `npx sequelize-cli db:migrate`
  * `npx sequelize-cli db:seed:all`

6. Para excluir o banco utilize o seguinte comando;
  * `npx sequelize-cli db:drop`
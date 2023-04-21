const express = require('express');
const Sequelize = require('sequelize');

const app = express();

// Crie uma conexão com o banco de dados MySQL usando Sequelize
const sequelize = new Sequelize('mysql://root:jGqabMzaBB3GVogy47cl@containers-us-west-206.railway.app:7652/railway', {
  host: 'localhost',
  dialect: 'mysql'
});

// Teste a conexão com o banco de dados
sequelize.authenticate().then(() => {
  console.log('Conexão bem sucedida!');
}).catch(error => {
  console.error('Não foi possível conectar ao banco de dados:', error);
});

// Rota raiz
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Inicie o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

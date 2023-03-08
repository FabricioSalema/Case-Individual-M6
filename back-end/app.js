const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes/routes');
const connection = require("./database/database");

connection.sync({ force: false }).then(() => console.log('Banco Rodando!!'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// rotas
app.use('/', routes);

app.listen(5656, () => {
  console.log('Servidor rodando em http://localhost:5656');
});
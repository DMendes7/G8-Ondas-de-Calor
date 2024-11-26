const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

// Cria o servidor
const server = jsonServer.create();

// Configura o caminho para o db.json
const router = jsonServer.router(path.join(__dirname, '../db/db.json'));

// Middlewares
server.use(cors());
server.use(jsonServer.defaults());

// Configura as rotas
server.use('/api', router);

// Define a porta
const PORT = process.env.PORT || 3001;

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

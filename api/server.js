const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json"); // Caminho correto
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router); // Define a rota base como /api

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`JSON Server está rodando em http://localhost:${port}/api`);
});

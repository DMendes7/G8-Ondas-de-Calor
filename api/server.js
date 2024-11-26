const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json"); // Caminho correto para o arquivo
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router); // Define a rota base como /api
server.listen(3001, () => {
    console.log("JSON Server está rodando em http://localhost:3001");
});

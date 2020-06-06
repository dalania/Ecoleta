const express = require ("express")
const server = express()
const nunjucks = require("nunjucks") // utilizando template engine


server.use(express.static("public")) // configurar pasta public

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da minha aplicação
//página inicial
//req: requisição
//res: resposta do servidor

server.get("/", (req, res) =>{ // rota para aparecer na tela a pagina principal
    return res.render("index.html", {title: "Um titulo"})
 
})


server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) =>{
    return res.render("search-results.html")
})
server.listen(3000)
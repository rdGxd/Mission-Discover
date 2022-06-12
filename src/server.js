const express = require('express') // Importa o módulo express
const route = require('./route') // Importa o arquivo de rotas
const path = require('path') // Importa o módulo path

const server = express() // Cria um objeto que será exportado

server.set('view engine', 'ejs') // Define o motor de renderização

server.use(express.static("public")) // Define o caminho para a pasta public

server.set('views', path.join(__dirname, 'views')) // Define o caminho para a pasta views

server.use(express.urlencoded({extended: true})) // Define o módulo de parse de requisições

server.use(route) // Usa o arquivo de rotas

server.listen(3000, () => console.log("RODANDO")) // Inicia o servidor
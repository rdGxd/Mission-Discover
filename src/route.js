const express = require('express') // Importa o módulo express
const QuestionController = require('./controllers/QuestionController') // Importa o arquivo de controle de perguntas
const RoomController = require('./controllers/RoomController') // Importa o arquivo de controle de salas

const route = express.Router() // Cria um objeto que será exportado

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) // Renderiza a pagina de entrada
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'})) // Renderiza a pagina de criação de senha
route.post('/create-room', RoomController.create) // Cria uma sala
route.get('/room/:room', RoomController.open) // Abre uma sala
route.post('/enterroom', RoomController.enter) // Entra na sala

route.post('/question/create/:room', QuestionController.create) // Cria uma pergunta
route.post('/question/:room/:question/:action', QuestionController.index) // Responde uma pergunta

module.exports = route // Exporta o objeto route

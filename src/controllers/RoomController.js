const Database = require("../db/config") // Importa o arquivo de configuração do banco de dados

module.exports = { // Cria um objeto que será exportado
  async create(req, res) { // Cria uma função que será exportada
    const db = await Database() // Pega o banco de dados
    const pass = req.body.password // Pega a senha do formulário
    let roomId // Pega o id da sala
    let isRoom = true // Define se a sala existe
    while (isRoom) { // Enquanto a sala existir
      /* Gera o numero da sala */
      for (var i = 0; i < 6; i++) { // Loop para gerar o numero da sala
        i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
          roomId += Math.floor(Math.random() * 10).toString() // Adiciona o numero na sala
      } // Fim do loop

      /* Verificar se esse numero ja existi */
      const roomsExistIds = await db.all(`SELECT id FROM rooms`) // Pega todos os ids das salas
      isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId) // Verifica se o numero ja existe

      if (!isRoom) { // Se o numero nao existir
        /* Inseri a sala no banco */
        await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VAlUES (
                    ${parseInt(roomId)},
                    "${pass}"
                )`) // Insere a sala no banco
      } // Fim do if
    } // Fim do while

    await db.close() // Fecha o banco de dados

    res.redirect(`/room/${roomId}`) // Redireciona para a sala
  }, // Fim da função create

  async open(req, res) { // Cria uma função que será exportada
    const db = await Database() // Pega o banco de dados
    const roomId = req.params.room // Pega o id da sala
    const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`) // Pega todas as perguntas da sala
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`) // Pega todas as perguntas da sala
    let isNoQuestions // Define se existe perguntas

    if (questions.length == 0) { // Se nao existir perguntas
      if (questionsRead.length == 0) { // Se nao existir perguntas lidas
        isNoQuestions = true // Define que nao existe perguntas
      }
    } // Fim do if

    res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions }) // Renderiza a pagina de sala
  },  // Fim da função open

  enter(req, res) { // Cria uma função que será exportada
    const roomId = req.body.roomId // Pega o id da sala

    res.redirect(`/room/${roomId}`) // Redireciona para a sala
  } // Fim da função enter
} // Fim do objeto module.exports
const Database = require("./config") // Importa o arquivo de configuração do banco de dados

const initDb = { // Cria um objeto que será exportado
  async init() { // Cria uma função que será exportada
    const db = await Database() // Pega o banco de dados

    await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`); // Cria a tabela rooms

    await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`); // Cria a tabela questions

    await db.close() // Fecha o banco de dados
  } // Fim da função init
} // Fim do objeto initDb

initDb.init(); // Chama a função init

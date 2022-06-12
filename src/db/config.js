const sqlite3 = require("sqlite3"); // Importa o módulo sqlite3
const { open } = require("sqlite") // Importa o módulo sqlite

module.exports = () => // Cria um objeto que será exportado
    open({ // Cria uma função que será exportada
        filename: './src/db/rocketq.sqlite', // Define o caminho do banco de dados
        driver: sqlite3.Database, // Define o driver do banco de dados
    }); // Exporta o módulo open

//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações de bando de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


//utilizar o objeto de banco de dados, para nossas operações
// db.serialize(() => {
//     //criar uma tabela com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?)
    
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "n° 260",
//         "Santa Catarina",
//         "Rio do Su",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }
        
//         console.log("Cadastro com sucesso")
//         console.log(this)
    
//     }
//     db.run(query, values, afterInsertData)

    //consultar os dasos da tabela
//     db.all(`SELECT * FROM places`, function(err,rows) {
//        if(err) {
//            return console.log(err)
//        }
//        console.log("Aqui estão seus registros:")
//        console.log(rows)
//    })

//deletar um dado da tabela
//     db.run(`DELETE FROM places`, function(err) {
//       if(err) {
//            return console.log(err)
//        }

//        console.log("Registro deletado com sucesso")

// })



//})

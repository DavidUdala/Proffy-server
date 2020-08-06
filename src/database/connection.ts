import knex from 'knex'
import path from 'path'


//migration - controla versão do banco
const db = knex({
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault:true,

})

export default db;
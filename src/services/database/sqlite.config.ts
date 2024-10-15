import {createTable, initialData} from '@/services/database/seed'
import {Database, OPEN_READWRITE} from 'sqlite3'

const db = new Database('./database.db', OPEN_READWRITE, dbCallback)

function dbCallback(err: Error | null) {
  if (err) return console.error('🔴 sqlite: ', err.message)
  console.log('🔵 Connected to the in-memory SQlite database.')
}

db.serialize(() => {
  db.run(createTable)
  db.run(initialData)
})

export {db}

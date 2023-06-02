import express from 'express'
import cors from 'cors'
import db from './db/db_connection.js'
import routes from './routes/routes.js'

// Express setup and config
const app = express()
app.use(express.json())

// Enable CORS
app.use(cors());

// Env vars
const PORT = process.env.PORT || 3000;

//Why on earth did this fix this error? MongooseError: Operation `usercredentials.deleteMany()` buffering timed out after 10000ms
db.on('connected', async () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
  });

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Node server running on port:${PORT}`)
})
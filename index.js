import express from 'express'
import cors from 'cors'
import compression from 'compression'
import dotenv from 'dotenv'
import library from './routes/library.route'
import helmet from 'helmet'

const app = express()
const port = process.env.PORT
dotenv.config()

app.use(helmet())
app.use(cors())
app.use(compression())
app.use('/api', library)


app.listen(port)
  .once('listening', () => console.log(`Server listening on port localhost:${port}`))
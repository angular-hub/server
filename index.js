import express from 'express'
import cors from 'cors'
import compression from 'compression'
import dotenv from 'dotenv'
import helmet from 'helmet'
import mongoose from 'mongoose'
import { log } from 'console'
import libraryRoutes from './routes/library.route'


const app = express()
const port = process.env.PORT || 9000

dotenv.config()

app.use(helmet())
app.use(cors())
app.use(compression())
app.use('/api', libraryRoutes)
app.use('/categories')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
mongoose.connection.on('connection', () => log('DB connected'))

app.listen(port)
  .once('listening', () => console.log(`Server listening on port localhost:${port}`))
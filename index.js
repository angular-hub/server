import express from 'express'
import cors from 'cors'
import compression from 'compression'


app.use(cors())
app.use(compression())
const app = express()
const port = process.env.PORT



app.listen(port)
  .once('listening', () => console.log(`Server listening on port localhost:${port}`))
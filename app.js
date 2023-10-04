import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { router as authRouter } from './routes/authRoutes.js'

const { PORT } = process.env
const app = express()

const upload = multer({ storage: multer.memoryStorage() })

app.use(cors())
app.use('/api/auth', upload.none(), authRouter)

app.listen(PORT)

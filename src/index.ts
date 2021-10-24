import express from 'express'
import cors from 'cors'
import User from "./route/UserRouter"

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.use(User)

app.listen(PORT, () => console.log(`Running in localhost:${PORT}`))
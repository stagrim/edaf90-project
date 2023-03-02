import express, { Application } from "express";
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 8493

const app: Application = express()

interface Recipe {
  title: string,
  img: string,
  description: string,
  time: number,
  difficulty: 1 | 2 | 3,
  ingredients: string[],
  steps: string[]
}

const recipes: Recipe[] = fs.readdirSync('./json')
  .filter(f => path.extname(f) === '.json')
  .map(f => JSON.parse(fs.readFileSync(path.join('./json', f)).toString()))

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/static', express.static('static'))

app.get("/", async (_req, res) => {
  res.send(recipes)
})

app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
})

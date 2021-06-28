import express from 'express'
import alert from 'awesome-cli-alerts'
import { go } from './index.js'

const app = express()
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api running')
})

app.get(`/product/`, async (req, res) => {
  const { name } = req.body
  const item = await go(`https://www.amazon.com/s?k=${name}&ref=nb_sb_noss`)
  res.send(item)
})

app.listen(PORT, () => {
  alert({ type: 'success', msg: `Server running on http://localhost:${PORT}`, name: 'Server' })
})

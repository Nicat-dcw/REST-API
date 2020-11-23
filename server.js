require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Veri Alanına Bağlanıldı'))

app.use(express.json())

const sistemRouter = require('./routes/sistem')
app.use('/sistem', sistemRouter)

app.listen(3000, () => console.log('Sunucu Başlatıldı'))

const express = require('express')
const app = express()
const port = 3000

app.use('/', function (req, res, next) {
  const startTime = new Date()
  const year = startTime.getFullYear()
  const month = startTime.getMonth() + 1
  const date = startTime.getDate()
  const hour = startTime.getHours()
  const min = startTime.getMinutes()
  const sec = startTime.getSeconds()
  const ms = startTime.getMilliseconds()

  const start = `${year}-${month}-${date} ${hour}:${min}:${sec}`
  const from = `${req.method} from ${req.originalUrl}`

  res.on('finish', () => {
    const finish = new Date().getMilliseconds()
    const within = finish - ms
    console.log(`${start} | ${from} | total time: ${within}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
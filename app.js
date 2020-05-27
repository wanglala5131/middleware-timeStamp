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

  // //日期的另一種寫法，上面那一串可改成下面這樣
  // const option = {       //oprtion要有timeZone(e.g.zh-TW)
  //   hour12: false,       //24小時制
  // }
  // const startTime2 = new Date().toLocaleString('zh-TW', option)  //en-TW會變成/分隔
  // console.log(startTime2)  //e.g. 2020-5-27 12:15:39



  // //利用console.time和console.timeEnd計算經過時間 
  // //from 同學作業 https://github.com/Mia-Chen-taiwan/middleware-practice/blob/master/app.js
  // console.time(`${startTime.toLocaleString()} | ${from} | total time`)
  // res.on('finish', () => {
  //   console.timeEnd(`${startTime.toLocaleString()} | ${ from} | total time`)
  // })

  res.on('finish', () => {
    const finish = new Date()
    const within = finish - startTime
    //console.timeEnd(`${startTime.toLocaleString()} | ${ from} | total time`)
    //console.log(`${start} | ${from} | total time: ${within}ms`)
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
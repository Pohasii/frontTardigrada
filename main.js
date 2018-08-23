const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Для старта перейдите на /index.html')
})

app.use(express.static('public'))
// app.get('/index.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.html" )
// })

const port = 8080

app.listen(port, function () {
  console.log(`start app listening on port ${port}!`)
})


  // send the rendered view to the client
  // res.render('index')

  // if a callback is specified, the rendered HTML string has to be sent explicitly
  // res.render('index', function(err, html) {
  //   res.send(html)
  // })
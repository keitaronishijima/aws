const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secret', (req, res) => {
    res.send('beist')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

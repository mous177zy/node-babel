const express = require('express')
const morgan = require('morgan')

const PORT = 3000
const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Nice Work Babel!')
})

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(express.urlencoded())

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// custom middleware for all
// app.use((req, res, next) =>
// {
//   next();
//   })
// app.use(bodyParser.raw())
app.get('/', (req, res) => {
  res.send('Hello world!')
})

// addition api
app.post('/add', (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  console.log(req.body)
  // console.log(typeof req.body.num2)
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    const data = {
      status: 'error',
      message: 'Invalid data types',
    }
    res.send(data)
  }
  if (num1 < -1000000 || num2 < -1000000) {
    const data = {
      status: 'error',
      message: 'Underflow',
    }
    res.send(data)
  }
  if (num1 > 1000000 || num2 > 1000000) {
    const data = {
      status: 'error',
      message: 'Overflow',
    }
    res.send(data)
  } else {
    const data = {
      status: 'success',
      message: 'the sum of given two numbers',
      sum: num1 + num2,
    }
    res.send(data)
  }
})

// substract api
app.post('/sub', (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  const sub = num1 - num2
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    const data = {
      status: 'error',
      message: 'Invalid data types',
    }
    res.send(data)
  }
  if (num1 < -1000000 || num2 < -1000000) {
    const data = {
      status: 'error',
      message: 'Underflow',
    }
    res.send(data)
  }
  if (num1 > 1000000 || num2 > 1000000) {
    const data = {
      status: 'error',
      message: 'Overflow',
    }
    res.send(data)
  } else {
    const data = {
      status: 'success',
      message: 'the difference of given two numbers',
      sum: num1 - num2,
    }
    res.send(data)
  }
})
// multiplication api
app.post('/multiply', (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2

  if (typeof num1 === 'string' || typeof num2 === 'string') {
    const data = {
      status: 'error',
      message: 'Invalid data types',
    }
    res.send(data)
  }
  if (num1 < -1000000 || num2 < -1000000) {
    const data = {
      status: 'error',
      message: 'Underflow',
    }
    res.send(data)
  }
  if (num1 > 1000000 || num2 > 1000000) {
    const data = {
      status: 'error',
      message: 'Overflow',
    }
    res.send(data)
  } else {
    const data = {
      status: 'success',
      message: 'The product of given numbers',
      result: num1 * num2,
    }
    res.send(data)
  }
})

app.post('/divide', (req, res) => {
  const num1 = req.body.num1
  const num2 = req.body.num2
  if (num2 === 0) {
    const data = {
      status: 'error',
      message: 'Cannot divide by zero',
    }
    res.send(data)
  }
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    const data = {
      status: 'error',
      message: 'Invalid data types',
    }
    res.send(data)
  }
  if (num1 < -1000000 || num2 < -1000000) {
    const data = {
      status: 'error',
      message: 'Underflow',
    }
    res.send(data)
  }
  if (num1 > 1000000 || num2 > 1000000) {
    const data = {
      status: 'error',
      message: 'Overflow',
    }
    res.send(data)
  } else {
    const data = {
      status: 'success',
      message: 'The division of given numbers',
      result: num1 / num2,
    }
    res.send(data)
  }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app

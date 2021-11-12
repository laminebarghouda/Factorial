const express = require('express')
const app = express()
const port = 3000

// Declaring factorial arrow function
const factorial = n => (n <= 0) ? 1: n * factorial(n - 1);

// Handling incoming request
app.get('/:number', (req, res) => {
  const number = Number(req.params.number);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({"factorial": factorial(number)})
})

app.get('*', (req, res) => {
  res.sendStatus('500');
});

// Launching server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
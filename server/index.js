const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const processGame = require('./processGame.js')

app.post('/api/process-game', bodyParser.json(), (req, res) => res.send(processGame(req.body)))

app.listen(3001, () => console.log('Server is listening on port 3001'))

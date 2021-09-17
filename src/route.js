const express = require('express')
const questionController = require('./controllers/QuestionController')
// const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/room/:room', (req, res) => res.render("room"))

route.get('/create-pass', (req, res) => res.render("create-pass"))

route.post('/room/:room/:question/:action', questionController.index)

// route.post('/room/create-room', RoomController.create)

module.exports = route
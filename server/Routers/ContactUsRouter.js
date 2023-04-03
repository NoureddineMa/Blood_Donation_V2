const express = require('express')
const app = express()

const {
    CreateMessage,
    DeleteMessage,
    GetAllMessages
} = require('../Controllers/ContactController')


app.post('/message',CreateMessage)
app.delete('/message/:id',DeleteMessage)
app.get('/messages', GetAllMessages)


module.exports = app;
const express = require('express')
const app = express()

const {
    CreateMessage,
    DeleteMessage,
    GetAllMessages
} = require('../Controllers/ContactController')
const verifyToken = require('../Middlewares/verifyToken')
const verifyRole = require('../Middlewares/AdminMiddelware')


app.post('/message',CreateMessage)
app.delete('/message/:id',verifyToken,DeleteMessage)
app.get('/messages',verifyToken,verifyRole,GetAllMessages)


module.exports = app;
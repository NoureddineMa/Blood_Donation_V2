require('dotenv').config();
const express = require('express');
const app = express();
const initDb = require('./Config/initDb')
const AuthRouter = require('./Routers/AuthRouter')
initDb();

const PORT = process.env.PORT_APP || 5000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', AuthRouter)

app.listen(PORT , () => {
    console.log(`Server Running Under Port : ${PORT}`);
})
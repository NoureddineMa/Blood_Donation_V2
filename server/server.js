require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const initDb = require('./Config/initDb')
const AuthRouter = require('./Routers/AuthRouter')
initDb();

const PORT = process.env.PORT_APP || 5000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/auth', AuthRouter)
app.use(cors({origin:true,credentials:true}))

app.listen(PORT , () => {
    console.log(`Server Running Under Port : ${PORT}`);
})
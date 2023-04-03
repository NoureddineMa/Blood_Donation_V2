const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
const initDb = require('./Config/initDb')
const AuthRouter = require('./Routers/AuthRouter')
const Donnateur = require('./Routers/DonnateurRouter')
const Patient = require('./Routers/PatientRouter')
const PORT = process.env.PORT_APP || 5000


initDb();

app.use(cors({credentials: true,}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/auth', AuthRouter)
app.use('/api',Donnateur)
app.use('/api' ,Patient)
app.listen(PORT , () => {
    console.log(`Server Running Under Port : ${PORT}`); 
})


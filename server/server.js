require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT_APP || 5000
require('./Config/dbConfig').connect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(PORT , () => {
    console.log(`Server Running Under Port : ${PORT}`);
})
const mongoose = require('mongoose')

const DB_CONNECT = process.env.DB_CONNECT;

const conn = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(DB_CONNECT , {
        useNewUrlParser : true
    })
    .then(() => {
        console.log("Successfuly Connected to DataBase !");
    })
    .catch((err) => {
        console.log("DataBase Connection Failed ...")
        console.log(err)
        process.exit(1)
    })
}

module.exports = conn;
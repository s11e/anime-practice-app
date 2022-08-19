require('dotenv').config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const {Sequelize,DataTypes}  = require("sequelize")

const router = require('./router')

const {PORT} = process.env



async function startServer(){

   


    
    const app = express()

    const port = PORT || 8080;

    // All middlewares
    app.use(cors())
    app.use(morgan("dev"))
    app.use(express.json())

    app.get('/',(req,res)=>{
    res.send("Server is up and running")
    })

    app.use(router)

    app.listen(port,()=>{
    console.log("Server started at port " +port)
    })
}


try{
    startServer()    
} catch(e){
    console.log("Bootstrapping Failed")
}



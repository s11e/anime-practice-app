require('dotenv').config()
const {Sequelize,DataTypes}  = require("sequelize")

const {PG_URL} = process.env
const sequelize = new Sequelize(PG_URL)
const db ={}

db.sequelize = sequelize;
db.Sequelize =  Sequelize;
db.Anime = require("./Anime")(sequelize,DataTypes)

// creating table
// const createTable = async()=>{
//     
//     await db.Anime.sync({ force: true });
//     console.log("The table for the User model was just (re)created!");

// }
// createTable()
 

module.exports = db;
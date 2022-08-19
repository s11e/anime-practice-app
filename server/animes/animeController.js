const {Op} = require("sequelize")

const db = require('../models/index')
const animes = require("../constants/animes");
const Anime = require("../models/Anime");

const getAllAnimes = async (req,res) => {
    const {searchText=""} = req.query;
    const conditions = searchText? {
        where: {
            name:{
                [Op.iRegexp]:searchText
            }
        }
    } : {};
    const data = await db.Anime.findAll(conditions);
    res.json(data)
}

const getAnimeById = async (req,res) => {
    try{
        const {animeId} = req.params;
        const response = await db.Anime.findByPk(parseInt(animeId))
        res.json({
            request:'success',
            response:response?response:"Invalid anime Id"
        })
    } catch(e){
        console.log(e)
    }
    
}

const addAnime = async (req,res) => {
    const {name,rating,poster} = req.body
    // console.log(db.Anime)
    const createdAnime = await db.Anime.create({
        name,
        rating:parseFloat(rating),
        poster
    })
    res.send({
        request:"success",
        data:createdAnime
    })
}
module.exports = {getAllAnimes,getAnimeById,addAnime}
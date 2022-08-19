const express = require("express")
const { getAllAnimes,getAnimeById,addAnime } = require("./animeController")

const animeRouter = express.Router()

animeRouter.get('/',getAllAnimes)

animeRouter.get('/:animeId',getAnimeById)

animeRouter.post('/add-anime',addAnime)

module.exports = animeRouter
const express = require("express")

const animeRouter = require("./animes/animeRouter")

const router = express.Router()

router.use('/animes',animeRouter)

module.exports = router
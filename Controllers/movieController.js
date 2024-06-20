const express = require("express")
const router = express.Router()
const movieService = require("../Services/movieService")

router.get("/", async (req, res) => {
    try {
        const movies = await movieService.getAllMovies()
        return res.json({ movies })
    }
    catch (e) {
        return res.json({ error: e.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const movie = req.body
        const status = await movieService.createMovie(movie)
        return res.json({ status })
    }
    catch (e) {
        return res.json({ error: e.message })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const movieData = req.body
        const status = movieService.updateMovie(id, body)
    }
    catch (e) {
        return res.json({ error: e.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const status = await movieService.deleteMovie(id)
        return res.json({ status })
    } catch (e) {
        return res.json({ error: e.message })
    }
})
module.exports = router

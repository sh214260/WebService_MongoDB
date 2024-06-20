const movieModel = require("../models/movieModel")

const getAllMovies = () => {
    return movieModel.find({})
}

const createMovie = async (newMovie) => {
    const movie = new movieModel(newMovie);
    await movie.save()
    return "Created..."
}

const updateMovie = async (id, movieData) => {
    await movieModel.findByIdAndUpdate(id, movieData)
    return "Updated..."
}

const deleteMovie = async (id) => {
    await movieModel.findByIdAndDelete(id)
    return "Deleted"
}

module.exports = { getAllMovies, updateMovie, deleteMovie, createMovie }
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/moviesDB")
    .then(() => {
        console.log("Connect to DB...");
    })

app.use(express.json())
app.use(cors())

const movieController = require("./Controllers/movieController")
app.use("/movies", movieController)

app.listen(8000, () => {
    console.log("Server is listening");
})
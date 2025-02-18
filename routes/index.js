const express = require('express');
const router = express.Router();
const Movie = require("../models/movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((response)=> {
        console.log(response)
        //response.forEach(eachMovies => {
       //     eachMovies.name 
       // });
       res.render("movies.hbs",{
        movies: response  
     })

    })
    .catch((err) => {
        next(err)
    })
})

router.get("/movies/:movieId", (req, res, next) => {

    const {movieId} = req.params

    Movie.findById(movieId)
    
    .then((unapeli) => {   // responde seria la peli correspondiente al id
        console.log(unapeli)

        res.render("details.hbs", {
           unapeli
        })
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router;

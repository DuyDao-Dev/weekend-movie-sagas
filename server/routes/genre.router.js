const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const movieId= req.params.id;
  console.log(`What is req.params.id on genre.router doing?`,req.params.id)
  // Add query to get all genres
    const genreQuery = 
    `SELECT genres.id, genres.name
    FROM genres 
    JOIN movies_genres ON movies_genres.genre_id = genres.id
    JOIN movies ON movies.id = movies_genres.movie_id
    WHERE "movies".id = $1;`;

    console.log(`What is genreList doing?`, movieId)
    pool
      .query(genreQuery, [movieId])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Get all matching movies genre", err);
        res.sendStatus(500);
      });

});

router.get("/all", (req, res) => {
  const genreId = req.params.id;
  console.log(`What is req.params.id on genre.router doing?`, req.params.id);
  // Add query to get all genres
  const allGenreQuery = `
    SELECT *
    FROM genres;`;

  console.log(`What is genreList doing?`, movieId);
  pool
    .query(allGenreQuery, [genreId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all matching movies genre", err);
      res.sendStatus(500);
    });
});

module.exports = router;
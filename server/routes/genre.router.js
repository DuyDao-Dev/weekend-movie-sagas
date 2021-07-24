const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const genreList= req.params.id;
  // Add query to get all genres
    const genreQuery = 
    `SELECT genres.name
    FROM genres 
    JOIN movies_genres ON movies_genres.genre_id = genres._id
    JOIN movies ON movies.id = movies_genres.movie_id
    WHERE "movies".id = $1;`;
    
    pool
      .query(genreQuery, genreList)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Get all matching movies genre", err);
        res.sendStatus(500);
      });

});

module.exports = router;
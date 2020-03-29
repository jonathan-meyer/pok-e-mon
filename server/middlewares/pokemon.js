const express = require('express');
const pokemon = require('pokemontcgsdk');

const router = express.Router();

router
  .get('/card', (req, res) => {
    res.status(404).send({ err: 'need a card name' });
  })
  .get('/card/:name', (req, res) => {
    pokemon.card
      .where({ name: req.params.name })
      .then(result => {
        res.send(result);
      })
      .catch(ex => {
        res.send(ex);
      });
  });

module.exports = router;

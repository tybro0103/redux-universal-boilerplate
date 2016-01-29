import express from 'express';
import _ from 'lodash';

import swapi from '../services/swapi';



let router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  swapi.get('/planets')
    .then(response => response.data.results)
    .then(planets => _.map(planets, planet => {
      let id = parseInt(planet.url.split('/planets/')[1])
      return {...planet, id};
    }))
    .then(planets => res.send(planets))
    .catch(error => res.status(500).send(error));
});

router.get('/:id', (req, res) => {
  swapi.get(`/planets/${req.params.id}`)
    .then(response => response.data)
    .then(planet => res.send(planet))
    .catch(error => res.status(500).send(error));
});



export default router;

import express from 'express';
import _ from 'lodash';

import swapi from '../services/swapi';



const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  swapi.get('/planets')
    .then(response => response.data.results)
    .then(planets => _.map(planets, planet => {
      const id = parseInt(planet.url.split('/planets/')[1])
      return {...planet, id};
    }))
    .then(planets => res.send(planets))
    .catch(error => res.status(500).send(error));
});

router.get('/:id', (req, res) => {
  const planetId = req.params.id;
  swapi.get(`/planets/${planetId}`)
    .then(response => response.data)
    .then(planet => ({...planet, id: planetId}))
    .then(planet => res.send(planet))
    .catch(error => res.status(500).send(error));
});



export default router;

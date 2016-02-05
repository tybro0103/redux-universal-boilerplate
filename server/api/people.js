import express from 'express';
import _ from 'lodash';

import swapi from '../services/swapi';



let router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  swapi.get('/people')
    .then(response => response.data.results)
    .then(people => _.map(people, person => {
      let id = parseInt(person.url.split('/people/')[1])
      return {...person, id};
    }))
    .then(people => res.send(people))
    .catch(error => res.status(500).send(error));
});

router.get('/:id', (req, res) => {
  let persontId = req.params.id;
  swapi.get(`/people/${persontId}`)
    .then(response => response.data)
    .then(person => ({...person, id: persontId}))
    .then(person => res.send(person))
    .catch(error => res.status(500).send(error));
});



export default router;

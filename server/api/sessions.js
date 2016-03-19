import express from 'express';



const router = express.Router({ mergeParams: true });

router.post('/login', (req, res) => {
  const password = req.body.password;
  if (password === 'taco') {
    req.session.signedIn = true;
    res.send({});
  } else {
    res.status(422).send({message: 'use the password "taco"'});
  }
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.send({});
});



export default router;

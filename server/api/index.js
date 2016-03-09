import express from 'express';

import auth from './auth';
import planets from './planets';
import people from './people';



const router = express.Router({ mergeParams: true });

router.use('/auth', auth);
router.use('/planets', planets);
router.use('/people', people);



export default router;

import express from 'express';

import planets from './planets';
import people from './people';



let router = express.Router({ mergeParams: true });

router.use('/planets', planets);
router.use('/people', people);



export default router;

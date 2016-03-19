import express from 'express';

import sessions from './sessions';
import planets from './planets';
import people from './people';



const router = express.Router({ mergeParams: true });

router.use('/sessions', sessions);
router.use('/planets', planets);
router.use('/people', people);



export default router;

import { Router } from 'express';
import { deletedata, getdata, postdata, putdata } from '../controller/controller.js'; // import controller function

const router = Router();

router.get('/getdata', getdata);
router.post('/postdata', postdata);
router.put('/putdata/:name', putdata);
router.delete('/deletedata/:name', deletedata);

export default router;

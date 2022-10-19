import express from 'express';
import {getHome} from '../Controller/HomeController';
const router = express.Router();

router.get('/', getHome);

export default router;
//module.exports=router
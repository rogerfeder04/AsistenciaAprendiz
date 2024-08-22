import httpBinnacles from "../controllers/binnacles.js"
import express from 'express';
import { check } from 'express-validator';
import {validarCampos} from "../middleware/validarCampos.js";



const router = express.Router();

router.get('/listallbinnacles',[
    check(),
    validarCampos
],httpBinnacles.listApprentices);


router.get('/listbinnaclesbyid/:id',[
    check('id').custom(binnacleHelper.existeBinnacleID),
    validarCampos
],httpBinnacles.listById);


router.get('/listbinnaclesbyassignment/:idassigment', [
    check(),
    validarCampos
],httpBinnacles.listarByAssignment);


router.get('/listbinnaclesbyinstructor/:idinstructor', [
    check(),
    validarCampos
],httpBinnacles.listarByInstructor);

router.post('/addbinnacles',[
    check(),
    validarCampos
], httpBinnacles.addBinnacle);

router.put('/updatebinnaclebyid/:id',[
    check(),
    validarCampos
], httpBinnacles. updateBinnacle);


router.put('/enablebinnaclebyid/:id',[
    check(),
    validarCampos
],httpBinnacles. enableBinnacle);


router.put('/disablebinnaclebyid/:id',[
    check(),
    validarCampos
],httpBinnacles. disableBinnacle);

export default router;
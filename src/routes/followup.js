
import httpFollowup from "./../controllers/followup.js"
import express from 'express';
import { check } from 'express-validator';
import {validarCampos} from "../middleware/validarCampos.js"
// import { followupHelper } from "./../helpers/followup.js";

const router = express.Router();

router.get('/listallfollowup',[
    check(),
    validarCampos
], httpFollowup.listallfollowup);

router.get('/listfollowupbyid/:id',[
    check(),
    validarCampos
], httpFollowup.listfollowupbyid);

router.get('/listfollowupbyassignment/:idassigment',[
    check(),
    validarCampos
], httpFollowup.listfollowupbyassignment);

router.get('/listfollowupbyinstructor/:idinstructor',[
    check(),
    validarCampos
], httpFollowup.listfollowupbyinstructor);

router.post('/addfollowup',[
    check(),
    validarCampos
], httpFollowup.insertfollowup);

router.put('/updatefollowupbyid/:id',[
    check(),
    validarCampos
], httpFollowup.updatefollowupbyid);

router.put('/enablefollowupbyid/:id',[
    check(),
    validarCampos
], httpFollowup.enablefollowupbyid);

router.put('/disablefollowupbyid/:id',[
    check(),
    validarCampos
], httpFollowup.disablefollowupbyid);



export default router;
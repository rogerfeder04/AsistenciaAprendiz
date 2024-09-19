import express from 'express';
import httpFollowup  from "./../controllers/followup.js";
import { check } from 'express-validator';
import validarCampos from "../middleware/validarCampos.js";
//import { followupHelper } from "./../helpers/followup.js";
//const { validarJWT } = require("../middlewares/validarJWT.js");

const router = express.Router();

router.get('/listallfollowup',[
    validarCampos
], httpFollowup.listallfollowup);

router.get('/listfollowupbyid/:id',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpFollowup.listfollowupbyid);

router.get('/listfollowupbyassignment/:idassigment',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpFollowup.listfollowupbyassignment);

router.get('/listfollowupbyinstructor/:idinstructor',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpFollowup.listfollowupbyinstructor);

router.post('/addfollowup',[
    check('assignment', 'El ID de assignment es obligatorio').notEmpty(),
    check('assignment', 'El ID de assignment no es valido').isMongoId(),
    check('instructor', 'El ID de instructor es obligatorio').notEmpty(),
    check('instructor', 'El ID de instructor no es valido').isMongoId(),
    check('number', 'El campo number es obligatorio').notEmpty(),
    check('month', 'El campo month debe ser una fecha valida').isDate(),
    //validarJWT,
    validarCampos    
], httpFollowup.insertFollowup);

router.put('/updatefollowupbyid/:id',[
    check(),
    //validarJWT,
    validarCampos
], httpFollowup.updatefollowupbyid);

router.put('/updatestatus/:id/:status',[
    check(),
    //validarJWT,
    validarCampos
], httpFollowup.updatestatus);




export default router;
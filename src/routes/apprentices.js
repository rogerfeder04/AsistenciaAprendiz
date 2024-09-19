import express from 'express';
import { check } from "express-validator";
import { Router } from 'express';
import httpApprentices from "../controllers/apprentices.js";
import validarCampos from "../middleware/validarCampos.js";
import {validarJWT} from "../middleware/validarJWT.js"
import apprenticeHelper from "../helpers/apprentices.js";

const router = express.Router();

router.get('/listallapprentice', [
    validarJWT,
    validarCampos
], httpApprentices.listApprentices);

router.get('/listapprenticebyid/:id', [
    validarJWT,
    check('id').custom(apprenticeHelper.existApprenticeID),
    validarCampos
], httpApprentices.listApprenticesByID);

router.get('/listapprenticebyfiche/:idfiche', [
    validarJWT,
    check('id').custom(apprenticeHelper.existeFicheID),
    validarCampos
], httpApprentices.listApprenticesByFiche);

router.get('/listapprenticebystatus/:status', [
    validarJWT,
], httpApprentices.listApprenticeByStatus);  // Coma adicional removida

router.post('/addapprentice', [
    validarJWT,
    check('id').custom(apprenticeHelper.existeFicheID),
    check('numDocument', 'el documento es obligatorio').not().isEmpty(),
    check('firstName', 'el nombre es obligatorio').not().isEmpty(),
    check('lastName', 'el apellido es obligatorio').not().isEmpty(),
    check('phone', 'el telefono es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').not().isEmpty(),
    validarCampos
], httpApprentices.addApprentice);

router.put('/updateapprenticebyid/:id', [
    validarJWT,
    check('id').custom(apprenticeHelper.existApprenticeID),
    check('numDocument', 'el documento es obligatorio').not().isEmpty(),
    check('firstName', 'el nombre es obligatorio').not().isEmpty(),
    check('lastName', 'el apellido es obligatorio').not().isEmpty(),
    check('phone', 'el telefono es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').not().isEmpty(),
    validarCampos
], httpApprentices.updateApprenticeByID);

router.put('/enableapprentice/:id', [
    validarJWT,
    check('id').custom(apprenticeHelper.existApprenticeID),
    validarCampos
], httpApprentices.enableApprencice);

router.put('/disableapprentice/:id', [
    validarJWT,
    check('id').custom(apprenticeHelper.existApprenticeID),
    validarCampos
], httpApprentices.disableApprentice);

export default router;

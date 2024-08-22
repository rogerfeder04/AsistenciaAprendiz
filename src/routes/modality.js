import httpModality from "../controllers/modality.js"
import express from 'express';
import { check } from 'express-validator'


import {validarJWT} from "../middleware/validarJWT.js"
import  modalityHelper from "../helpers/modality.js";
import {validarCampos} from "../middleware/validarCampos.js"

const router = express.Router();

// Listar todos los registros modalidad

router.get('/listallmodality', [
    validarJWT
], httpModality.listallModality);


// Listar modalidad por su ID
router.get('/listmodalitybyid/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(modalityHelper.existeModalityID),
], httpModality.listModalityById);


// Añadir  Modalidad
router.post('/addmodality', [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check('hourInstructorFollow', "La hora del seguimiento del instructor es obligatoria").isNumeric(),
    check("hourInstructorTechnical", "La contraseña es obligatoria").not().isEmpty(),
    check("hourInstructorProject", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpModality.addModality);



//Actualizar los datos de la modalidad
router.put('/updatemodalitybyid/:id', [
    // check("email", "El email es obligatorio").not().isEmpty(),
    // check('email', "El email no es valido").isEmail(),
    // check("password", "La contraseña es obligatoria").not().isEmpty(),
    // validarCampos
], httpModality.updateModalityById);

//Activar una modalidad
router.put('/enablemodalitybyid/:id', [
    // check("email", "El email es obligatorio").not().isEmpty(),
    // check('email', "El email no es valido").isEmail(),
    // check("password", "La contraseña es obligatoria").not().isEmpty(),
    // validarCampos
], httpModality.enableModalityById);

//Desactivar  una modalidad
router.put('/disablemodalitybyid/:id', [
    // check("email", "El email es obligatorio").not().isEmpty(),
    // check('email', "El email no es valido").isEmail(),
    // check("password", "La contraseña es obligatoria").not().isEmpty(),
    // validarCampos
], httpModality.disableModalityById);

export default router;
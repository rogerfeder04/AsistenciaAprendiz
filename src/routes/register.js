import httpRegisters from "../controllers/register.js"
import express from 'express';
import { check } from 'express-validator'
import {validarCampos} from "../middleware/validarCampos.js"
import {validarJWT} from "../middleware/validarJWT.js"
import { registerHelper } from "../helpers/register.js";


const router = express.Router();

// Listar todos los registros
router.get('/listallregister', [
    validarJWT
], httpRegisters.listAllRegister);

// Listar un registro por su ID
router.get('/listregisterbyid/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(registerHelper.existRegisterID),
    validarCampos
], httpRegisters.listRegisterById);

// Listar registro por el ID del aprendiz
router.get('/listregisterbyapprentice/:idapprentice', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(apprenticeHelper.existRegisterID),
    validarCampos
], httpRegisters.listRegisterByApprentice);

// Listar registros por ID de ficha
router.get('/listregistersbyfiche/:idfiche', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(ficheHelper.existRegisterID),
    validarCampos
], httpRegisters.listRegistersByFiche);

// Listar registros por ID de modalidad
router.get('/listregisterbymodality/:idmodality', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(modalityHelper.existRegisterID),
    validarCampos
], httpRegisters.listRegisterByModality);

// Listar los registros por fecha de inicio 
router.get('/listregisterbystartdate', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(modalityHelper.existRegisterID),
    validarCampos
], httpRegisters.listRegisterByStartDate);

// Listar los registros por fecha de finalización
router.get('/listregisterbyenddate', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(modalityHelper.existRegisterID),
    validarCampos
], httpRegisters.listRegisterByEndDate);

// Añadir  Registro
router.post('/addregister', [
    check("email", "El email es obligatorio").not().isEmpty(),
    check('email', "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpRegisters.addRegister);

// Actualizar los datos del registro
router.put('/updateregisterbyid/:id', [
    check("email", "El email es obligatorio").not().isEmpty(),
    check('email', "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpRegisters.updateRegisterById);
 
// Activar un registro
router.put('/enableregister/:id', [
    check("email", "El email es obligatorio").not().isEmpty(),
    check('email', "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpRegisters.enableRegister);


// Desactivar un registro
router.put('/disabledesactivateregister/:id', [
    check("email", "El email es obligatorio").not().isEmpty(),
    check('email', "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpRegisters.disableDesactivateRegister);



export default router;

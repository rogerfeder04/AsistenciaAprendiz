import httpUsuarios from "../controllers/users.js"
import express from 'express';
import { check } from 'express-validator'
import {validarCampos} from "../middleware/validarCampos.js"
import {validarJWT} from "../middleware/validarJWT.js"
import userHelper from "../helpers/users.js";

const router = express.Router();

router.get('/usuarios', [
    validarJWT
], httpUsuarios.listAllUsers);

router.get('/usuarios/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userHelper.existUserID),
    validarCampos
], httpUsuarios.listUserById);

router.get('/activos', [
    validarJWT
], httpUsuarios.listEnableUsers);

router.get('/inactivos', [
    validarJWT
], httpUsuarios.listUsersDisables);

router.post('/usuarios', [
    check('email', 'El documento es obligatorio!').not().isEmpty(),
    check('email').custom(userHelper.existEmail),
    check('password', 'Password no es válido').isLength({ min: 8, max: 15 }),
    validarCampos
], httpUsuarios.addUsers);

router.post('/usuarios/login', [
    check("email", "El email es obligatorio").not().isEmpty(),
    check('email', "El email no es valido").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpUsuarios.login);

router.put('/pass/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userHelper.existUserID),
    check('newPassword', 'Password no es válido').isLength({ min: 8, max: 15 }),
    validarCampos
], httpUsuarios.updatePassword);

router.put('/mail/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userHelper.existUserID),
    check("email", "El email es obligatorio").notEmpty(),
    check('email', "El email no es valido").isEmail(),
    validarCampos
], httpUsuarios.updatePassword);

router.put('/activar/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userHelper.existUserID),
    validarCampos
], httpUsuarios.enableUser);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(userHelper.existUserID),
    validarCampos
], httpUsuarios.disableUser);

export default router;
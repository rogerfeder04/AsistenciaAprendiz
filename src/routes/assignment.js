import httpAssignments from "./../controllers/assignment.js"
import express from 'express';
import { check } from 'express-validator';
import validarCampos from "../middleware/validarCampos.js";
import  assignmentHelper  from "./../helpers/assignment.js";

const router = express.Router();

router.get('/listallassignment',[
    validarCampos
], httpAssignments.listAllAssignments);

router.get('/listassignmentbyid/:id', [
    check('id', 'El id proporcionado no es valido').isMongoId(),
    check('id').custom(assignmentHelper.existAssignmentByID),
    validarCampos
], httpAssignments.listAssignmentsByID);

router.get('/listassignmentbyregister/:idregister',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpAssignments.listAssignmentsByRegister);

router.get('/listassigmentbyfollowupinstructor/:id',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpAssignments.listAssignmentsByFollowupInstructor);

router.get('/listassigmentbytechnicalinstructor/:id',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpAssignments.listAssignmentsByTechnicalInstructor);

router.get('/listassigmentbyprojectinstructor/:id',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    //validarJWT,
    validarCampos
], httpAssignments.listAssignmentsByProjectInstructor);

router.post('/addassignment',[
    check(),
    validarCampos
], httpAssignments.addAssignment);

router.put('/updateassignmentbyid/:id',[
    check('id', 'El id proporcionado no es valido').isMongoId(),
    check(),
    //validarJWT,
    validarCampos
], httpAssignments.updateAssignmentByID);

router.put('/enableassignmentbyid/:id',[
    check(),
    //validarJWT,
    validarCampos
], httpAssignments.enableAssignmentByID);

router.put('/disableassigmentbyid/:id',[
    check(),
    validarCampos
], httpAssignments.disableAssignmentByID);



export default router;
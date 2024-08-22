import httpAssignments from "./../controllers/assignment.js"
import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from "../middleware/validarCampos.js";
// import { assignmentHelper } from "./../helpers/assignment.js";

const router = express.Router();

router.get('/listallassignment',[
    validarCampos
], httpAssignments.listAllAssignments);

router.get('/listassignmentbyid/:id', [
    validarCampos
], httpAssignments.listAssignmentsByID);

router.get('/listassignmentbyregister/:idregister',[
    validarCampos
], httpAssignments.listAssignmentsByRegister);

router.get('/listassigmentbyfollowupinstructor/:id',[
    validarCampos
], httpAssignments.listAssignmentsByFollowupInstructor);

router.get('/listassigmentbytechnicalinstructor/:id',[
    validarCampos
], httpAssignments.listAssignmentsByTechnicalInstructor);

router.get('/listassigmentbyprojectinstructor/:id',[
    validarCampos
], httpAssignments.listAssignmentsByProjectInstructor);

router.post('/addassignment',[
    check(),
    validarCampos
], httpAssignments.addAssignment);

router.put('/updateassignmentbyid/:id',[
    check(),
    validarCampos
], httpAssignments.updateAssignmentByID);

router.put('/enableassignmentbyid/:id',[
    check(),
    validarCampos
], httpAssignments.enableAssignmentByID);

router.put('/disableassigmentbyid/:id',[
    check(),
    validarCampos
], httpAssignments.disableAssignmentByID);



export default router;
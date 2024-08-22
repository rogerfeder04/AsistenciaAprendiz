import httpLog from "../controllers/logs.js"
import express from 'express';
import { check } from 'express-validator';
import {validarCampos} from "../middleware/validarCampos.js";
import {logHelper} from "../helpers/logs.js"


router.get('/listlogs',[

],httpLog.listLogs);


router.get('/listlogs/:id',[
    check('id').custom(logHelper.existeLogID),
    // validarCampos
],httpLog.listById);



router.post('/addlog',[
    check(),
    // validarCampos
], httpLog.addlog);


router.put('/enablelogsbyid/:id',[
    check(),
    // validarCampos
],httpLog. enableLog);


router.put('/disablelogsbyid/:id',[
    check(),
    // validarCampos
],httpLog. disableLog);


export default router;
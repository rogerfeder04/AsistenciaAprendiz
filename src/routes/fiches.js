import express from 'express';
import { check } from 'express-validator';
import httpFiches from '../controllers/fiches.js';

const router = express.Router();

router.post('/', [
], httpFiches.addFiche);

router.get('/listar', [
], httpFiches.listAllFiches);

router.get('/listar/:id', [
], httpFiches.listFicheById;)

router.put('/activarDesactivar/:id', [
], httpFiches.enableDisableFiche);

router.put('/editar/:id', [
], httpFiches.updateFiche)


export default router;

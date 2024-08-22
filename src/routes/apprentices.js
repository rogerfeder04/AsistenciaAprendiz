import httpApprentices from "../controllers/apprentices.js"
import express from 'express';

const router = express.Router();

router.get('/listallapprentice', httpApprentices.listApprentices);
router.get('/listapprenticebyid/:id', httpApprentices.listApprenticesByID);
router.get('/listapprenticebyfiche/:idfiche', httpApprentices.listApprenticesByFiche);
 router.get('/listapprenticebystatus/:status', httpApprentices.listApprenticeByStatus);
router.post('/addapprentice', httpApprentices.addApprentice);
router.post('/updateapprenticebyid/:id', httpApprentices.updateApprenticeByID);
router.put('/enableapprentice/:id', httpApprentices.enableApprencice);
router.put('/disableapprentice/:id', httpApprentices.disableApprentice);

export default router;
const express = require('express');

const router = express.Router();

const doctor_wiseController = require('../controllers/appointment.controller');

router.get('/',doctor_wiseController.getdoctor_wise);
router.get('/:doctor',doctor_wiseController.getdoctor_wiselistById);
router.post('/',doctor_wiseController.createdoctor_wise);

module.exports = router;
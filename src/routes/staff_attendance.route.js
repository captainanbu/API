const express = require('express');

const router = express.Router();

const staffattendancecontroller = require('../controllers/staff_attendance.controller');
router.get('/',staffattendancecontroller.getstaffattendance);
router.post('/',staffattendancecontroller.createstaff);

module.exports = router;
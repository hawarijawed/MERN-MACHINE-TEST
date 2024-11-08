const express = require('express');
const multer = require('multer');
const { createEmployee, updateEmployee, deleteEmployee, getEmployees } = require('../Controllers/EmployeeController');
const auth = require('../Middleware/AuthMiddleWare');

const router = express.Router();
const upload = multer({dest:'uploads/'});

router.post('/',auth, upload.single('image'),createEmployee);
router.get('/',auth, getEmployees);
router.put('/:id',auth, updateEmployee);
router.put('/:id',auth, deleteEmployee);

module.exports = router;
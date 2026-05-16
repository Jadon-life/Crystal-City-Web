const express = require('express');
const router = express.Router();
const { getAllStudents, createStudent, updateStudent, deleteStudent, getDashboardStats, getMessages } = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/auth');

// All routes require admin access
router.use(protect, adminOnly);

router.get('/stats', getDashboardStats);
router.get('/students', getAllStudents);
router.post('/students', createStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);
router.get('/messages', getMessages);

module.exports = router;

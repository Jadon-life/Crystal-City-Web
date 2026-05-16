const express = require('express');
const router = express.Router();
const { getEvents, createEvent, updateEvent, deleteEvent, getCalendar, createCalendarEntry } = require('../controllers/eventController');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', getEvents);
router.post('/', protect, adminOnly, createEvent);
router.put('/:id', protect, adminOnly, updateEvent);
router.delete('/:id', protect, adminOnly, deleteEvent);

// Calendar routes
router.get('/calendar', getCalendar);
router.post('/calendar', protect, adminOnly, createCalendarEntry);

module.exports = router;

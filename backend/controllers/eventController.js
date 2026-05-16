const pool = require('../config/database');

// @desc    Get all events (public)
// @route   GET /api/events
const getEvents = async (req, res) => {
  try {
    const { upcoming = 'true', limit = 10 } = req.query;
    let query = `
      SELECT e.*, u.first_name || ' ' || u.last_name as author_name
      FROM events e
      LEFT JOIN users u ON e.author_id = u.id
      WHERE e.is_published = true
    `;

    if (upcoming === 'true') {
      query += ` AND e.event_date >= CURRENT_DATE`;
    }

    query += ` ORDER BY e.event_date ASC LIMIT $1`;

    const result = await pool.query(query, [limit]);
    res.json({ events: result.rows });
  } catch (error) {
    console.error('Get events error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create event (admin)
// @route   POST /api/events
const createEvent = async (req, res) => {
  const { title, description, event_date, event_time, location, category } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO events (title, description, event_date, event_time, location, category, author_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, description, event_date, event_time, location, category || 'general', req.user.id]
    );

    res.status(201).json({ event: result.rows[0] });
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update event (admin)
// @route   PUT /api/events/:id
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, event_date, event_time, location, category, is_published } = req.body;

  try {
    const result = await pool.query(
      `UPDATE events SET title=$1, description=$2, event_date=$3, event_time=$4, location=$5, category=$6, is_published=$7, updated_at=CURRENT_TIMESTAMP
       WHERE id=$8 RETURNING *`,
      [title, description, event_date, event_time, location, category, is_published, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ event: result.rows[0] });
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete event (admin)
// @route   DELETE /api/events/:id
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM events WHERE id = $1 RETURNING id', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get calendar entries
// @route   GET /api/calendar
const getCalendar = async (req, res) => {
  try {
    const { month, year } = req.query;
    let query = 'SELECT * FROM calendar_entries WHERE 1=1';
    const params = [];

    if (month && year) {
      params.push(month, year);
      query += ` AND EXTRACT(MONTH FROM start_date) = $1 AND EXTRACT(YEAR FROM start_date) = $2`;
    }

    query += ' ORDER BY start_date ASC';
    const result = await pool.query(query, params);
    res.json({ entries: result.rows });
  } catch (error) {
    console.error('Get calendar error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create calendar entry (admin)
// @route   POST /api/calendar
const createCalendarEntry = async (req, res) => {
  const { title, description, start_date, end_date, entry_type } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO calendar_entries (title, description, start_date, end_date, entry_type, author_id)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, start_date, end_date, entry_type || 'event', req.user.id]
    );

    res.status(201).json({ entry: result.rows[0] });
  } catch (error) {
    console.error('Create calendar entry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent, getCalendar, createCalendarEntry };

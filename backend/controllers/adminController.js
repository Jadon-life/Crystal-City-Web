const bcrypt = require('bcryptjs');
const pool = require('../config/database');

// @desc    Get all students (admin)
// @route   GET /api/admin/students
const getAllStudents = async (req, res) => {
  try {
    const { search, class_name, limit = 20, offset = 0 } = req.query;
    let query = `SELECT id, email, first_name, last_name, phone, class_name, admission_number, parent_name, parent_phone, is_active, created_at FROM users WHERE role = 'student'`;
    const params = [];

    if (search) {
      params.push(`%${search}%`);
      query += ` AND (first_name ILIKE $${params.length} OR last_name ILIKE $${params.length} OR admission_number ILIKE $${params.length})`;
    }

    if (class_name) {
      params.push(class_name);
      query += ` AND class_name = $${params.length}`;
    }

    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const result = await pool.query(query, params);
    const countResult = await pool.query("SELECT COUNT(*) FROM users WHERE role = 'student'");

    res.json({
      students: result.rows,
      total: parseInt(countResult.rows[0].count)
    });
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a student (admin)
// @route   POST /api/admin/students
const createStudent = async (req, res) => {
  const { email, password, first_name, last_name, phone, class_name, admission_number, parent_name, parent_phone } = req.body;

  try {
    const existingUser = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password || 'student123', 12);

    const result = await pool.query(
      `INSERT INTO users (email, password, first_name, last_name, role, phone, class_name, admission_number, parent_name, parent_phone)
       VALUES ($1, $2, $3, $4, 'student', $5, $6, $7, $8, $9)
       RETURNING id, email, first_name, last_name, role, class_name, admission_number`,
      [email, hashedPassword, first_name, last_name, phone, class_name, admission_number, parent_name, parent_phone]
    );

    res.status(201).json({ student: result.rows[0] });
  } catch (error) {
    console.error('Create student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a student (admin)
// @route   PUT /api/admin/students/:id
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, phone, class_name, admission_number, parent_name, parent_phone, is_active } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users SET first_name = $1, last_name = $2, phone = $3, class_name = $4, admission_number = $5, parent_name = $6, parent_phone = $7, is_active = $8, updated_at = CURRENT_TIMESTAMP
       WHERE id = $9 AND role = 'student' RETURNING id, email, first_name, last_name, class_name, admission_number`,
      [first_name, last_name, phone, class_name, admission_number, parent_name, parent_phone, is_active, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ student: result.rows[0] });
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a student (admin)
// @route   DELETE /api/admin/students/:id
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1 AND role = 'student' RETURNING id", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get dashboard stats (admin)
// @route   GET /api/admin/stats
const getDashboardStats = async (req, res) => {
  try {
    const students = await pool.query("SELECT COUNT(*) FROM users WHERE role = 'student'");
    const announcements = await pool.query("SELECT COUNT(*) FROM announcements");
    const events = await pool.query("SELECT COUNT(*) FROM events WHERE event_date >= CURRENT_DATE");
    const messages = await pool.query("SELECT COUNT(*) FROM contact_messages WHERE is_read = false");

    res.json({
      totalStudents: parseInt(students.rows[0].count),
      totalAnnouncements: parseInt(announcements.rows[0].count),
      upcomingEvents: parseInt(events.rows[0].count),
      unreadMessages: parseInt(messages.rows[0].count)
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get contact messages (admin)
// @route   GET /api/admin/messages
const getMessages = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50');
    res.json({ messages: result.rows });
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllStudents, createStudent, updateStudent, deleteStudent, getDashboardStats, getMessages };

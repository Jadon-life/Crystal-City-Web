const pool = require('../config/database');

// @desc    Get all announcements (public)
// @route   GET /api/announcements
const getAnnouncements = async (req, res) => {
  try {
    const { limit = 10, offset = 0, category } = req.query;
    let query = `
      SELECT a.*, u.first_name || ' ' || u.last_name as author_name
      FROM announcements a
      LEFT JOIN users u ON a.author_id = u.id
      WHERE a.is_published = true
    `;
    const params = [];

    if (category) {
      params.push(category);
      query += ` AND a.category = $${params.length}`;
    }

    query += ` ORDER BY a.created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const result = await pool.query(query, params);
    const countResult = await pool.query('SELECT COUNT(*) FROM announcements WHERE is_published = true');

    res.json({
      announcements: result.rows,
      total: parseInt(countResult.rows[0].count)
    });
  } catch (error) {
    console.error('Get announcements error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create announcement (admin)
// @route   POST /api/announcements
const createAnnouncement = async (req, res) => {
  const { title, content, category, target_audience } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO announcements (title, content, category, target_audience, author_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, content, category || 'general', target_audience || 'all', req.user.id]
    );

    res.status(201).json({ announcement: result.rows[0] });
  } catch (error) {
    console.error('Create announcement error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update announcement (admin)
// @route   PUT /api/announcements/:id
const updateAnnouncement = async (req, res) => {
  const { id } = req.params;
  const { title, content, category, target_audience, is_published } = req.body;

  try {
    const result = await pool.query(
      `UPDATE announcements SET title = $1, content = $2, category = $3, target_audience = $4, is_published = $5, updated_at = CURRENT_TIMESTAMP
       WHERE id = $6 RETURNING *`,
      [title, content, category, target_audience, is_published, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.json({ announcement: result.rows[0] });
  } catch (error) {
    console.error('Update announcement error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete announcement (admin)
// @route   DELETE /api/announcements/:id
const deleteAnnouncement = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM announcements WHERE id = $1 RETURNING id', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Delete announcement error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement };

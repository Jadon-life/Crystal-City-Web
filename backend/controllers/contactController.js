const pool = require('../config/database');

// @desc    Submit contact form (public)
// @route   POST /api/contact
const submitContact = async (req, res) => {
  const { sender_name, sender_email, subject, message } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (sender_name, sender_email, subject, message)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [sender_name, sender_email, subject, message]
    );

    res.status(201).json({ 
      message: 'Your message has been sent successfully! We will get back to you soon.',
      contact: result.rows[0] 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { submitContact };

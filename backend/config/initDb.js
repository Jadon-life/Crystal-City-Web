/**
 * Database Initialization Script
 * Run with: npm run db:init
 * This creates all necessary tables for the school website.
 */
const pool = require('./database');
const bcrypt = require('bcryptjs');

const createTables = async () => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    // Users table (for both admins and students/parents)
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'student' CHECK (role IN ('admin', 'student', 'parent')),
        phone VARCHAR(20),
        address TEXT,
        class_name VARCHAR(50),
        admission_number VARCHAR(50) UNIQUE,
        parent_name VARCHAR(200),
        parent_phone VARCHAR(20),
        profile_image VARCHAR(500),
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Announcements table
    await client.query(`
      CREATE TABLE IF NOT EXISTS announcements (
        id SERIAL PRIMARY KEY,
        title VARCHAR(300) NOT NULL,
        content TEXT NOT NULL,
        category VARCHAR(50) DEFAULT 'general' CHECK (category IN ('general', 'academic', 'sports', 'event', 'urgent')),
        author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        is_published BOOLEAN DEFAULT true,
        target_audience VARCHAR(20) DEFAULT 'all' CHECK (target_audience IN ('all', 'students', 'parents', 'staff')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Events table
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(300) NOT NULL,
        description TEXT,
        event_date DATE NOT NULL,
        event_time TIME,
        location VARCHAR(200),
        category VARCHAR(50) DEFAULT 'general',
        author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        is_published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Contact messages table
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        sender_name VARCHAR(200) NOT NULL,
        sender_email VARCHAR(255) NOT NULL,
        subject VARCHAR(300) NOT NULL,
        message TEXT NOT NULL,
        is_read BOOLEAN DEFAULT false,
        replied_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Academic calendar table
    await client.query(`
      CREATE TABLE IF NOT EXISTS calendar_entries (
        id SERIAL PRIMARY KEY,
        title VARCHAR(300) NOT NULL,
        description TEXT,
        start_date DATE NOT NULL,
        end_date DATE,
        entry_type VARCHAR(50) DEFAULT 'event' CHECK (entry_type IN ('event', 'holiday', 'exam', 'meeting', 'deadline')),
        author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    await client.query(`
      INSERT INTO users (email, password, first_name, last_name, role)
      VALUES ('admin@crystalcity.edu', $1, 'Admin', 'User', 'admin')
      ON CONFLICT (email) DO NOTHING;
    `, [hashedPassword]);

    await client.query('COMMIT');
    console.log('✅ All tables created successfully!');
    console.log('✅ Default admin created: admin@crystalcity.edu / admin123');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Error creating tables:', error.message);
  } finally {
    client.release();
    pool.end();
  }
};

createTables();

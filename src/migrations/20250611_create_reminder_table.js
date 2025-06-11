import db from '../config/db.js';

export async function up() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS reminders (
                id SERIAL PRIMARY KEY,
                reminder VARCHAR(255) NOT NULL,
                notes TEXT,
                completed BOOLEAN DEFAULT FALSE,
                user_id INT REFERENCES users(id) ON DELETE CASCADE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Table 'reminders' created successfully.");
    } catch (error) {
        console.error("Error creating table:", error);
    }
}

export async function down() {
    try {
        await db.query(`DROP TABLE IF EXISTS reminders;`);
        console.log("Table 'reminders' dropped successfully.");
    } catch (error) {
        console.error("Error dropping table:", error);
    }
}

up(); // only run this if you're intentionally running the migration manually

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/todo.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                completed INTEGER
            )`, (err) => {
            if (err) {
                console.error('Error creating table:', err);
            }
        });
    }
});

module.exports = db;
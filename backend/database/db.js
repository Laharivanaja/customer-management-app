const sqlite3 = require("sqlite3").verbose()
const path = require("path")

const db = new sqlite3.Database(
  path.join(__dirname, "customers.db"),
  (err) => {
    if (err) {
      console.error("Database connection failed", err)
    } else {
      console.log("Connected to SQLite database")
    }
  }
)

// Customers table
db.run(`
  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL
  )
`)

// Addresses table
db.run(`
  CREATE TABLE IF NOT EXISTS addresses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    address_line TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
  )
`)

module.exports = db

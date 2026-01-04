const express = require("express")
const router = express.Router()
const db = require("../database/db")

// CREATE customer
router.post("/", (req, res) => {
  const { first_name, last_name, phone, city, state, pincode } = req.body

  if (!first_name || !last_name || !phone) {
    return res.status(400).json({ message: "Required fields missing" })
  }

  const query = `
    INSERT INTO customers (first_name, last_name, phone, city, state, pincode)
    VALUES (?, ?, ?, ?, ?, ?)
  `

  db.run(query, [first_name, last_name, phone, city, state, pincode], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: "Customer created successfully", id: this.lastID })
  })
})

// READ all customers (with filters)
router.get("/", (req, res) => {
  const { city, state, pincode } = req.query

  let query = "SELECT * FROM customers WHERE 1=1"
  const params = []

  if (city) {
    query += " AND city = ?"
    params.push(city)
  }
  if (state) {
    query += " AND state = ?"
    params.push(state)
  }
  if (pincode) {
    query += " AND pincode = ?"
    params.push(pincode)
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(rows)
  })
})

// READ single customer
router.get("/:id", (req, res) => {
  db.get(
    "SELECT * FROM customers WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.json(row)
    }
  )
})

// UPDATE customer
router.put("/:id", (req, res) => {
  const { first_name, last_name, phone } = req.body

  const query = `
    UPDATE customers
    SET first_name = ?, last_name = ?, phone = ?
    WHERE id = ?
  `

  db.run(query, [first_name, last_name, phone, req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: "Customer updated successfully" })
  })
})

// DELETE customer
router.delete("/:id", (req, res) => {
  db.run(
    "DELETE FROM customers WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.json({ message: "Customer deleted successfully" })
    }
  )
})

module.exports = router

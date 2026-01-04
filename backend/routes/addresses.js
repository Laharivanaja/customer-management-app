const express = require("express")
const router = express.Router()
const db = require("../database/db")

// ADD address
router.post("/:customerId", (req, res) => {
  const { address_line, city, state, pincode } = req.body
  const { customerId } = req.params

  const query = `
    INSERT INTO addresses (customer_id, address_line, city, state, pincode)
    VALUES (?, ?, ?, ?, ?)
  `

  db.run(query, [customerId, address_line, city, state, pincode], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: "Address added successfully" })
  })
})

// GET addresses for a customer
router.get("/:customerId", (req, res) => {
  db.all(
    "SELECT * FROM addresses WHERE customer_id = ?",
    [req.params.customerId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.json(rows)
    }
  )
})

// UPDATE address
router.put("/edit/:id", (req, res) => {
  const { address_line, city, state, pincode } = req.body

  const query = `
    UPDATE addresses
    SET address_line = ?, city = ?, state = ?, pincode = ?
    WHERE id = ?
  `

  db.run(query, [address_line, city, state, pincode, req.params.id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ message: "Address updated successfully" })
  })
})

module.exports = router

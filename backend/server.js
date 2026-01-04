const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const customerRoutes = require("./routes/customers")
const addressRoutes = require("./routes/addresses")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/customers", customerRoutes)
app.use("/addresses", addressRoutes)

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

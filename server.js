require("dotenv").config()
const express = require("express")
const cors = require("cors")
const routes = require("./src/router")
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json({ limit: "7mb" }))

app.use("/", routes)

app.listen(port)
